import { NAV_LINKS } from "@/constants/nav-links";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { cn } from "@/lib/utils";

interface Props {
    className?: string
}

export function Navigation({ className }: Props) {
    const { isPassed } = useScrollThreshold(500);

    return (
        <nav className={cn("pointer-events-auto hidden sm:flex opacity-0 translate-y-6 absolute inset-x-0 z-500 bottom-8 justify-center h-14 duration-300", {
            "opacity-100 translate-y-0": isPassed
        })}>
            <ul className="text-white flex items-center gap-3 bg-muted rounded-full pl-6 py-1 pr-1">
                {NAV_LINKS.map((link) =>
                    link.isButton ? (
                        <li
                            key={link.label}
                            className="flex self-stretch font-medium items-center rounded-full bg-accent text-ink cursor-pointer hover:bg-background active:bg-background duration-75 ease group"
                        >
                            <a
                                href={link.href}
                                className="relative flex h-full min-w-[110px] items-center justify-center overflow-hidden px-8"
                            >
                                <span className="transition-all duration-200 ease-out group-hover:translate-y-3 group-hover:opacity-0 group-active:translate-y-3 group-active:opacity-0 text-white">
                                    {link.label}
                                </span>
                                <span className="absolute text-muted -translate-y-2 opacity-0 duration-200 ease-initial group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
                                    {link.hoverLabel}
                                </span>
                            </a>
                        </li>
                    ) : (
                        <li
                            key={link.label}
                            className="hover:-translate-y-0.5 hover:text-accent active:-translate-y-0.5 active:text-accent font-medium duration-200 ease"
                        >
                            <a href={link.href} className="p-2">{link.label}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
