import { useEffect, useRef, useState } from "react"

export const useScrollThreshold = (threshold: number) => {
    const [isPassed, setIsPassed] = useState(false);
    const passedRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const next = window.scrollY > threshold;
            if (next !== passedRef.current) {
                passedRef.current = next;
                setIsPassed(next);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return { isPassed };
}