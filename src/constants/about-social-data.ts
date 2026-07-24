interface Data {
   id: number;
   label: string;
   href: string;
   iconUrl: string;
}

export const ABOUT_SOCIAL: Data[] = [
   {
      id: 1,
      label: "GitHub",
      href: "https://github.com/arman427",
      iconUrl: "/GitHub.svg"
   },
   {
      id: 2,
      label: "Max",
      href: "https://max.ru/u/f9LHodD0cOIrsrlyJ0221nkw01P_pqZ6JdTBegLt8vR7lCl-n6-E4pd7038",
      iconUrl: "/Max.svg"
   },
   {
      id: 3,
      label: "WhatsApp",
      href: "https://wa.me/79610599262",
      iconUrl: "/WhatsApp.svg"
   },
   {
      id: 4,
      label: "E-Mail",
      href: "mailto:babayananuta11@gmail.com",
      iconUrl: "/E-Mail.svg"
   },
   {
      id: 5,
      label: "Telegram",
      href: "https://t.me/armanhik7",
      iconUrl: "/Telegram.svg"
   }
] as const;