import type { Metadata } from "next";
import { DemoForm } from "./DemoForm";

export const metadata: Metadata = { title: "Book a Demo" };

const expectations = [
  {
    icon: "⚙",
    heading: "Tailored walkthrough",
    line: "Configured around your brand, network size, and relevant modules.",
  },
  {
    icon: "💬",
    heading: "Franchise specialist — not sales",
    line: "Direct franchise operations experience on every call.",
  },
  {
    icon: "📊",
    heading: "Your pricing, before you leave",
    line: "Network-based pricing quoted on the call. No follow-up surprises.",
  },
];

const stats = [
  { figure: "140+", label: "Canadian franchise brands on Sova" },
  { figure: "8,200+", label: "Locations actively managed" },
  { figure: "30 min", label: "Average demo length" },
  { figure: "2 days", label: "Typical time to first value" },
];

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EDE9E3] relative overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 70% 40%, rgba(26,100,120,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
            Book a Demo
          </div>
          <h1
            className="font-display text-[64px] sm:text-[80px] lg:text-[100px] text-[#1C2B4A] leading-[0.88] mb-6"
          >
            SEE SOVA{" "}
            <span style={{ color: "#C8921A" }}>IN ACTION.</span>
          </h1>
          <div className="rule-gold mb-8" />
          <p
            className="text-xl leading-relaxed text-[#4A5568] max-w-xl"
            style={{ fontFamily: "'Constantia', Georgia, serif" }}
          >
            A 30-minute walkthrough built around your network.
          </p>
        </div>
      </section>

      {/* What to expect + Form */}
      <section className="bg-[#F5F1EB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

            {/* Left — what to expect */}
            <div>
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
                What to Expect
              </div>
              <h2 className="font-display text-[40px] sm:text-[48px] text-[#1C2B4A] leading-[0.9] mb-10">
                YOUR 30 MINUTES, WELL SPENT
              </h2>

              <div className="space-y-4">
                {expectations.map((item) => (
                  <div
                    key={item.heading}
                    className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-sm p-5 flex gap-4 items-start"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-lg"
                      style={{ background: "rgba(28,43,74,0.06)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-sans-ui text-sm font-semibold text-[#1C2B4A] mb-1">
                        {item.heading}
                      </h3>
                      <p
                        className="font-sans-ui text-[13px] text-[#718096]"
                      >
                        {item.line}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-14 pt-10 border-t border-[rgba(28,43,74,0.1)]">
                <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#718096] uppercase mb-6">
                  Trusted Across Canada
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.figure}>
                      <div className="font-display text-[36px] text-[#C8921A] leading-none mb-1">
                        {s.figure}
                      </div>
                      <div className="font-sans-ui text-[11px] text-[#718096] leading-snug">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — demo booking form (Client Component) */}
            <div
              className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-sm p-8 lg:p-10"
              style={{ borderTop: "3px solid #C8921A" }}
            >
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-3">
                Request Your Demo
              </div>
              <h2 className="font-display text-[32px] text-[#1C2B4A] leading-tight mb-8">
                BOOK YOUR SESSION
              </h2>
              <DemoForm />
            </div>

          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-[#1C2B4A] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0 justify-between">
            <p
              className="font-sans-ui text-sm text-[rgba(255,255,255,0.55)] max-w-sm"
            >
              Canadian franchise brands trust Sova to manage campaigns, vendors,
              and performance across every location in their network.
            </p>
            <div className="hidden sm:block w-px h-8 bg-[rgba(255,255,255,0.1)]" />
            {[
              "QSR & Fast Casual",
              "Home Services",
              "Health & Wellness",
              "Retail & Specialty",
            ].map((cat) => (
              <div key={cat} className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C8921A" }}
                />
                <span className="font-sans-ui text-xs text-[rgba(255,255,255,0.6)]">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
