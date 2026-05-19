"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";

const PLANS = [
  {
    name: "SaaS Platform",
    icon: Building,
    accent: "#C89520",
    tag: null,
    price: "$250",
    unit: "/mo head office",
    plus: "$75",
    plusUnit: "/mo per location",
    description: "Full platform access for the entire network. All 8 modules included from Day 1.",
    features: [
      "All 8 integrated modules",
      "Head office & franchisee portals",
      "Canadian hosting & data residency",
      "Bilingual platform (EN/FR)",
      "CAD invoicing",
      "CFA-aligned compliance tools",
    ],
    cta: "Start with SaaS",
    ctaVariant: "outline" as const,
  },
  {
    name: "Managed Services",
    icon: Crown,
    accent: "#2A9D8F",
    tag: "MOST POPULAR",
    price: "$3,000",
    unit: "/mo minimum",
    plus: null,
    plusUnit: null,
    description: "Platform + full-service execution. Our team handles campaigns, paid media, and reporting on your behalf.",
    features: [
      "Everything in SaaS Platform",
      "Campaign management & execution",
      "Paid media buying & optimization",
      "Influencer coordination",
      "Monthly network health reports",
      "Dedicated account strategist",
    ],
    cta: "Get Started",
    ctaVariant: "primary" as const,
    featured: true,
  },
  {
    name: "Pilot Program",
    icon: Zap,
    accent: "#D4592A",
    tag: "LIMITED SPOTS",
    price: "Custom",
    unit: "structured terms",
    plus: null,
    plusUnit: null,
    description: "2–4 anchor brands accepted to the structured pilot. Full platform. Real data. Reduced rate for case study rights.",
    features: [
      "Full platform access",
      "Dedicated onboarding & migration",
      "Co-design product feedback sessions",
      "Reference relationship agreement",
      "Priority feature requests",
      "Publicly credited case study",
    ],
    cta: "Apply for Pilot",
    ctaVariant: "outline" as const,
  },
];

const AVG_BRAND = [
  ["Head office fee", "$250 / mo CAD", false],
  ["Per-location fee (×35)", "$2,625 / mo CAD", false],
  ["Total SaaS", "$2,875 / mo CAD", true],
  ["With Managed Services", "$5,875 / mo CAD", true],
  ["Annual SaaS value", "$34,500 CAD / yr", true],
  ["Annual with Managed Services", "$70,500 CAD / yr", true],
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(200,149,32,0.06) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-5">Pricing Model</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            SIMPLE. <span className="gradient-text-gold">SCALABLE.</span><br />
            BUILT TO GROW WITH THE BRAND.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Priced around your franchise network, not seat count. Every new location is new revenue without a new sales conversation.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  background: plan.featured ? `${plan.accent}08` : "#0D1120",
                  borderColor: plan.featured ? `${plan.accent}30` : "rgba(255,255,255,0.07)",
                  borderTop: `3px solid ${plan.accent}`,
                }}
              >
                {plan.tag && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest"
                    style={{ background: plan.accent, color: plan.accent === "#C89520" ? "#080C18" : "white" }}
                  >
                    {plan.tag}
                  </div>
                )}

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${plan.accent}15`, color: plan.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl font-bold"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", color: plan.accent, letterSpacing: "0.04em" }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-sm text-[#6B7280]">{plan.unit}</span>
                    </div>
                    {plan.plus && (
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-[#9CA3AF]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                          + {plan.plus}
                        </span>
                        <span className="text-sm text-[#6B7280]">{plan.plusUnit}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-[#6B7280] mb-7 leading-relaxed">{plan.description}</p>

                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-sm text-[#9CA3AF]">
                        <Check size={14} style={{ color: plan.accent, flexShrink: 0 }} />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={plan.ctaVariant}
                    className="w-full font-semibold"
                    style={plan.featured ? { background: plan.accent, color: "#080C18" } : undefined}
                  >
                    {plan.cta} →
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Average brand calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: "#080C18" }}
        >
          <div className="px-7 py-5 border-b border-white/[0.06]">
            <div className="text-xs font-bold tracking-widest text-[#C89520] uppercase">Average Brand Calculator · 35 Locations</div>
          </div>
          <div className="px-7 py-4 divide-y divide-white/[0.04]">
            {AVG_BRAND.map(([label, value, bold]) => (
              <div key={label as string} className="flex items-center justify-between py-3">
                <span className="text-sm text-[#9CA3AF]">{label}</span>
                <span
                  className="font-bold"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: bold ? 18 : 14,
                    letterSpacing: "0.05em",
                    color: bold ? "#C89520" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
