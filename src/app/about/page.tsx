import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Layers,
  ShieldCheck,
  Eye,
  Flag,
  Wrench,
  Lock,
} from "lucide-react";

export const metadata: Metadata = { title: "About" };

const MISSION_PILLARS = [
  {
    icon: MapPin,
    headline: "Built in Canada",
    caption: "Bilingual, PIPEDA-compliant, and designed for the Canadian franchise landscape from day one.",
  },
  {
    icon: Layers,
    headline: "Purpose-built for franchising",
    caption: "One operating layer for campaigns, paid media, vendors, and performance — nothing bolted on.",
  },
  {
    icon: ShieldCheck,
    headline: "Privacy by design",
    caption: "Data minimisation and consent management are baked into the architecture, not added after.",
  },
];

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    body: "Every feature surfaces real numbers — no massaged metrics, no hidden roll-ups. Operators see exactly what is happening across their network.",
  },
  {
    icon: Flag,
    title: "Canadian-First",
    body: "Bilingual support and Canadian privacy law compliance from day one — built for how Canadian franchises actually operate.",
  },
  {
    icon: Wrench,
    title: "Operator Mindset",
    body: "Every product decision runs through one filter: does this make a franchise operator's day easier? Clarity over dashboards.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    body: "Franchisee data stays where it belongs. Franchisors control what rolls up and what stays local.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EDE9E3] relative overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(200,146,26,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-28">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
            About Sova
          </div>
          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-[#1C2B4A] leading-[0.88] mb-10 max-w-5xl">
            BUILT BY FRANCHISE OPERATORS.{" "}
            <span style={{ color: "#C8921A" }}>FOR FRANCHISE OPERATORS.</span>
          </h1>
          <div className="rule-gold mb-8" />
          <p
            className="text-xl leading-relaxed text-[#4A5568] max-w-2xl"
            style={{ fontFamily: "'Constantia', Georgia, serif" }}
          >
            Sova was founded by franchise marketing executives who had spent
            years navigating fragmented software stacks, disconnected vendor
            relationships, and performance data that arrived too late to act on.
            We built the platform we needed but could not find.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#1C2B4A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
            Our Mission
          </div>
          <blockquote className="font-display text-[32px] sm:text-[40px] text-white leading-[1.1] mb-10">
            Give every Canadian franchise brand the operating clarity their
            network deserves.
          </blockquote>
          <div className="rule-gold mb-14" />

          <div className="grid sm:grid-cols-3 gap-6">
            {MISSION_PILLARS.map(({ icon: Icon, headline, caption }) => (
              <div
                key={headline}
                className="rounded-xl p-8 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(200,146,26,0.15)" }}
                >
                  <Icon size={20} color="#C8921A" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-[22px] text-white leading-tight mb-3">
                  {headline.toUpperCase()}
                </h3>
                <p
                  className="text-[14px] leading-relaxed text-white/60"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F1EB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            What We Stand For
          </div>
          <h2 className="font-display text-[52px] sm:text-[64px] text-[#1C2B4A] leading-[0.9] mb-16">
            OUR VALUES
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-[#FDFBF8] rounded-sm border border-[rgba(28,43,74,0.08)] p-8"
                style={{ borderTop: "3px solid #C8921A" }}
              >
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center mb-5"
                  style={{ background: "rgba(200,146,26,0.1)" }}
                >
                  <Icon size={18} color="#C8921A" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-3">
                  {title.toUpperCase()}
                </h3>
                <p
                  className="text-base leading-relaxed text-[#4A5568]"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C2B4A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
            Ready to See Sova?
          </div>
          <h2 className="font-display text-[56px] sm:text-[72px] text-white leading-[0.9] mb-8">
            BOOK A 30-MINUTE DEMO
          </h2>
          <p
            className="text-lg text-[rgba(255,255,255,0.65)] max-w-xl mx-auto mb-10"
            style={{ fontFamily: "'Constantia', Georgia, serif" }}
          >
            Walk through the platform with a franchise specialist. No pressure,
            no generic slides — a tailored look at how Sova fits your network.
          </p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
