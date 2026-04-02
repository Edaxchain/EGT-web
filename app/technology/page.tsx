
import Blockchain from "./Blockchain";
import Hero from "./Hero";
import Ecosystem from "./Ecosystem";
import FAQ from "./FAQ"
import CTA from "./CTA"





export default function TechnologyPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Blockchain />
            <Ecosystem />
            <FAQ/>
            <CTA />




           
        </main>
    );
}