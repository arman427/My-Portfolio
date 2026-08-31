"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "../ui";
import { Container, CurrentTime } from "../shared";
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
        <div className="relative min-h-screen bg-background">
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-60 h-60 bg-ink">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/40 to-background/10 backdrop-blur-lg [mask-image:linear-gradient(to_top,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_35%,transparent_100%)]"
                />
                <Navigation />
            </div>

            <div className="absolute inset-0 -z-5 bg-gradient-to-t from-background via-background/90 to-background/50 pointer-events-none" />

            <Container>
                {/* Добавили flex-col-reverse для мобилок (чтобы фото было сверху или снизу, как вам больше нравится, тут текст сверху), 
        gap-12 для расстояния между текстом и фото на планшетах/мобилках, 
        и padding-y на случай если экран слишком маленький */}
                <section className="flex min-h-screen flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 py-20 lg:py-0">

                    {/* Контент: имя и тексты слева */}
                    {/* Добавили text-center для мобилок и gap-6 для равномерных отступов */}
                    <div className="flex w-full max-w-[640px] flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8">

                        {/* Надзаголовок */}
                        <p className="text-sm font-semibold tracking-wider text-muted-foreground sm:text-base uppercase">
                            Next.js Разработчик
                            <span className="hidden lg:inline"> <br /> </span>
                            <span className="lg:hidden"> • </span>
                            Frontend & Backend
                        </p>

                        {/* Имя (Заголовки сгруппированы, чтобы не разъезжались) */}
                        <div className="flex flex-col text-muted">
                            <h1 className="font-title opacity-0 translate-y-[10px] font-extrabold leading-[0.9] tracking-tight text-foreground firstName text-[clamp(3.5rem,8vw,6.5625rem)]">
                                АРМАН
                                <span className="block opacity-0 translate-y-[10px] lastName">
                                    БАБАЯН
                                </span>
                            </h1>
                        </div>

                        {/* Стек технологий и время */}
                        <div className="flex flex-col items-center lg:items-start text-sm sm:text-base text-muted-foreground gap-3">
                            <p className="font-medium">
                                React • TypeScript • Node.js • Prisma
                            </p>
                            <div className="flex items-center gap-3">
                                {/* Сделали точку более заметной и добавили пульсацию для живости (по желанию) */}
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse" />
                                <CurrentTime />
                            </div>
                        </div>

                        {/* Кнопка (убрали mt-1, так как теперь всем управляет gap у родителя) */}
                        <div className="pt-2">
                            <Button href="tel:+79610599262" className="h-14 px-10 text-base rounded-full">
                                Позвонить
                            </Button>
                        </div>
                    </div>

                    {/* Портрет справа */}
                    <div
                        ref={imageWrapperRef}
                        // Сделали адаптивную ширину для мобилок, чтобы картинка не была слишком огромной
                        className="relative w-full max-w-[320px] sm:max-w-[400px] shrink-0 overflow-hidden rounded-3xl welcome-img-wrapper aspect-[4/5] lg:aspect-auto lg:h-[550px]"
                        style={{
                            clipPath: "inset(100% 0% 0% 0%)",
                        }}
                    >
                        <Image
                            src="/portret.jpeg"
                            alt="Портрет Армана Бабаяна"
                            fill
                            quality={85} // Чуть повысили качество 
                            priority // Важно добавить priority для главной картинки (LCP)
                            sizes="(max-width: 1024px) 100vw, 400px"
                            className="object-cover welcome-img relative z-10"
                        />
                    </div>
                </section>
            </Container>
        </div>
    );
}
