import { Rocket, Layers, PenTool, Wrench, LayoutDashboard, Sparkles } from "lucide-react";


export const SERVICES = [
   {
      id: 1,
      title: "Лендинг под ключ",
      subtitle: "Одностраничный сайт, который продаёт",
      description:
         "Соберу лендинг от макета до деплоя: адаптив под все экраны, анимации при скролле, работающая форма заявки. Подключу аналитику и настрою метатеги.",
      icon: Rocket,
      stack: ["Next.js", "Tailwind", "GSAP", "React Hook Form"],
      timeline: "от 5 дней"
   },
   {
      id: 2,
      title: "Многостраничный сайт",
      subtitle: "Корпоративный сайт или сайт услуг",
      description:
         "Каталог, блог, страницы услуг, формы обратной связи. Общие компоненты и единая дизайн-система для быстрого масштабирования.",
      icon: Layers,
      stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
      timeline: "от 2 недель"
   },
   {
      id: 3,
      title: "Вёрстка по макету",
      subtitle: "Figma → пиксель в пиксель",
      description:
         "Переведу дизайн в чистый адаптивный код. Семантическая разметка, все состояния элементов, кроссбраузерная проверка.",
      icon: PenTool,
      stack: ["HTML", "CSS", "Tailwind", "React"],
      timeline: "от 2 дней"
   },
   {
      id: 4,
      title: "Интерфейс веб-приложения",
      subtitle: "Личные кабинеты, дашборды, админки",
      description:
         "Фронтенд поверх вашего API: авторизация, таблицы с фильтрами, формы с валидацией, графики. Продуманные состояния загрузки и ошибок.",
      icon: LayoutDashboard,
      stack: ["React", "TypeScript", "Zustand", "Zod"],
      timeline: "от 3 недель"
   },
   {
      id: 5,
      title: "Анимации и интерактив",
      subtitle: "Оживить существующий сайт",
      description:
         "Появление блоков при скролле, параллакс, плавные переходы, микровзаимодействия. С оглядкой на производительность и доступность.",
      icon: Sparkles,
      stack: ["GSAP", "CSS", "Framer Motion"],
      timeline: "от 3 дней"
   },
   {
      id: 6,
      title: "Доработка и поддержка",
      subtitle: "Есть сайт — нужно починить или расширить",
      description:
         "Подключусь к существующему проекту: новая функциональность, исправление адаптива, ускорение загрузки, рефакторинг.",
      icon: Wrench,
      stack: ["React", "Next.js", "TypeScript", "Git"],
      timeline: "почасово"
   }
] as const;

export type Services = typeof SERVICES[number];