"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "../ui";
import { CurrentTime } from "../shared";
import { Navigation } from "../layout/navigation";

interface Props {
    className?: string
}

gsap.registerPlugin(ScrollTrigger, Flip);

export function Hero({ className }: Props) {
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        let isMounted = true;
        const imageWrapper = imageWrapperRef.current;
        const aboutSlot = document.querySelector<HTMLElement>(".about-image");
        if (!imageWrapper) return;

        // --- Intro ---
        gsap.timeline()
            .to(
                imageWrapper,
                {
                    clipPath: "inset(0% 0% 0% 0% round 24px)",
                    duration: 1,
                    ease: "power3.inOut",
                    delay: 0.2,
                }
            )
            .to(
                [".firstName", ".lastName"],
                { opacity: 1, y: 0, duration: 0.8, ease: "expo.inOut", stagger: 0.1 },
                "-=0.3"
            );

        // Flip/ScrollTrigger-анимация — только на десктопе.
        // На мобилках картинка остаётся на месте в hero без следования за скроллом.
        const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
        if (isMobile || !aboutSlot) return;

        // --- Пересчёт цели на каждом refresh ---
        let fitVars: gsap.TweenVars = {};

        const measure = () => {
            // сбрасываем трансформы, чтобы мерить от исходного состояния
            gsap.set(imageWrapper, { clearProps: "transform,width,height" });
            fitVars =
                Flip.fit(imageWrapper, aboutSlot, {
                    getVars: true,
                    scale: true,
                }) ?? {};
        };

        measure();
        ScrollTrigger.addEventListener("refreshInit", measure);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top bottom",   // как только блок появился снизу
                end: "top top",        // пока не упёрся в верх окна
                scrub: true,           // 1:1 со скроллом, без инерции
                invalidateOnRefresh: true,
            },
        });

        tl.to(imageWrapper, {
            ease: "none",
            // функциональные значения -> пересчитаются на refresh
            x: () => fitVars.x as number,
            y: () => fitVars.y as number,
            scaleX: 1.2,
            scaleY: 1.2,
            rotation: () => (fitVars.rotation as number) ?? 0,
            duration: 1,
        });

        // refresh после реальной загрузки картинок и шрифтов
        Promise.all([
            document.fonts.ready,
            ...Array.from(document.images)
                .filter((img) => !img.complete)
                .map(
                    (img) =>
                        new Promise<void>((resolve) => {
                            img.onload = img.onerror = () => resolve();
                        })
                ),
        ]).then(() => {
            if (isMounted) {
                ScrollTrigger.refresh();
            }
        });

        return () => {
            isMounted = false;
            ScrollTrigger.removeEventListener("refreshInit", measure);
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-60 h-60 bg-ink">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/40 to-background/10 backdrop-blur-lg [mask-image:linear-gradient(to_top,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_35%,transparent_100%)]"
                />
                <Navigation />
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/hexagon-poster.jpg"
                    className="absolute inset-0 size-full scale-105 object-cover"
                >
                    <source src="/welcome.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="absolute inset-0 -z-5 bg-gradient-to-t from-background via-background/90 to-background/50 pointer-events-none" />

            <section className="flex min-h-screen text-center sm:text-left flex-col items-center justify-center gap-10 px-4 py-24 sm:px-8 lg:flex-row lg:gap-16 lg:px-40">
                <div className="grid w-full flex-1 grid-rows-[1fr_auto_1fr] lg:h-[450px]">
                    <p className="self-end pb-3 sm:pb-6">
                        Next.js Разработчик
                        Frontend & Backend
                    </p>

                    <h1 className="font-title opacity-0 translate-y-[10px] text-7xl tracking-tight font-extrabold text-muted firstName sm:text-8xl">
                        АРМАН
                    </h1>

                    <div className="self-start pt-4 sm:pt-8 w-fit mx-auto sm:mx-0">
                        <Button href="tel:+79610599262" className="h-15 font-medium px-15">
                            Позвонить
                        </Button>
                    </div>
                </div>

                <div
                    ref={imageWrapperRef}
                    className="relative h-auto w-full max-w-[400px] shrink-0 overflow-hidden rounded-3xl welcome-img-wrapper aspect-[5/6] lg:aspect-auto lg:h-[480px]"
                    style={{
                        clipPath: "inset(100% 0% 0% 0%)",
                    }}
                >
                    <Image
                        src="/portret.jpeg"
                        alt="Портрет"
                        fill
                        quality={75}
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover welcome-img rounded-3xl relative z-400"
                    />
                </div>

                <div className="grid w-full flex-1 grid-rows-[1fr_auto_1fr] sm:text-right lg:h-[450px]">
                    <p className="self-end pb-3 sm:pb-6">
                        React & TypeScript & Node.js & Prisma
                    </p>

                    <h1 className="font-title opacity-0 translate-y-[10px] tracking-tight text-7xl font-extrabold text-muted lastName sm:text-8xl">
                        БАБАЯН
                    </h1>

                    <div className="self-start pt-4 sm:pt-8">
                        <CurrentTime />
                    </div>
                </div>
            </section>
        </div>
    );
}
