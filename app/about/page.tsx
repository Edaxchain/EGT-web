import Us from "./Us";
import People from "./People";
import Partner from "./Partner";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Us />
            <People />
            <Partner />
        </main>
    );
}
