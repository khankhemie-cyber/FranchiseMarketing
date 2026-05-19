"use client";

const FRANCHISE_VERTICALS = [
  "QSR & Food Service",
  "Home Services",
  "Fitness & Wellness",
  "Beauty & Aesthetics",
  "Education",
  "Retail",
  "Healthcare",
  "Automotive",
  "Financial Services",
  "Real Estate",
  "Cleaning Services",
  "Pet Services",
];

export function Marquee() {
  const items = [...FRANCHISE_VERTICALS, ...FRANCHISE_VERTICALS];

  return (
    <section className="relative py-16 border-y border-white/[0.05] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #080C18, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #080C18, transparent)" }} />

      <div className="flex items-center gap-1 mb-2">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-sm font-medium text-[#6B7280] tracking-wider uppercase">{item}</span>
              <span className="text-[#C89520]/40 text-lg font-bold">·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C89520]/20 to-transparent" />
    </section>
  );
}
