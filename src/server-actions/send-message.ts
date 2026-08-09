"use server";

import { ContactFormValues } from "@/constants/contact-data";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(1, "15m"),
});

export async function SendMessage(data: ContactFormValues) {
    const { name, email, message, materialsLink } = data;
    const ip = (await headers()).get("x-forwarded-for") ?? "anonymous";
    const { success, reset } = await rateLimit.limit(ip);
    if (!success) {
        const minutesLeft = Math.ceil((reset - Date.now()) / 60000);
        return { success: false, error: `Подождите ${minutesLeft} мин. перед следующей отправкой` };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env");
        return { success: false, error: "Ошибка настройки сервера" };
    }

    const text = [
        '📩 *Новая заявка с портфолио!*',
        '',
        `👤 *Имя:* ${name}`,
        `📧 *Email:* ${email}`,
        `💬 *Сообщение:* ${message}`,
        ...(materialsLink ? [`🔗 *Материалы:* ${materialsLink}`] : []),
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

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Не удалось отправить сообщение" };
    }
}