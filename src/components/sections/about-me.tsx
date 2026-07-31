import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { ABOUT_SOCIAL } from "@/constants/about-social-data";
import { Container } from "../shared";
import { Button, Heading } from "../ui";

interface Props {
   className?: string
}

export function AboutMe({ className }: Props) {
   return (
      <>
         <div className={cn("min-h-screen flex items-center about-section", className)} id="about">
            <Container>
               <div className="grid grid-cols-[1fr_auto] gap-60 items-center">
                  <div className="">
                     <p className="mb-4 font-title flex items-center gap-2 text-sm text-text">
                        <span className="h-px w-5 bg-text rounded-full" />
                        Обо мне
                     </p>
                     <Heading size="section" accent="Интерфейсы" className="mb-2">
                        для людей
                     </Heading>
                     <p className="mb-4">Веб-разработчик &middot; Frontend &middot; Адаптивная вёрстка</p>
                     <p className="mb-4 text-pretty max-w-165">Проектирую и верстаю сайты, которыми приятно пользоваться. Объединяю продуманную структуру, аккуратную верстку и плавные анимации, чтобы ваш проект выглядел максимально стильно и современно.</p>
                     <p className="mb-8">Готов к амбициозным задачам.</p>
                     <div className="flex items-center gap-5 w-fit h-11 font-medium mb-15">
                        <Button className="h-full text-sm p-0">
                           <a href="tel:+79610599262" className="flex items-center justify-center h-full px-10 gap-2">
                              <Phone size={14} />
                              Позвонить
                           </a>
                        </Button>
                        <Button href="https://t.me/armanhik7" className="pill h-full px-10 text-sm" variant="outline">
                           Телеграм
                        </Button>
                        <Button href="mailto:babayananuta11@gmail.com" className="pill h-full px-10 text-sm" variant="outline">
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
                                    "rounded-xl flex items-center border border-black/10 text-muted"
                                 )}
                              >
                                 <span
                                    className={cn(
                                       " size-5 shrink-0 bg-current",
                                       {
                                          "size-4.5": icon.label === "Max",
                                          "size-5.5": icon.label === "GitHub"
                                       }
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
                                       "whitespace-nowrap rounded-lg bg-muted px-2 py-1",
                                       "text-xs text-white shadow-md",

                                       // Начальное состояние
                                       "invisible opacity-0",

                                       // Анимация
                                       "duration-200",

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
                  <div className="relative h-[450px] w-[370px] shrink-0 overflow-hidden rounded-3xl about-image">

                  </div>
               </div>
            </Container>
         </div>
      </>
   );
}