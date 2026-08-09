import { AboutMe, Contact, Hero, ManifestoSection, Projects, Services, Skills, Testimonials } from "@/components/sections";
import { Footer } from "@/components/layout/footer";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <ManifestoSection />
            <Contact />
            <Footer />
        </>
    );
}
