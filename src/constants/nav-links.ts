interface NavLink {
   label: string;
   href: string;
   hoverLabel?: string;
   isButton?: boolean;
}


export const NAV_LINKS: NavLink[] = [
   { label: "Обо мне", href: "#about" },
   { label: "Услуги", href: "#services" },
   { label: "Портфолио", href: "#portfolio" },
   { label: "Отзывы", href: "#reviews" },
   {
      label: "Контакты",
      hoverLabel: "Скролл",
      href: "#contacts",
      isButton: true,
   },
] as const;