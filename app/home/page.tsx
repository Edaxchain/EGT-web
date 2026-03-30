import Hero from "./Hero";
import Services from "./Services";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Services />
        </main>
    );
}
