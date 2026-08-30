interface Testimonial {
    id: number;
    text: string;
    rating: number;
    date: string;
    service: "Сайт" | "Доработка сайта" | "SEO";
    author: string;
}

export const TESTIMONIALS: Testimonial[] = [

];