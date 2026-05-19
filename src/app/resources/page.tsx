import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Resources" };

const GUIDES = [
  {
    badge: "Guide",
    badgeVariant: "gold" as const,
    title: "The Canadian Franchise Marketing Playbook",
    excerpt: "A comprehensive guide to building a marketing system that scales across your entire franchise network — from co-op fund governance to local campaign execution.",
    category: "Marketing Strategy",
    readTime: "18 min read",
  },
  {
    badge: "Research",
    badgeVariant: "teal" as const,
    title: "State of Canadian Franchise Marketing 2025",
    excerpt: "Annual research covering budget allocation trends, digital adoption rates, and performance benchmarks across 800+ Canadian franchise locations.",
    category: "Industry Research",
    readTime: "12 min read",
  },
  {
    badge: "Guide",
    badgeVariant: "gold" as const,
    title: "CASL Compliance for Franchise Marketers",
    excerpt: "What every Canadian franchise brand needs to know about express consent, implied consent, and managing opt-outs at scale across multiple locations.",
    category: "Compliance",
    readTime: "9 min read",
  },
  {
    badge: "Template",
    badgeVariant: "navy" as const,
    title: "Co-Op Fund Policy Template",
    excerpt: "A battle-tested template for structuring your franchise marketing fund — contribution rates, eligible spend categories, approval workflows, and audit provisions.",
    category: "Operations",
    readTime: "Template",
  },
  {
    badge: "Research",
    badgeVariant: "teal" as const,
    title: "Geofencing ROI in Canadian QSR: A 12-Month Study",
    excerpt: "How three Canadian QSR brands used precision geofencing to increase in-store visits by 23% while reducing cost-per-acquisition by 31%.",
    category: "Case Study",
    readTime: "7 min read",
  },
  {
    badge: "Guide",
    badgeVariant: "gold" as const,
    title: "Building a Franchise Brand Standards Manual",
    excerpt: "From logo usage to approved vendor lists — how to create a brand standards document that actually protects your brand without stifling franchisee initiative.",
    category: "Brand",
    readTime: "11 min read",
  },
];

const CATEGORIES = ["All", "Marketing Strategy", "Compliance", "Industry Research", "Operations", "Brand", "Case Study"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#EDE9E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Resources
          </div>
          <h1 className="font-display text-[64px] sm:text-[80px] text-[#1C2B4A] leading-[0.88] mb-6">
            FRANCHISE MARKETING<br />INTELLIGENCE.
          </h1>
          <p className="text-xl text-[#4A5568] max-w-xl" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Guides, research, templates, and playbooks — built for Canadian franchise operators who want to grow with confidence.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-[#F5F1EB] border-b border-[rgba(28,43,74,0.08)] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((c, i) => (
              <button
                key={c}
                className="font-sans-ui text-[12px] font-medium px-4 py-1.5 rounded-sm whitespace-nowrap transition-colors"
                style={{
                  background: i === 0 ? "#1C2B4A" : "transparent",
                  color: i === 0 ? "white" : "#4A5568",
                  border: "1px solid",
                  borderColor: i === 0 ? "#1C2B4A" : "rgba(28,43,74,0.15)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#EDE9E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((g) => (
              <div
                key={g.title}
                className="bg-[#FDFBF8] rounded-xl p-6 border border-[rgba(28,43,74,0.08)] flex flex-col hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Badge variant={g.badgeVariant}>{g.badge}</Badge>
                  <span className="font-sans-ui text-[11px] text-[#718096]">{g.readTime}</span>
                </div>
                <div className="font-sans-ui text-[11px] font-medium text-[#718096] mb-2 tracking-wide">{g.category}</div>
                <h3 className="font-display text-[22px] text-[#1C2B4A] leading-tight mb-3">{g.title}</h3>
                <p className="font-sans-ui text-[13px] leading-relaxed text-[#4A5568] flex-1 mb-5">{g.excerpt}</p>
                <div className="flex items-center gap-1.5 font-sans-ui text-[12px] font-semibold text-[#C8921A]">
                  Read more <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#1C2B4A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Stay Informed
          </div>
          <h2 className="font-display text-[40px] text-white mb-4">
            THE FRANCHISE MARKETING BRIEF.
          </h2>
          <p className="text-[15px] text-white/55 max-w-md mx-auto mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Monthly intelligence for Canadian franchise marketers — industry shifts, platform updates, and curated insights. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@brand.ca"
              className="font-sans-ui text-[14px] w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#C8921A]"
            />
            <button className="font-sans-ui text-[13px] font-semibold bg-[#C8921A] text-white px-5 py-3 rounded-sm hover:bg-[#B07D14] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="font-sans-ui text-[11px] text-white/30 mt-3">CASL-compliant. Your information stays with us.</p>
        </div>
      </section>
    </>
  );
}
