"use server";

import { contactSchema } from "@/constants/contact-data";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const COOLDOWN_MS = 15 * 60 * 1000;

/** Экранирует спецсимволы Markdown v1 для безопасной вставки в Telegram */
function escapeMarkdown(text: string): string {
    return text.replace(/([_*`\[\]])/g, "\\$1");
}

export async function SendMessage(data: unknown) {
    // Серверная валидация — клиентскую можно обойти
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: "Некорректные данные формы" };
    }

    const { name, email, message, materialsLink } = parsed.data;
    const ip = (await headers()).get("x-forwarded-for") ?? "anonymous";

    const redis = Redis.fromEnv();
    const key = `contact-cooldown:${ip}`;

    const lastSent = await redis.get<number>(key);
    const now = Date.now();

    // Строгий кулдаун ровно 15 минут с момента последней успешной отправки
    if (lastSent) {
        const elapsed = now - lastSent;
        if (elapsed < COOLDOWN_MS) {
            const minutesLeft = Math.ceil((COOLDOWN_MS - elapsed) / 60000);
            return { success: false, error: `Подождите ${minutesLeft} мин. перед следующей отправкой` };
        }
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env");
        return { success: false, error: "Ошибка настройки сервера" };
    }

    const text = [
        '📩 *Новая заявка с портфолио\\!*',
        '',
        `👤 *Имя:* ${escapeMarkdown(name)}`,
        `📧 *Email:* ${escapeMarkdown(email)}`,
        `💬 *Сообщение:* ${escapeMarkdown(message)}`,
        ...(materialsLink ? [`🔗 *Материалы:* ${escapeMarkdown(materialsLink)}`] : []),
    ].join('\n');

    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "Markdown",
            }),
        });

        if (!res.ok) {
            const errorBody = await res.json();
            console.error("Telegram error:", errorBody);
            throw new Error("Ошибка API");
        }

        // Только после успешной отправки фиксируем время, чтобы кулдаун был честным
        await redis.set(key, now, { ex: Math.ceil(COOLDOWN_MS / 1000) });

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Не удалось отправить сообщение" };
    }
}
