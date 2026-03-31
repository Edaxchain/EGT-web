import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import Technology from "./Technology";
import Contact from "./Contact";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Services />
            <Technology />
            <Works />
            <Contact />
        </main>
    );
}
