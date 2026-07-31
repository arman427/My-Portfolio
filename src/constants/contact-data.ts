import z from "zod";

export const PROJECT_TYPES = [
   { value: "landing", label: "Лендинг" },
   { value: "corporate", label: "Корпоративный сайт" },
   { value: "shop", label: "Интернет-магазин" },
   { value: "webapp", label: "Веб-приложение" },
   { value: "dorabotka", label: "Доработка существующего сайта" },
   { value: "other", label: "Другое" },
] as const;

export const BUDGETS = [
   { value: "under-50k", label: "До 50 000 ₽" },
   { value: "50-150k", label: "50 000 – 150 000 ₽" },
   { value: "150-300k", label: "150 000 – 300 000 ₽" },
   { value: "over-300k", label: "От 300 000 ₽" },
] as const;

export const TIMELINES = [
   { value: "not-defined", label: "Не определены" },
   { value: "urgent", label: "Срочно (до 2 недель)" },
   { value: "1-month", label: "~1 месяц" },
   { value: "2-3-months", label: "2–3 месяца" },
   { value: "no-rush", label: "Без спешки" },
] as const;

export const contactSchema = z.object({
   name: z
      .string()
      .min(1, "Укажите, как к вам обращаться")
      .min(2, "Слишком короткое имя"),
   email: z
      .email("Введите корректный email"),
   message: z
      .string()
      .min(1, "Расскажите о задаче")
      .min(10, "Опишите задачу чуть подробнее"),
   materialsLink: z
      .string()
      .optional()
      .refine(
         (value) => !value || /^https?:\/\/.+/i.test(value),
         "Ссылка должна начинаться с http:// или https://"
      ),
});

export type ContactFormValues = z.infer<typeof contactSchema>;