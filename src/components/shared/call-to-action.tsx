"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface Props {
    className?: string
}

export function CallToAction({ className }: Props) {
    return (
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-3xl bg-foreground sm:flex-row sm:items-end">
            <div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-muted">
                    Не нашли свою задачу?
                </h3>
                <p className="text-sm text-text">
                    Напишите — обсудим и придумаем решение.
                </p>
            </div>

            <Button
                href="#contacts"
                className="w-full shrink-0 flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-white sm:w-auto"
            >
                Обсудить проект
            </Button>
        </div>
    );
}
