import { cn } from "@/lib/utils";

interface BaseProps {
    className?: string;
    variant?: "default" | "outline";
    type?: "submit" | "button";
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
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
            "text-muted hover:text-white bg-transparent": variant === "outline",
        }
    );

const getInnerSpan = (variant: "default" | "outline" = "default") => (
    <span
        aria-hidden="true"
        className={cn(
            "pointer-events-none absolute -inset-px z-0 bg-muted duration-300",
            variant === "default" && "[clip-path:circle(0%_at_0%_0%)] group-hover:[clip-path:circle(145%_at_0%_0%)] group-active:[clip-path:circle(145%_at_0%_0%)]",
            variant === "outline" && "[clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(140%_at_100%_100%)] group-active:[clip-path:circle(140%_at_100%_100%)]"
        )}
    />
);

export function Button({ className, onClick, children, variant = "default", href, type = "button", disabled }: Props) {
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
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(getClassName(variant, className), {
                "pointer-events-none cursor-none": disabled
            })}
        >
            <span className="relative z-10 transition-colors duration-300">{children}</span>
            {getInnerSpan(variant)}
        </button>
    );
}
