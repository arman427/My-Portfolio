"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const lenisRef = { current: null as Lenis | null };

export function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: false,
            smoothWheel: true,
            lerp: 0.1,
            anchors: {
                duration: 1.5,
                offset: -20,
                easing: (t: number) =>
                    t < 0.5 ? 8 * Math.pow(t, 4) : 1 - Math.pow(-2 * t + 2, 4) / 2,
            },
        });

        lenisRef.current = lenis; // <-- сохраняем

        const handleScroll = () => ScrollTrigger.update();
        lenis.on("scroll", handleScroll);

        const update = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();

        return () => {
            lenis.off("scroll", handleScroll);
            gsap.ticker.remove(update);
            lenis.destroy();
            lenisRef.current = null;
            gsap.ticker.lagSmoothing(500, 33);
        };
    }, []);

    return <>{children}</>;
}