"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navigation } from "../layout/navigation";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "../ui";
import { CurrentTime } from "../shared";

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
      if (!imageWrapper || !aboutSlot) {
         console.warn("Не найдена картинка или слот .about-image");
         return;
      }

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

         <section className="px-40 flex min-h-screen items-center justify-center gap-16">
            <div className="grid h-[450px] flex-1 grid-rows-[1fr_auto_1fr]">
               <p className="self-end pb-6">
                  Next.js Разработчик
                  Frontend & Backend
               </p>

               <h1 className="font-title opacity-0 translate-y-[10px] text-8xl tracking-tight font-extrabold text-muted firstName">
                  АРМАН
               </h1>

               <div className="self-start pt-8 w-fit">
                  <Button href="tel:+79610599262" className="h-15 font-medium px-15">
                     Позвонить
                  </Button>
               </div>
            </div>

            <div
               ref={imageWrapperRef}
               className="relative h-[480px] w-[400px] shrink-0 overflow-hidden rounded-3xl welcome-img-wrapper"
               style={{
                  clipPath: "inset(100% 0% 0% 0%)",
               }}
            >
               <Image
                  src="/portret.jpeg"
                  alt="Портрет"
                  fill
                  quality={100}
                  className="object-cover welcome-img rounded-3xl relative z-400"
               />
            </div>

            <div className="grid h-[450px] flex-1 grid-rows-[1fr_auto_1fr] text-right">
               <p className="self-end pb-6">
                  React & TypeScript & Node.js & Prisma
               </p>

               <h1 className="font-title opacity-0 translate-y-[10px] tracking-tight text-8xl font-extrabold text-muted lastName">
                  БАБАЯН
               </h1>

               <div className="self-start pt-8">
                  <CurrentTime />
               </div>
            </div>
         </section>
      </div>
   );
}