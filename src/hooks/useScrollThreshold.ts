import { useEffect, useState } from "react"

export const useScrollThreshold = (threshold: any) => {
    const [isPassed, setIsPassed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setIsPassed(true);
            } else {
                setIsPassed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return { isPassed };
}