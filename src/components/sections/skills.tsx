"use client";

import { SKILLS } from "@/constants/skills-data";
import Image from "next/image";

interface Props {
   className?: string
}

import "swiper/css";
import "swiper/css/free-mode";
import { Container } from "../shared/container";
import { Heading } from "../ui";

export function Skills({ className }: Props) {
   return (
      <section className="mb-50">
         <Container>
            <div className="marquee relative overflow-hidden">
               {/* <Heading accent="Технологии" size="card" className="text-center">
                  , которыми я пользуюсь.
               </Heading> */}
               <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-50 bg-linear-to-r from-background via-background/70 to-transparent" />
               <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-50 bg-linear-to-l from-background via-background/70 to-transparent" />
               <div className="marquee__track flex w-max gap-12 py-10">
                  {[...SKILLS, ...SKILLS].map((skill, i) => (
                     <Image
                        key={`${skill.id}-${i}`}
                        src={skill.iconUrl}
                        alt=""
                        width={64}
                        height={64}
                        draggable={false}
                        className="h-16 w-16 shrink-0 object-contain"
                     />
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
}