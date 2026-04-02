import Highlight from "./Highlight";
import Contact from "../home/Contact";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Highlight />
            <Contact />
        </main>
    );
}
