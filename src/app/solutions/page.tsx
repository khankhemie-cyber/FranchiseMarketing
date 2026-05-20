"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Building2, Store, MapPinned, ArrowRight,
  BarChart2, ShieldCheck, Megaphone, Wallet,
  Brain, Package, Star, TrendingUp,
  Map, ClipboardList, Bell, MessageSquare,
  Utensils, ShoppingCart, Wrench, Dumbbell, Briefcase,
  CheckCircle,
} from "lucide-react";

const ROLES = [
  {
    id: "head-office",
    icon: Building2,
    label: "Head Office",
    color: "#C8921A",
    tagline: "Control without micromanagement.",
    stats: [
      { n: "Real-time", l: "network visibility" },
      { n: "100%", l: "brand compliance" },
      { n: "2×", l: "faster campaign launch" },
      { n: "Zero", l: "manual report pulls" },
    ],
    benefits: [
      { icon: BarChart2, title: "Live network dashboard", desc: "Every location's spend, performance, and compliance — right now." },
      { icon: ShieldCheck, title: "Brand guardrails", desc: "Franchisees customise within rules you set. No rogue creative." },
      { icon: Megaphone, title: "One-click deployment", desc: "Push campaigns to any number of locations instantly." },
      { icon: Wallet, title: "Co-op transparency", desc: "Fund allocations franchisees can see. Builds trust, reduces friction." },
      { icon: Brain, title: "AI-powered decisions", desc: "Anomaly alerts, budget recommendations, demand forecasting." },
      { icon: Package, title: "Vendor governance", desc: "Pre-vetted suppliers, network pricing, centralised procurement." },
    ],
  },
  {
    id: "franchisees",
    icon: Store,
    label: "Franchisees",
    color: "#1A6478",
    tagline: "Local flexibility. Brand confidence.",
    stats: [
      { n: "Minutes", l: "to launch a campaign" },
      { n: "Network", l: "buying power" },
      { n: "Clear", l: "performance data" },
      { n: "No agency", l: "required" },
    ],
    benefits: [
      { icon: Megaphone, title: "Ready-to-use campaigns", desc: "Pre-approved templates — launch a local campaign in minutes." },
      { icon: MapPinned, title: "Trade-area targeting", desc: "Geofencing tools built for your specific location and radius." },
      { icon: BarChart2, title: "Your performance, simply", desc: "Leads, ROAS, foot traffic — no data analyst needed." },
      { icon: Star, title: "Peer benchmarking", desc: "See how your location ranks against similar stores in your region." },
      { icon: Package, title: "Network vendor pricing", desc: "Access print, signage, and creative at rates you can't get alone." },
      { icon: TrendingUp, title: "Incremental media buying", desc: "Self-serve paid ads within approved parameters." },
    ],
  },
  {
    id: "field-managers",
    icon: MapPinned,
    label: "Field Managers",
    color: "#2EA5A0",
    tagline: "Your territory. Structured and searchable.",
    stats: [
      { n: "Full", l: "territory history" },
      { n: "Proactive", l: "compliance alerts" },
      { n: "Structured", l: "visit workflows" },
      { n: "Closed", l: "loop to head office" },
    ],
    benefits: [
      { icon: Map, title: "Territory workspace", desc: "Every franchisee's performance, visits, and flags in one view." },
      { icon: ClipboardList, title: "Structured visit logs", desc: "Capture commitments and outcomes from every coaching conversation." },
      { icon: Bell, title: "Proactive alerts", desc: "Get notified when a franchisee skips a campaign or spend dips." },
      { icon: BarChart2, title: "Coaching with data", desc: "Walk into every visit with the last 90 days of performance loaded." },
      { icon: MessageSquare, title: "Escalation workflows", desc: "Surface field observations to head office in a structured format." },
      { icon: TrendingUp, title: "Regional rollups", desc: "Territory-level performance summaries for every review cycle." },
    ],
  },
];

const VERTICALS = [
  { icon: Utensils,    name: "Quick Service",        color: "#D84F18", line: "Drive-time targeting, daypart promos, foot-traffic attribution.",     photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  { icon: ShoppingCart,name: "Retail",               color: "#C8921A", line: "Brand-consistent local promotions with head-office guardrails.",       photo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" },
  { icon: Wrench,      name: "Home Services",         color: "#1A6478", line: "Postal-code geofencing, weather triggers, direct mail suppliers.",     photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
  { icon: Dumbbell,    name: "Fitness & Wellness",    color: "#2EA5A0", line: "Seasonal demand forecasting, member retention, referral programs.",    photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
  { icon: Briefcase,   name: "Professional Services", color: "#1C2B4A", line: "Regulated marketing compliance, CASL management, approval workflows.", photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
];

export default function SolutionsPage() {
  const [active, setActive] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === active)!;
  const RoleIcon = role.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EDE9E3]">
        <div className="absolute inset-0 grid-subtle opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 70% 40%, rgba(200,146,26,0.07) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-5">
            Sova Solutions
          </div>
          <h1 className="font-display text-[clamp(52px,7vw,96px)] text-[#1C2B4A] leading-[0.88] mb-6 max-w-3xl">
            ONE PLATFORM.<br />EVERY ROLE.<br /><span style={{ color: "#C8921A" }}>EVERY LAYER.</span>
          </h1>
          <p className="text-lg text-[#4A5568] max-w-xl mb-12" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Designed for the full franchise structure — head office, franchisees, and field teams all working from the same platform.
          </p>

          {/* Role tabs */}
          <div className="flex gap-2 flex-wrap">
            {ROLES.map((r) => {
              const Icon = r.icon;
              const isActive = r.id === active;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(r.id)}
                  className="flex items-center gap-2 font-sans-ui text-[13px] font-semibold px-5 py-2.5 rounded-sm transition-all duration-200"
                  style={{
                    background: isActive ? r.color : "#FDFBF8",
                    color: isActive ? "white" : "#1C2B4A",
                    border: `1px solid ${isActive ? r.color : "rgba(28,43,74,0.12)"}`,
                  }}
                >
                  <Icon size={14} />
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role panel */}
      <AnimatePresence mode="wait">
        <motion.section
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="py-20 bg-[#F5F1EB]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Role header */}
            <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: role.color }}>
                    <RoleIcon size={18} color="white" />
                  </div>
                  <span className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: role.color }}>
                    {role.label}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(36px,4vw,56px)] text-[#1C2B4A] leading-[0.92]">
                  {role.tagline.toUpperCase()}
                </h2>
              </div>

              {/* Stat strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[rgba(28,43,74,0.08)] rounded-xl overflow-hidden border border-[rgba(28,43,74,0.08)]">
                {role.stats.map((s) => (
                  <div key={s.l} className="bg-[#FDFBF8] px-5 py-4 text-center">
                    <div className="font-display text-[28px] leading-none mb-1" style={{ color: role.color }}>{s.n}</div>
                    <div className="font-sans-ui text-[11px] text-[#718096] leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefit grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {role.benefits.map((b, i) => {
                const BIcon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-xl p-6 border border-[rgba(28,43,74,0.07)] flex items-start gap-4 card-hover"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${role.color}15` }}>
                      <BIcon size={16} style={{ color: role.color }} />
                    </div>
                    <div>
                      <div className="font-sans-ui text-[14px] font-semibold text-[#1C2B4A] mb-1">{b.title}</div>
                      <div className="font-sans-ui text-[12px] text-[#718096] leading-relaxed">{b.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Network flow diagram */}
      <section className="py-20 bg-[#1C2B4A] overflow-hidden relative">
        {/* Photo background */}
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(28,43,74,0.88)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">How It Connects</div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-[0.9]">
              THE FULL FRANCHISE LOOP.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 relative">
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.id} className="relative">
                  <div className="rounded-xl p-7 border h-full"
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: `${r.color}40`, borderTop: `2px solid ${r.color}` }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: `${r.color}25` }}>
                      <Icon size={18} style={{ color: r.color }} />
                    </div>
                    <div className="font-display text-[22px] text-white mb-3">{r.label.toUpperCase()}</div>
                    <ul className="space-y-2">
                      {r.benefits.slice(0, 3).map((b) => (
                        <li key={b.title} className="flex items-center gap-2 font-sans-ui text-[12px] text-white/50">
                          <CheckCircle size={11} style={{ color: r.color, flexShrink: 0 }} />
                          {b.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2.5 z-10 w-5 h-5 rounded-full items-center justify-center"
                      style={{ background: "#1C2B4A", border: "2px solid rgba(200,146,26,0.4)" }}>
                      <ArrowRight size={10} style={{ color: "#C8921A" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 bg-[#EDE9E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">Industry Coverage</div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] text-[#1C2B4A] leading-[0.9]">
              BUILT FOR YOUR CATEGORY.
            </h2>
          </div>

          {/* Photo strip */}
          <div className="relative h-56 overflow-hidden mb-12 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
              alt="Franchise retail environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,43,74,0.7) 0%, transparent 60%)" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VERTICALS.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative overflow-hidden rounded-xl group card-hover"
                  style={{ minHeight: "220px" }}
                >
                  <img
                    src={v.photo}
                    alt={v.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,43,74,0.90) 0%, rgba(28,43,74,0.50) 60%, rgba(28,43,74,0.25) 100%)" }} />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${v.color}99` }}>
                      <Icon size={18} style={{ color: "white" }} />
                    </div>
                    <div className="font-sans-ui text-[13px] font-semibold text-white mb-2">{v.name}</div>
                    <div className="font-sans-ui text-[11px] text-white/70 leading-relaxed">{v.line}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-[clamp(40px,6vw,72px)] text-[#1C2B4A] leading-[0.9] mb-6">
            SEE HOW SOVA<br />FITS YOUR NETWORK.
          </h2>
          <div className="rule-gold mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/early-access" className="font-sans-ui inline-flex items-center gap-2 text-[14px] font-semibold px-7 py-3.5 rounded-sm bg-[#1C2B4A] text-white hover:bg-[#263d6b] transition-colors">
              Join the Waitlist <ArrowRight size={15} />
            </Link>
            <Link href="/platform" className="font-sans-ui inline-flex items-center gap-2 text-[14px] font-medium px-7 py-3.5 rounded-sm border border-[rgba(28,43,74,0.2)] text-[#1C2B4A] hover:border-[#1C2B4A] transition-colors">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
