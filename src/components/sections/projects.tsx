import { cn } from "@/lib/utils"
import { Container } from "../shared";
import { Heading } from "../ui";

interface Props {
   className?: string
}

export function Projects({ className }: Props) {
   return (
      <div className={cn("mb-50", className)}>
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
         </Container>
      </div>
   );
}