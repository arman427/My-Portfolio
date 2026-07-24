import { cn } from "@/lib/utils";

interface BaseProps {
   className?: string;
   variant?: "default" | "outline";
   children: React.ReactNode;
}

interface ButtonProps extends BaseProps {
   href?: never;
}

interface LinkProps extends BaseProps {
   href: string;
}

type Props = ButtonProps | LinkProps;

const getClassName = (variant: "default" | "outline" = "default", className?: string) =>
   cn(
      "group relative isolate overflow-hidden rounded-full bg-accent tracking-wider text-white cursor-pointer duration-300 ease hover:shadow-lg",
      className,
      {
         "text-muted hover:text-white bg-transparent border border-muted": variant === "outline",
      }
   );

const getInnerSpan = (variant: "default" | "outline" = "default") => (
   <span
      aria-hidden="true"
      className={cn(
         "pointer-events-none absolute -inset-px z-0 bg-muted duration-300",
         variant === "default" && "[clip-path:polygon(0_0,0_0,-50%_100%,0_100%)] group-hover:[clip-path:polygon(0_0,150%_0,100%_100%,0_100%)]",
         variant === "outline" && "[clip-path:polygon(100%_100%,100%_100%,150%_0,100%_0)] group-hover:[clip-path:polygon(100%_100%,-50%_100%,0_0,100%_0)]"
      )}
   />
);

export function Button({ className, children, variant = "default", href }: Props) {
   if (href) {
      return (
         <a href={href} className={cn("flex items-center", getClassName(variant, className))}>
            <span className="relative z-10 transition-colors duration-300">{children}</span>
            {getInnerSpan(variant)}
         </a>
      );
   }

   return (
      <button
         type="button"
         className={getClassName(variant, className)}
      >
         <span className="relative z-10 transition-colors duration-300">{children}</span>
         {getInnerSpan(variant)}
      </button>
   );
}