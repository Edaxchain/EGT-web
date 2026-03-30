import CTAS from "./CTA";
import Hero from "./Hero";

export default function ServicePage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <CTAS />
        </main>
    );
}
