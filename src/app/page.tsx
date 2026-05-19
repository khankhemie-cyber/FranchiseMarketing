import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProblemSolution } from "@/components/ProblemSolution";
import { MarketStats } from "@/components/MarketStats";
import { Modules } from "@/components/Modules";
import { WhoWeServe } from "@/components/WhoWeServe";
import { GTM } from "@/components/GTM";
import { Pricing } from "@/components/Pricing";
import { Financials } from "@/components/Financials";
import { Moats } from "@/components/Moats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <ProblemSolution />
      <MarketStats />
      <Modules />
      <WhoWeServe />
      <GTM />
      <Pricing />
      <Financials />
      <Moats />
      <CTA />
      <Footer />
    </main>
  );
}
