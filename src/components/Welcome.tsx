"use client";

import Image from "next/image";
import { Container } from "./container";
import { CurrentTime } from "./currentTime";
import { Button } from "./button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navigation } from "./Navigation";

interface Props {
   className?: string
}

export function Welcome({ className }: Props) {
   useGSAP(() => {
      gsap.from(".firstName", {
         opacity: 0,
         translateY: 10,
         duration: 0.8,
         delay: 1,
         ease: "expo.inOut",
      });
      gsap.from(".lastName", {
         opacity: 0,
         translateY: 10,
         duration: 0.8,
         delay: 1,
         ease: "expo.inOut",
      });
      gsap.fromTo(
         ".welcome-img",
         { clipPath: "inset(100% 0% 0% 0% round 24px)" },
         {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1,
            ease: "power3.inOut",
            delay: 0.4,
         }
      );
   });

   return (
      <div className="relative min-h-screen overflow-hidden">
         <div className="pointer-events-none fixed inset-x-0 bottom-0 z-60 h-60 bg-ink">
            <div
               className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/40 to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_top,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_35%,transparent_100%)]"
            />

            <Navigation />
         </div>

         <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hexagon-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover -z-10 scale-115"
         >
            <source src="/welcome.mp4" type="video/mp4" />
         </video>

         <div className="absolute inset-0 -z-5 bg-gradient-to-t from-background via-background/90 to-background/50 pointer-events-none" />

         <section className="px-40 flex min-h-screen items-center justify-center gap-16">
            <div className="grid h-[450px] flex-1 grid-rows-[1fr_auto_1fr]">
               <p className="self-end pb-10">
                  Next.js Разработчик
                  Frontend & Backend
               </p>

               <h1 className="font-title text-8xl font-bold text-muted firstName">
                  АРМАН
               </h1>

               <div className="self-start pt-8 w-fit">
                  <Button href="tel:+79610599262" className="h-15 font-medium px-15">
                     Позвонить
                  </Button>
               </div>
            </div>

            <div className="relative h-[450px] w-[370px] shrink-0 overflow-hidden rounded-3xl welcome-img">
               <Image
                  src="/portret.jpeg"
                  alt="Портрет"
                  fill
                  className="object-cover"
               />
            </div>

            <div className="grid h-[450px] flex-1 grid-rows-[1fr_auto_1fr] text-right">
               <p className="self-end pb-10">
                  React & TypeScript & Node.js & Prisma
               </p>

               <h1 className="font-title text-8xl font-bold text-muted lastName">
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