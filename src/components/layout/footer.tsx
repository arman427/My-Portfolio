"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT_SOCIAL } from "@/constants/about-social-data";
import { Container, CurrentTime } from "../shared";

const CONTACTS = [
    {
        label: "Телефон",
        href: "tel:+79610599262",
        value: "+7 961 059-92-62",
        icon: Phone,
    }
] as const;

export function Footer() {
    return (
        <footer className="mb-30">
            <Container>
                <div className="rounded-[50px] bg-accent px-3 py-10 text-white sm:px-10 md:px-15 md:py-20">
                    {/* Верхняя секция */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_auto] lg:gap-10">
                        {/* Бренд */}
                        <div>
                            <div className="font-title text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                                Арман Бабаян
                            </div>
                            <p className="mt-3 max-w-90 text-pretty text-sm text-white/80! md:text-base">
                                Next.js-разработчик. Собираю быстрые, удобные и красивые
                                сайты — от идеи до деплоя.
                            </p>
                            <div className="mt-7 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-muted/20 px-4 py-2 text-sm font-medium">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-60" />
                                    <span className="relative inline-flex size-2 rounded-full bg-white" />
                                </span>
                                Открыт к проектам
                            </div>
                        </div>

                        {/* Контакты */}
                        <div>
                            <div className="font-title text-xs uppercase tracking-widest text-white">
                                Контакты
                            </div>
                            <ul className="mt-6 space-y-4">
                                {CONTACTS.map((contact) => (
                                    <li key={contact.label}>
                                        <a
                                            href={contact.href}
                                            className="group flex items-center gap-3 text-sm text-white/80 transition-colors duration-200 hover:text-white active:text-white md:text-base"
                                        >
                                            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-white/90 transition-colors duration-200 group-hover:bg-white group-hover:text-accent group-active:bg-white group-active:text-accent border border-muted/20 group-hover:border-transparent group-active:border-transparent">
                                                <contact.icon size={16} />
                                            </span>
                                            <span>{contact.value}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Соцсети и кнопка «Наверх» */}
                        <div className="flex flex-col justify-between gap-8 md:col-span-2 md:flex-row md:items-center lg:col-span-1 lg:flex-col lg:items-end">
                            <div className="flex flex-wrap gap-3">
                                {ABOUT_SOCIAL.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="group grid size-11 place-items-center rounded-xl bg-white/10 text-white relative transition-colors duration-300 hover:bg-white hover:text-accent active:bg-white active:text-accent border border-muted/20 hover:border-transparent active:border-transparent"
                                    >
                                        <span
                                            className={cn("size-5 bg-current", {
                                                "size-4.5": social.label === "Max",
                                                "size-5.5": social.label === "GitHub",
                                            })}
                                            style={{
                                                maskImage: `url("${social.iconUrl}")`,
                                                WebkitMaskImage: `url("${social.iconUrl}")`,
                                                maskRepeat: "no-repeat",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskPosition: "center",
                                                WebkitMaskPosition: "center",
                                                maskSize: "contain",
                                                WebkitMaskSize: "contain",
                                            }}
                                        />
                                        <span
                                            role="tooltip"
                                            className={cn(
                                                "pointer-events-none absolute left-1/2 bottom-full z-50",
                                                "mb-2 -translate-x-1/2",
                                                "whitespace-nowrap rounded-lg bg-muted px-2 py-1",
                                                "text-xs text-white shadow-md",

                                                // Начальное состояние
                                                "invisible opacity-0",

                                                // Анимация
                                                "duration-200",

                                                // Показ при hover, active (тач) и управлении клавиатурой
                                                "group-hover:visible group-hover:opacity-100",
                                                "group-active:visible group-active:opacity-100",
                                                "group-focus-visible:visible group-focus-visible:translate-y-0",
                                                "group-focus-visible:opacity-100"
                                            )}
                                        >
                                            {social.label}

                                            {/* Маленький треугольник */}
                                            <span
                                                className={cn(
                                                    "absolute left-1/2 top-full -translate-x-1/2",
                                                    "border-x-4 border-t-4",
                                                    "border-x-transparent border-t-muted"
                                                )}
                                            />
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Разделитель */}
                    <div className="my-9 h-px bg-white/15" />

                    {/* Нижняя строка */}
                    <div className="flex flex-col gap-3 text-sm text-white sm:flex-row sm:items-center sm:justify-between">
                        <span>© {new Date().getFullYear()} Арман Бабаян. Все права защищены.</span>
                        <span className="flex items-center gap-1.5">
                            <CurrentTime className="text-white!" />
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
