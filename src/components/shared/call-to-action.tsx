"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface Props {
   className?: string
}

export function CallToAction({ className }: Props) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="mt-10 flex flex-col items-end justify-between gap-6 rounded-3xl bg-foreground sm:flex-row">
         <div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-muted">
               Не нашли свою задачу?
            </h3>
            <p className="text-sm text-text">
               Напишите — обсудим и придумаем решение.
            </p>
         </div>

         <Button
            onClick={() => setIsOpen(true)}
            className="shrink-0 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white"
         >
            Обсудить проект
         </Button>
      </div>
   );
}