import { Hero } from "@/components/home/Hero";
import { EventCallout } from "@/components/home/EventCallout";
import { ModulesShowcase } from "@/components/home/ModulesShowcase";
import { FranchiseLifecycle } from "@/components/home/FranchiseLifecycle";
import { NetworkDiagram } from "@/components/home/NetworkDiagram";
import { WhoItServes } from "@/components/home/WhoItServes";
import { ExecutiveTeaser } from "@/components/home/ExecutiveTeaser";
import { RankingsTeaser } from "@/components/home/RankingsTeaser";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EventCallout />
      <ModulesShowcase />
      <FranchiseLifecycle />
      <NetworkDiagram />
      <WhoItServes />
      <ExecutiveTeaser />
      <RankingsTeaser />
      <HomeCTA />
    </>
  );
}
