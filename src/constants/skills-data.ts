interface Skills {
   id: number;
   iconUrl: string;
}

export const SKILLS: Skills[] = [
   {
      id: 1,
      iconUrl: "/html5.svg"
   },
   {
      id: 2,
      iconUrl: "/css.svg"
   },
   {
      id: 3,
      iconUrl: "/javascript.svg"
   },
   {
      id: 4,
      iconUrl: "/typescript.svg"
   },
   {
      id: 5,
      iconUrl: "/react.svg"
   },
   {
      id: 6,
      iconUrl: "/nextjs.svg"
   },
   {
      id: 7,
      iconUrl: "/tailwindcss.svg"
   },
   {
      id: 8,
      iconUrl: "/shadcnui.svg"
   },
   {
      id: 9,
      iconUrl: "/gsap.svg"
   },
   {
      id: 10,
      iconUrl: "/zustand.svg"
   },
   {
      id: 11,
      iconUrl: "/reacthookform.svg"
   },
   {
      id: 12,
      iconUrl: "/zod.svg"
   },
   {
      id: 13,
      iconUrl: "/git.svg"
   }
] as const;