"use client";

import { useEffect, useState } from "react";

export function CurrentTime({ className }: { className?: string }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Intl.DateTimeFormat("ru-RU", {
                timeZone: "Europe/Moscow",
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23"
            }).format(new Date());

            setTime(currentTime);
        };

        updateTime();

        // Ждём до начала следующей минуты, потом тикаем каждые 60с
        const now = new Date();
        const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        const timeout = setTimeout(() => {
            updateTime();
            const interval = setInterval(updateTime, 60_000);
            return () => clearInterval(interval);
        }, msUntilNextMinute);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <p className={className}>
            Россия, Волгоград &mdash; <span className="animate-pulse">{time || "--:--"}</span> GMT +3
        </p>
    );
}
