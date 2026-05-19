import { Hero } from "@/components/home/Hero";
import { PlatformPillars } from "@/components/home/PlatformPillars";
import { ModulesShowcase } from "@/components/home/ModulesShowcase";
import { WhoItServes } from "@/components/home/WhoItServes";
import { ExecutiveTeaser } from "@/components/home/ExecutiveTeaser";
import { RankingsTeaser } from "@/components/home/RankingsTeaser";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformPillars />
      <ModulesShowcase />
      <WhoItServes />
      <ExecutiveTeaser />
      <RankingsTeaser />
      <HomeCTA />
    </>
  );
}
