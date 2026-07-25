import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants/services-data";
import { Heading } from "../ui/heading";
import { CallToAction, Container } from "../shared";

interface Props {
   className?: string
}

export function Services({ className }: Props) {
   return (
      <div className={cn("mb-50", className)}>
         <Container>
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
               <div>
                  <p className="mb-4 font-title flex items-center gap-2 text-sm text-text">
                     <span className="h-px w-5 bg-text rounded-full" />
                     Услуги
                  </p>
                  <Heading accent="Решаю">
                     задачи<br />
                     вашего бизнеса.
                  </Heading>
               </div>

               <p className="max-w-xs text-sm leading-relaxed text-text">
                  От простого лендинга до личного кабинета. Беру проект
                  целиком — от вёрстки до деплоя.
               </p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
               {SERVICES.map((service, index) => {
                  const Icon = service.icon;

                  return (
                     <article
                        key={service.id}
                        className={cn(
                           "group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0px_50px_-20px_rgba(0,0,0,0.1)] md:p-10",
                        )}
                     >
                        <div className="mb-8 flex items-start justify-between">
                           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                              <Icon />
                           </div>

                           <span className="text-sm tabular-nums text-muted">
                              {String(index + 1).padStart(2, "0")}
                           </span>
                        </div>

                        {/* Текст */}
                        <div>
                           <h3
                              className={cn(
                                 "mb-3 text-2xl text-muted font-bold tracking-tight"
                              )}
                           >
                              {service.title}
                           </h3>

                           <p className="mb-6 text-sm leading-relaxed text-text">
                              {service.description}
                           </p>
                        </div>

                        {/* Инструменты */}
                        <div className="mb-6 flex flex-wrap gap-2">
                           {service.stack.map((tech) => (
                              <span
                                 key={tech}
                                 className="rounded-full border border-muted/10 px-3 py-1 text-xs text-black"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-black/5 pt-6">
                           <span className="text-sm text-muted">
                              {service.timeline}
                           </span>

                           <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 transition-all duration-300 group-hover:bg-accent">
                              <ArrowUpRight
                                 className="h-4 w-4 transition-all duration-300 group-hover:text-white"
                                 strokeWidth={2}
                              />
                           </div>
                        </div>
                     </article>
                  );
               })}
            </div>

            <CallToAction />
         </Container >
      </div >
   );
}