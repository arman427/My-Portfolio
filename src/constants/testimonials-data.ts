interface Testimonial {
   id: number;
   text: string;
   rating: number;
   date: string;
   service: "Сайт" | "Доработка сайта" | "SEO";
   author: string;
}

export const TESTIMONIALS: Testimonial[] = [
   {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "18 июля 2026",
      service: "Сайт",
      author: "Алексей Кравцов",
   },
   {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "2 июля 2026",
      service: "Доработка сайта",
      author: "Мария Соколова",
   },
   {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "21 июня 2026",
      service: "SEO",
      author: "Денис Волков",
   },
   {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "9 июня 2026",
      service: "Сайт",
      author: "Елена Громова",
   },
   {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "28 мая 2026",
      service: "Доработка сайта",
      author: "Илья Морозов",
   },
   {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 4,
      date: "14 мая 2026",
      service: "SEO",
      author: "Анна Лебедева",
   },
   {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "30 апреля 2026",
      service: "Сайт",
      author: "Никита Орлов",
   },
   {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "17 апреля 2026",
      service: "Доработка сайта",
      author: "Ольга Федорова",
   },
   {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est consequatur esse dolorum perspiciatis tenetur, nam tempora quos. Veniam totam eaque sint nihil ullam.",
      rating: 5,
      date: "5 апреля 2026",
      service: "SEO",
      author: "Максим Романов",
   }
];