import CTAS from "./CTA";
import Hero from "./Hero";
import InstallationSteps from "./Step";
import ProCons from "./ProCon";

export default function ServicePage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <InstallationSteps />
            <ProCons />





            <CTAS />
        </main>
    );
}
