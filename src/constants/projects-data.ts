export interface Project {
   id: number;
   title: string;
   description: string;
   category: string;
   year: string;
   stack: string[];
   imageUrl: string;
   href: string;
   featured?: boolean;
}

export const PROJECTS: Project[] = [
   {
      id: 1,
      title: "Northstar Studio",
      description:
         "Промо-сайт продуктовой студии. Плавные анимации при скролле, тёмная и светлая темы, форма заявки с валидацией. Скорость загрузки — 98 баллов в Lighthouse.",
      category: "Лендинг",
      year: "2026",
      stack: ["Next.js", "Tailwind", "GSAP", "Zod"],
      imageUrl: "/projects/northstar.jpg",
      href: "https://example.com",
      featured: true,
   },
   {
      id: 2,
      title: "Cerámica",
      description:
         "Каталог керамики ручной работы: фильтры, корзина, оформление заказа.",
      category: "Интернет-магазин",
      year: "2025",
      stack: ["React", "TypeScript", "Zustand"],
      imageUrl: "/projects/ceramica.jpg",
      href: "https://example.com",
   },
   {
      id: 3,
      title: "Finlytics",
      description:
         "Личный кабинет с аналитикой: графики, таблицы с фильтрами, экспорт отчётов.",
      category: "Веб-приложение",
      year: "2025",
      stack: ["Next.js", "shadcn/ui", "Recharts"],
      imageUrl: "/projects/finlytics.jpg",
      href: "https://example.com",
   },
];