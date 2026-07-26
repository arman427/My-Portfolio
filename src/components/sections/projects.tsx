import { cn } from "@/lib/utils"
import { Container } from "../shared";
import { Heading } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/portfolio-data";
import { SquareArrowOutUpRight } from "lucide-react";

interface Props {
   className?: string
}

export function Projects({ className }: Props) {
   return (
      <div className={cn("mb-50", className)} id="portfolio">
         <Container>
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
               <div>
                  <p className="mb-4 font-title flex items-center gap-2 text-sm text-text">
                     <span className="h-px w-5 bg-text rounded-full" />
                     Портфолио
                  </p>
                  <Heading accent="Последние">
                     проекты.
                  </Heading>
               </div>

               <p className="max-w-xs text-sm leading-relaxed text-text">
                  От простого лендинга до личного кабинета. Беру проект
                  целиком — от вёрстки до деплоя.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {
                  PROJECTS.map((item) => (
                     <a target="_blank" href={item.href} key={item.id} className="group aspect-video w-full bg-white p-6 md:p-[40px] rounded-3xl shadow-[0_0px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 relative">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl">
                           <Image
                              src={item.imageUrl}
                              alt="Второй проект"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                           />
                        </div>
                        <div className="bg-black/40 flex gap-3 items-center justify-center text-white duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-md rounded-3xl w-full h-full absolute inset-0 text-2xl">
                           <h4>Перейти</h4>
                           <SquareArrowOutUpRight />
                        </div>
                     </a>
                  ))
               }


            </div>
         </Container>
      </div>
   );
}