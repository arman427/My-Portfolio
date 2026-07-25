import { AboutMe, Hero, Projects, Services, Skills } from "@/components/sections";

export default function Home() {
   return (
      <>
         <Hero />
         <AboutMe />
         <Skills />
         <Services />
         <Projects />
      </>
   );
}