import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode, ElementType } from "react";

const headingVariants = cva("tracking-tight text-muted font-title font-bold", {
   variants: {
      size: {
         hero: "text-4xl leading-[1.15] md:text-6xl md:leading-[1.05] md:tracking-[-0.02em]",
         section: "text-4xl leading-[1.15] md:text-5xl md:leading-[1.05] md:tracking-[-0.02em]",
         card: "text-2xl leading-[1.25] md:text-3xl",
         sub: "text-xl leading-[1.35]"
      },
      align: {
         left: "text-left",
         center: "text-center mx-auto"
      },
      balance: {
         true: "text-balance",
         false: ""
      }
   },
   defaultVariants: {
      size: "section",
      align: "left",
      balance: true
   }
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
   children: ReactNode;
   second?: boolean;
   /** Слово или фраза, которую нужно подсветить акцентным цветом */
   accent?: string;
   as?: ElementType;
   className?: string;
}

export function Heading({
   children,
   accent,
   as,
   size,
   align,
   balance,
   second,
   className
}: HeadingProps) {
   const Tag = as ?? (size === "hero" ? "h1" : size === "card" ? "h3" : "h2");

   return (
      <Tag
         className={cn(
            headingVariants({ size, align, balance }),
            className
         )}
      >
         {second ? (
            <>
               {children}
               {accent && (
                  <span className="text-accent"> {accent}</span>
               )}
            </>
         ) : (
            <>
               {accent && (
                  <span className="text-accent">{accent} </span>
               )}
               {children}
            </>
         )}
      </Tag>
   );
}