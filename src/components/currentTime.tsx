"use client";

import { useEffect, useState } from "react";

export function CurrentTime() {
   const [time, setTime] = useState("");

   useEffect(() => {
      const updateTime = () => {
         const currentTime = new Intl.DateTimeFormat("ru-RU", {
            timeZone: "Europe/Moscow",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23"
         }).format(new Date());

         setTime(currentTime);
      }

      updateTime();

      const interval = setInterval(updateTime, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <p>
         Россия, Волгоград &ndash; <span className="animate-pulse">{time || "--:--"}</span> GMT +3
      </p>
   );
}