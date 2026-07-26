import { cn } from "@/lib/utils";
import { Container } from "../shared";
import { Heading } from "../ui";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials-data";

interface Props {
   className?: string;
}

export function Testimonials({ className }: Props) {
   return (
      <section
         id="reviews"
         className={cn("mb-50", className)}
      >
         <Container>
            {/* Заголовок секции */}
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
               <div>
                  <p className="mb-4 flex items-center gap-2 font-title text-sm text-text">
                     <span className="h-px w-5 rounded-full bg-text" />
                     Отзывы
                  </p>

                  <Heading accent="клиенты." second>
                     Говорят
                  </Heading>
               </div>

               <p className="max-w-sm text-balance text-sm leading-relaxed text-text">
                  Работаю прозрачно, остаюсь на связи и довожу проект до
                  результата, которым хочется делиться.
               </p>
            </div>

            {/* Карточки */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
               {TESTIMONIALS.map((testimonial) => (
                  <article
                     key={testimonial.id}
                     className={cn(
                        "group flex h-[270px] flex-col justify-between",
                        "rounded-4xl border border-black/5 bg-white p-7",
                        "transition-all duration-300",
                        "hover:-translate-y-1",
                        "hover:shadow-[0_0_50px_-20px_rgba(0,0,0,0.1)]",
                        "md:p-8"
                     )}
                  >
                     <div>
                        {/* Тип работы и дата */}


                        {/* Рейтинг */}
                        <div
                           className="mb-5 flex items-center gap-1"
                           aria-label={`Оценка ${testimonial.rating} из 5`}
                        >
                           {Array.from({ length: 5 }).map((_, index) => {
                              const isActive = index < testimonial.rating;

                              return (
                                 <Star
                                    key={index}
                                    className={cn(
                                       "size-4",
                                       isActive
                                          ? "fill-accent text-accent"
                                          : "fill-black/5 text-black/10"
                                    )}
                                    strokeWidth={1.5}
                                 />
                              );
                           })}
                        </div>

                        {/* Отзыв */}
                        <blockquote className="text-[15px] leading-relaxed text-muted mb-3">
                           «{testimonial.text}»
                        </blockquote>
                     </div>

                     {/* Автор */}
                     <div className="border-t border-black/5 pt-3">
                        <div>
                           <p className="text-sm font-bold text-black/80!">
                              {testimonial.author} <span className="text-text">- Клиент</span>
                           </p>
                        </div>
                        <div className="flex flex-col text-xs mt-1.5 gap-0.5">
                           <p>{testimonial.service}</p>
                           <p>{testimonial.date}</p>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </Container>
      </section>
   );
}