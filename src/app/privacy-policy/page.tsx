import Link from "next/link";
import { Container } from "@/components/shared";
import { Heading } from "@/components/ui";
import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Политика конфиденциальности — Арман Бабаян",
    description: "Политика обработки персональных данных",
};

const SECTIONS = [
    {
        title: "1. Общие положения",
        content: `Настоящая политика конфиденциальности регулирует порядок обработки персональных данных пользователей, передаваемых через контактную форму на данном сайте.

Оператором персональных данных является: Бабаян Арман (далее — Оператор).

Используя контактную форму сайта, вы соглашаетесь с условиями настоящей политики.`,
    },
    {
        title: "2. Какие данные собираются",
        content: `При заполнении контактной формы Оператор получает следующие данные:

— Имя (как к вам обращаться)
— Адрес электронной почты (email)
— Текст обращения (описание задачи)
— Ссылка на материалы (необязательно)

Иные персональные данные Оператор не собирает.`,
    },
    {
        title: "3. Цели обработки данных",
        content: `Персональные данные используются исключительно для:

— Ответа на ваше обращение
— Обсуждения условий сотрудничества
— Связи с вами по вопросам, указанным в форме

Данные не передаются третьим лицам, не используются в рекламных целях и не продаются.`,
    },
    {
        title: "4. Правовое основание",
        content: `Обработка персональных данных осуществляется на основании:

— Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»
— Вашего добровольного согласия, выраженного при отправке контактной формы`,
    },
    {
        title: "5. Сроки хранения данных",
        content: `Персональные данные хранятся в течение периода, необходимого для достижения целей обработки, но не более 3 (трёх) лет с момента получения обращения, если иное не предусмотрено законодательством.

По истечении указанного срока данные уничтожаются.`,
    },
    {
        title: "6. Ваши права",
        content: `В соответствии с 152-ФЗ вы вправе:

— Получить информацию об обработке ваших персональных данных
— Потребовать уточнения, блокирования или уничтожения данных
— Отозвать согласие на обработку данных в любой момент

Для реализации своих прав направьте запрос по контактам, указанным ниже.`,
    },
    {
        title: "7. Контакты",
        content: `По вопросам, связанным с обработкой персональных данных, вы можете обратиться:

Email: arman@example.com
Телефон: +7 961 059-92-62`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen py-20 flex">
            <Container>
                {/* Кнопка назад */}
                <div className="mb-12">
                    <Button
                        href="/"
                        variant="outline"
                        className="flex items-center justify-center gap-2 w-40 h-11 pill text-sm"
                    >
                        <span className="flex items-center gap-2">
                            <ArrowLeft size={16} />
                            <span>На главную</span>
                        </span>
                    </Button>
                </div>

                <div className="w-full">
                    {/* Заголовок */}
                    <div className="mb-12">
                        <p className="mb-4 font-title flex items-center gap-2 text-sm text-text">
                            <span className="h-px w-5 bg-text rounded-full" />
                            Юридическая информация
                        </p>
                        <Heading size="card" accent="Политика">
                            конфиденциальности
                        </Heading>
                        <p className="mt-6 text-text">
                            Последнее обновление:{" "}
                            <span className="text-muted font-medium">
                                {new Date().toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                        </p>
                    </div>

                    {/* Секции */}
                    <div className="space-y-5">
                        {SECTIONS.map((section) => (
                            <div
                                key={section.title}
                                className="rounded-3xl border border-black/5 bg-white p-4 sm:p-8"
                            >
                                <h2 className="font-title font-bold text-muted text-lg mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-text whitespace-pre-line leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Нижняя кнопка назад */}
                    <div className="mt-12">
                        <Button
                            href="/#contacts"
                            className="inline-flex w-full sm:w-60 justify-center items-center gap-2 h-13 text-sm font-medium"
                        >
                            Вернуться к форме
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}