import { NAV_LINKS } from "@/constants/nav-links";

interface Props {
   className?: string
}

export function Navigation({ className }: Props) {
   return (
      <nav className="pointer-events-auto absolute inset-x-0 z-500 bottom-8 flex justify-center h-14">
         <ul className="text-white flex items-center gap-3 bg-muted border border-white/20 rounded-full pl-6 py-1 pr-1">
            {NAV_LINKS.map((link) =>
               link.isButton ? (
                  <li
                     key={link.label}
                     className="flex self-stretch text-[17px] font-medium items-center rounded-full bg-accent text-ink cursor-pointer hover:bg-background duration-100 ease group "
                  >
                     <a
                        href={link.href}
                        className="relative flex h-full min-w-[110px] items-center justify-center overflow-hidden px-8"
                     >
                        <span className="transition-all duration-100 ease-out group-hover:translate-y-full group-hover:opacity-0 text-white">
                           {link.label}
                        </span>
                        <span className="absolute text-muted -translate-y-3 opacity-0 duration-200 ease-initial group-hover:translate-y-0 group-hover:opacity-100">
                           {link.hoverLabel}
                        </span>
                     </a>
                  </li>
               ) : (
                  <li
                     key={link.label}
                     className="hover:-translate-y-0.5 hover:text-accent font-medium transition-all"
                  >
                     <a href={link.href} className="p-2">{link.label}</a>
                  </li>
               )
            )}
         </ul>
      </nav>
   );
}