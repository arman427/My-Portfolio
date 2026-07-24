"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
   children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
   useEffect(() => {
      const lenis = new Lenis({
         autoRaf: false,
         smoothWheel: true,
         lerp: 0.1,
         anchors: true,
      });

      const handleScroll = () => {
         ScrollTrigger.update();
      };

      lenis.on("scroll", handleScroll);

      const update = (time: number) => {
         lenis.raf(time * 1000);
      };

      gsap.ticker.add(update);

      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();

      return () => {
         lenis.off("scroll", handleScroll);
         gsap.ticker.remove(update);
         lenis.destroy();

         gsap.ticker.lagSmoothing(500, 33);
      };
   }, []);

   return <>{children}</>;
}