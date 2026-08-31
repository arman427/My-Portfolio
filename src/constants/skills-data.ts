interface Skills {
   id: number;
   name: string;
   iconUrl: string;
}

export const SKILLS: Skills[] = [
   {
      id: 1,
      name: "HTML5",
      iconUrl: "/html5.svg"
   },
   {
      id: 2,
      name: "CSS",
      iconUrl: "/css.svg"
   },
   {
      id: 3,
      name: "JavaScript",
      iconUrl: "/javascript.svg"
   },
   {
      id: 4,
      name: "TypeScript",
      iconUrl: "/typescript.svg"
   },
   {
      id: 5,
      name: "React",
      iconUrl: "/react.svg"
   },
   {
      id: 6,
      name: "Next.js",
      iconUrl: "/nextjs.svg"
   },
   {
      id: 7,
      name: "Tailwind CSS",
      iconUrl: "/tailwindcss.svg"
   },
   {
      id: 8,
      name: "shadcn/ui",
      iconUrl: "/shadcnui.svg"
   },
   {
      id: 9,
      name: "GSAP",
      iconUrl: "/gsap.svg"
   },
   {
      id: 10,
      name: "Zustand",
      iconUrl: "/zustand.svg"
   },
   {
      id: 11,
      name: "React Hook Form",
      iconUrl: "/reacthookform.svg"
   },
   {
      id: 12,
      name: "Zod",
      iconUrl: "/zod.svg"
   },
   {
      id: 13,
      name: "Git",
      iconUrl: "/git.svg"
   }
] as const;