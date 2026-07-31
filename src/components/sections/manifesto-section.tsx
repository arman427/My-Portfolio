"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../shared";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
   className?: string;
}

const text =
   "Я превращаю идеи в понятные решения, которые работают в реальном мире. Без лишнего шума, бесконечных обсуждений и дизайна ради дизайна. Только ясная цель, точные действия и результат, который можно увидеть и измерить.";

const words = text.split(" ");

export function ManifestoSection({ className }: Props) {
   const sectionRef = useRef<HTMLElement>(null);
   const textRef = useRef<HTMLParagraphElement>(null);

   useGSAP(
      () => {
         const chars = gsap.utils.toArray<HTMLElement>(".manifesto-char");

         gsap.to(
            chars,
            {
               color: "black",
               stagger: 0.01,
               ease: "none",
               scrollTrigger: {
                  trigger: textRef.current,
                  start: "top 75%",
                  end: "bottom 40%",
                  scrub: true,
               },
            }
         );
      },
      {
         scope: sectionRef,
      }
   );

   return (
      <section
         ref={sectionRef}
         className={cn(
            "flex min-h-screen items-center justify-center sectionRef",
            className
         )}
      >
         <Container>
            <p
               ref={textRef}
               className="text-pretty text-[50px] font-medium leading-normal"
            >
               {words.map((word, wordIndex) => (
                  <span key={wordIndex}>
                     <span className="inline-block">
                        {Array.from(word).map((char, charIndex) => (
                           <span
                              key={`${wordIndex}-${charIndex}`}
                              className="manifesto-char text-black/5"
                           >
                              {char}
                           </span>
                        ))}
                     </span>
                     {wordIndex < words.length - 1 && " "}
                  </span>
               ))}
            </p>
         </Container>
      </section>
   );
}