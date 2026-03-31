import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import Technology from "./Technology";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Services />
            <Technology />
            <Works />
        </main>
    );
}
