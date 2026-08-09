"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Container } from "../shared";
import { Button, Heading } from "../ui";
import { ContactFormValues, contactSchema } from "@/constants/contact-data";
import { useState } from "react";
import { lenisRef } from "../providers/SmoothScroll";
import { SendMessage } from "@/server-actions/send-message";
import { Spinner } from "../ui/spinner";
import { toast } from "../ui/toast";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

interface Props {
    className?: string
}

const inputClassName = cn(
    "h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-md text-muted",
    "outline-none duration-200 placeholder:text-text/50",
    "focus:ring-2 focus:ring-accent/50"
);

export function Contact({ className }: Props) {
    const [isSubmitting, setSubmiting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            materialsLink: "",
            politika: false
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setSubmiting(true);
        lenisRef.current?.stop();

        try {
            const res = await SendMessage(data);
            if (res.success) {
                toast.add({
                    type: "success",
                    description: "Сообщение успешно отправлено"
                });
                reset();
            } else {
                toast.add({
                    type: "error",
                    description: res.error || "Не удалось отправить сообщение"
                });
            }
        } catch (error) {
            console.log(error);
            toast.add({
                type: "error",
                description: "Произошла непредвиденная ошибка"
            });
        } finally {
            setSubmiting(false);
            lenisRef.current?.start();
        }
    };

    return (
        <div className={cn("mb-50", className)} id="contacts">
            <Container>
                <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-[1fr_1.2fr]">
                    {/* Левая колонка */}
                    <div>
                        <div className="mb-10">
                            <p className="mb-4 font-title flex items-center gap-2 text-sm text-text">
                                <span className="h-px w-5 bg-text rounded-full" />
                                Контакты
                            </p>
                            <Heading size="section" accent="Свяжитесь">
                                со мной
                            </Heading>
                        </div>
                        <p className="mb-16 max-w-100 text-pretty">
                            Давайте обсудим ваш следующий проект и создадим что-то исключительное.
                        </p>

                        <div className="relative h-[300px] w-full max-w-[370px]">
                            <Image
                                src="/contact-us-1.svg"
                                alt="Иллюстрация: звонок в процессе"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Форма */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="rounded-3xl border border-black/5 bg-white p-8"
                    >
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-2 block font-title text-sm text-text">
                                Как к вам обращаться? <span className="text-accent">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Иван Иванов"
                                className={inputClassName}
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="text-red-500! text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-2 block font-title text-sm text-text">
                                Email <span className="text-accent">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="ivan@example.com"
                                className={inputClassName}
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-red-500! text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="message" className="mb-2 block font-title text-sm text-text">
                                Расскажите о задаче <span className="text-accent">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Опишите детали вашего проекта..."
                                className={cn(inputClassName, "h-auto resize-none py-3")}
                                {...register("message")}
                            />
                            {errors.message && (
                                <p className="text-red-500! text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <div className="mb-7">
                            <label htmlFor="materialsLink" className="mb-2 block font-title text-sm text-text">
                                Ссылка на материалы
                            </label>
                            <input
                                id="materialsLink"
                                type="text"
                                placeholder="https://..."
                                className={inputClassName}
                                {...register("materialsLink")}
                            />
                            {errors.materialsLink && (
                                <p className="text-red-500! text-sm mt-1">{errors.materialsLink.message}</p>
                            )}
                        </div>

                        <div className="mb-10">
                            <div className="flex items-center gap-3 ">
                                <Checkbox id="politika" onCheckedChange={(checked) => setValue("politika", checked === true)} />
                                <label htmlFor="politika" className="font-title text-sm text-text select-none">Я согласен(а) нa { }
                                    <Link
                                        href="/privacy-policy"
                                        className="text-accent font-semibold border-b"
                                    >
                                        обработку персональных данных
                                    </Link>
                                </label>
                            </div>
                            {errors.politika && (
                                <p className="text-red-500! text-sm mt-1">{errors.politika.message}</p>
                            )}
                        </div>

                        <Button
                            className={cn("w-full h-15 justify-center flex items-center text-sm font-medium", {
                                "bg-accent/70": isSubmitting
                            })}
                            disabled={isSubmitting}
                            type="submit"
                        >
                            {
                                isSubmitting ? (
                                    <Spinner />
                                ) : (
                                    <span>Отправить заявку</span>
                                )
                            }
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
