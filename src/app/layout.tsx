import type { Metadata } from "next";
import { Manrope, Wix_Madefor_Display, Geist } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const manropeSans = Manrope({
    variable: "--font-nunito-sans",
    subsets: ["latin", "cyrillic"],
});

const unboundedMono = Wix_Madefor_Display({
    variable: "--font-unbounded-mono",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Арман Бабаян — Next.js Разработчик | Frontend & Backend",
    description:
        "Портфолио веб-разработчика Армана Бабаяна. Next.js, React, TypeScript. Создаю сайты от лендинга до веб-приложений — от идеи до деплоя.",
    openGraph: {
        title: "Арман Бабаян — Next.js Разработчик",
        description:
            "Портфолио веб-разработчика. Next.js, React, TypeScript. Создаю быстрые, удобные и красивые сайты.",
        type: "website",
        locale: "ru_RU",
        siteName: "Арман Бабаян",
    },
    twitter: {
        card: "summary_large_image",
        title: "Арман Бабаян — Next.js Разработчик",
        description:
            "Портфолио веб-разработчика. Создаю быстрые, удобные и красивые сайты.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={cn("h-full", "antialiased", manropeSans.variable, unboundedMono.variable, "font-sans", geist.variable)}
        >
            <body className="min-h-full flex flex-col">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
                <Toaster />
            </body>
        </html>
    );
}
