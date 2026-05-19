import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "About" };

const values = [
  {
    title: "Transparency",
    body:
      "Franchise networks run on trust between head office and franchisees. We build every feature to surface the real numbers — no massaged metrics, no hidden roll-ups. When an operator logs into Sova, they see exactly what is happening across their network.",
  },
  {
    title: "Canadian-First",
    body:
      "We were built in Canada, for Canada. That means bilingual support, Canadian privacy law compliance from day one, and platform logic that reflects the realities of the Canadian franchise landscape — not an afterthought adaptation of a US product.",
  },
  {
    title: "Operator Mindset",
    body:
      "Every product decision goes through a simple filter: does this make a franchise operator's day easier? We have sat in those chairs. We know that a CMO managing 200 locations does not need another dashboard — they need clarity, fast.",
  },
  {
    title: "Privacy by Design",
    body:
      "PIPEDA compliance is not a checkbox for us. Data minimisation, purpose limitation, and consent management are baked into the platform architecture. Franchisee data stays where it belongs, and franchisors control what rolls up and what stays local.",
  },
];

const team = [
  {
    name: "Marie Tremblay",
    title: "Co-Founder & CEO",
    bio:
      "Marie spent twelve years as VP Marketing at two of Canada's largest QSR franchise groups before co-founding Sova. She led the national rollout of a 400-location digital transformation program and holds an MBA from HEC Montréal.",
  },
  {
    name: "James MacKenzie",
    title: "Co-Founder & CTO",
    bio:
      "James built data infrastructure at a Bay Street fintech before pivoting to franchise tech. He architected Sova's multi-tenant analytics engine and holds a B.Sc. in Computer Science from the University of Waterloo.",
  },
  {
    name: "Priya Nair",
    title: "VP Product",
    bio:
      "Priya joined from a Toronto-based marketing SaaS where she led a team of 14 product managers. She is deeply focused on the franchisee experience and ensuring the platform serves both ends of the franchisor-franchisee relationship.",
  },
  {
    name: "David Park",
    title: "VP Customer Success",
    bio:
      "David was Director of Franchise Operations for a national home-services brand before joining Sova. He brings direct field experience to every onboarding and ensures our clients realise value within their first 90 days.",
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
          <h1
            className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-[#1C2B4A] leading-[0.88] mb-10 max-w-5xl"
          >
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
          <div className="max-w-3xl">
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
              Our Mission
            </div>
            <blockquote
              className="font-display text-[32px] sm:text-[40px] text-white leading-[1.1] mb-10"
            >
              Our mission is to give every Canadian franchise brand the operating
              clarity their network deserves.
            </blockquote>
            <div className="rule-gold mb-10" />
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed text-[rgba(255,255,255,0.75)]"
                style={{ fontFamily: "'Constantia', Georgia, serif" }}
              >
                For too long, franchise marketing has been managed through a
                patchwork of tools: one platform for paid media, another for
                local listings, a spreadsheet for vendor spend, and a weekly
                report that is already obsolete by the time it reaches the
                executive team. Head office makes decisions based on incomplete
                data. Franchisees operate without visibility into how their
                locations compare. The entire network suffers.
              </p>
              <p
                className="text-lg leading-relaxed text-[rgba(255,255,255,0.75)]"
                style={{ fontFamily: "'Constantia', Georgia, serif" }}
              >
                Sova consolidates that fragmented picture into a single operating
                layer — campaigns, paid media, geofencing, vendor management,
                performance analytics, and AI-assisted intelligence, all
                connected and all current. When something changes at a location,
                head office knows within hours, not weeks.
              </p>
              <p
                className="text-lg leading-relaxed text-[rgba(255,255,255,0.75)]"
                style={{ fontFamily: "'Constantia', Georgia, serif" }}
              >
                We measure our success by one metric: whether the brands on our
                platform grow faster and operate more confidently than they did
                before. Everything else follows from that.
              </p>
            </div>
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
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#FDFBF8] rounded-sm border border-[rgba(28,43,74,0.08)] p-8"
                style={{
                  borderTop: "3px solid #C8921A",
                }}
              >
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-4">
                  {v.title.toUpperCase()}
                </h3>
                <p
                  className="text-base leading-relaxed text-[#4A5568]"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#EDE9E3] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Leadership
          </div>
          <h2 className="font-display text-[52px] sm:text-[64px] text-[#1C2B4A] leading-[0.9] mb-16">
            THE TEAM
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Avatar placeholder */}
                <div
                  className="w-full aspect-[4/3] rounded-sm mb-5 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #1C2B4A 0%, #1A6478 100%)",
                  }}
                >
                  <div>
                    <div className="font-display text-[22px] text-white leading-tight">
                      {member.name.split(" ")[0].toUpperCase()}
                    </div>
                    <div className="font-display text-[22px] leading-tight" style={{ color: "#C8921A" }}>
                      {member.name.split(" ")[1].toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="font-sans-ui text-[11px] font-semibold tracking-[0.15em] text-[#C8921A] uppercase mb-1">
                  {member.title}
                </div>
                <h3 className="font-display text-[22px] text-[#1C2B4A] mb-3">
                  {member.name.toUpperCase()}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#4A5568] flex-1"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toronto HQ */}
      <section className="bg-[#F5F1EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-sm p-10 flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                Headquarters
              </div>
              <h2 className="font-display text-[40px] sm:text-[48px] text-[#1C2B4A] leading-[0.9] mb-6">
                TORONTO, ONTARIO
              </h2>
              <div className="rule-gold mb-6" />
              <address
                className="not-italic text-[#4A5568] space-y-1"
                style={{ fontFamily: "'Constantia', Georgia, serif" }}
              >
                <div className="text-lg font-medium text-[#1C2B4A]">Sova Inc.</div>
                <div>Suite 1400 — 150 King Street West</div>
                <div>Toronto, ON  M5H 1J9</div>
                <div className="pt-2 text-sm text-[#718096]">Canada</div>
              </address>
            </div>
            <div className="flex-1 lg:pl-10 lg:border-l border-[rgba(28,43,74,0.1)]">
              <p
                className="text-lg leading-relaxed text-[#4A5568]"
                style={{ fontFamily: "'Constantia', Georgia, serif" }}
              >
                Our team works out of the heart of Toronto's financial district —
                minutes from the franchise brands, legal counsel, and investment
                community that make up the Canadian franchise ecosystem. We hold
                regular in-person roundtables for clients and host onboarding
                sessions for new network partners throughout the year.
              </p>
            </div>
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
