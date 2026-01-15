import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { OpenSource } from "@/components/OpenSource";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Privacy />
      <Pricing />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;
