import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "./button";
import { Phone } from "lucide-react";
import { ABOUT_SOCIAL } from "@/constants/about-social-data";

interface Props {
   className?: string
}

export function AboutMe({ className }: Props) {
   return (
      <div className={cn("relative z-50 min-h-screen flex items-center", className)}>
         <Container>
            <div className="grid grid-cols-[1fr_auto] gap-60">
               <div className="">
                  <h1 className="text-5xl font-title tracking-tight mb-2 text-muted"><span className="text-accent">Интерфейсы</span> для людей</h1>
                  <p className="mb-4">Веб-разработчик. Frontend. Адаптивная вёрстка.</p>
                  <p className="mb-4 text-pretty max-w-165">Проектирую и верстаю сайты, которыми приятно пользоваться. Объединяю продуманную структуру, аккуратную верстку и плавные анимации, чтобы ваш проект выглядел максимально стильно и современно.</p>
                  <p className="mb-8">Готов к амбициозным задачам.</p>
                  <div className="flex items-center gap-5 w-fit h-11 font-medium mb-15">
                     <Button className="h-full text-sm p-0">
                        <a href="tel:+79610599262" className="flex items-center justify-center h-full px-10 gap-2">
                           <Phone size={14} />
                           Позвонить
                        </a>
                     </Button>
                     <Button href="https://t.me/armanhik7" className="h-full px-10 text-sm" variant="outline">
                        Телеграм
                     </Button>
                     <Button href="mailto:babayananuta11@gmail.com" className="h-full px-10 text-sm" variant="outline">
                        Почта
                     </Button>
                  </div>
                  <div className="flex gap-5">
                     {
                        ABOUT_SOCIAL.map((icon) => (
                           <a
                              key={icon.id}
                              href={icon.href}
                              className={cn(
                                 "group relative grid p-3 shrink-0 hover:bg-accent hover:text-white duration-400",
                                 "rounded-lg border border-black/10 text-muted"
                              )}
                           >
                              <span
                                 className={cn(
                                    "block size-5 shrink-0 bg-current",
                                 )}
                                 style={{
                                    maskImage: `url("${icon.iconUrl}")`,
                                    WebkitMaskImage: `url("${icon.iconUrl}")`,
                                    maskRepeat: "no-repeat",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskPosition: "center",
                                    WebkitMaskPosition: "center",
                                    maskSize: "contain",
                                    WebkitMaskSize: "contain",
                                 }}
                              />
                              <span
                                 role="tooltip"
                                 className={cn(
                                    "pointer-events-none absolute left-1/2 bottom-full z-50",
                                    "mb-2 -translate-x-1/2",
                                    "whitespace-nowrap rounded-md bg-muted px-2 py-1",
                                    "text-xs font-medium text-white shadow-md",

                                    // Начальное состояние
                                    "invisible opacity-0",

                                    // Анимация
                                    "duration-300",

                                    // Показ при hover и управлении клавиатурой
                                    "group-hover:visible group-hover:opacity-100",
                                    "group-focus-visible:visible group-focus-visible:translate-y-0",
                                    "group-focus-visible:opacity-100"
                                 )}
                              >
                                 {icon.label}

                                 {/* Маленький треугольник */}
                                 <span
                                    className={cn(
                                       "absolute left-1/2 top-full -translate-x-1/2",
                                       "border-x-4 border-t-4",
                                       "border-x-transparent border-t-muted"
                                    )}
                                 />
                              </span>
                           </a>
                        ))
                     }
                  </div>
               </div>

               {/* Картинка */}
               <div className="w-[370px] max-w-full bg-accent/50">

               </div>
            </div>
         </Container>
      </div>
   );
}