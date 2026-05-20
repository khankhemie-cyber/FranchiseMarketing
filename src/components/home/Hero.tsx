"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BRANDS = [
  "Tim Hortons", "Boston Pizza", "The UPS Store", "Subway Canada", "ServiceMaster",
  "Cinnabon", "Kumon", "Pet Valu", "Mary Brown's", "Mr. Lube",
  "Nurse Next Door", "Score Pizza", "Anytime Fitness", "Harvey's", "Cora's",
];

const STATS = [
  { n: "$133B", l: "Franchise GDP" },
  { n: "76,000+", l: "Locations" },
  { n: "1,300", l: "Active Brands" },
  { n: "8", l: "Platform Modules" },
];

const LIVE_METRICS = [
  { label: "Active Campaigns", value: "247", delta: "+18%", color: "#C8921A" },
  { label: "Network Revenue", value: "$8.4M", delta: "+24%", color: "#2EA5A0" },
  { label: "Locations Live", value: "143", delta: "100%", color: "#1A6478" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#EDE9E3] noise">
      {/* Grid */}
      <div className="absolute inset-0 grid-subtle opacity-50 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[10%] right-[8%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,146,26,0.12) 0%, transparent 70%)" }} />
        <div className="orb-b absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,100,120,0.1) 0%, transparent 70%)" }} />
        <div className="orb-c absolute top-[55%] right-[25%] w-[260px] h-[260px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(46,165,160,0.08) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left */}
          <motion.div style={{ opacity }} className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A] animate-pulse" />
                Built for Canadian Franchise Brands
              </div>
            </motion.div>

            <motion.h1
              className="font-display leading-[0.86] mb-8"
              style={{ fontSize: "clamp(64px, 8vw, 108px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {["YOUR ENTIRE", "FRANCHISE", "NETWORK."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block text-[#1C2B4A]"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block text-shimmer"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                ONE PLATFORM.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rule-gold mb-7"
            />

            <motion.p
              className="text-[18px] leading-relaxed text-[#4A5568] mb-10 max-w-md"
              style={{ fontFamily: "'Constantia', Georgia, serif" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              Complete visibility and control across every location — campaigns, vendors, performance, and AI in one platform.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Link href="/demo">
                <Button variant="dark" size="lg">
                  Book a Demo <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/platform">
                <Button variant="ghost" size="lg" className="font-sans-ui">
                  Explore Platform →
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <DashboardCard />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-20 pt-8 border-t border-[rgba(28,43,74,0.1)] grid grid-cols-2 sm:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 + i * 0.07 }}
            >
              <div className="font-display text-[44px] text-[#C8921A] leading-none mb-1">{s.n}</div>
              <div className="font-sans-ui text-[11px] text-[#718096] tracking-wide uppercase">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Brand marquee */}
      <BrandMarquee />
    </section>
  );
}

function DashboardCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden card-hover"
      style={{
        background: "rgba(253,251,248,0.82)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: "0 32px 100px rgba(28,43,74,0.16), 0 4px 24px rgba(28,43,74,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
      }}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(28,43,74,0.07)] bg-[#F5F1EB]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D84F18]/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#C8921A]/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#2EA5A0]/50" />
        <span className="font-sans-ui text-[11px] text-[#718096] mx-auto tracking-wide">Sova — Network Dashboard</span>
        <span className="font-sans-ui text-[10px] text-[#2EA5A0] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2EA5A0] animate-pulse inline-block" />
          LIVE
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2.5">
          {LIVE_METRICS.map((k, i) => (
            <motion.div
              key={k.label}
              className="rounded-xl p-3.5 border border-[rgba(28,43,74,0.07)] bg-white"
              style={{ borderTop: `2px solid ${k.color}` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-sans-ui text-[10px] text-[#718096] mb-1.5 leading-tight">{k.label}</div>
              <div className="font-display text-[26px] text-[#1C2B4A] leading-none">{k.value}</div>
              <div className="font-sans-ui text-[10px] font-semibold mt-1" style={{ color: k.color }}>{k.delta}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-[rgba(28,43,74,0.07)] p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div className="font-sans-ui text-[11px] font-semibold text-[#1C2B4A]">Location Performance Index</div>
            <div className="font-sans-ui text-[10px] text-[#2EA5A0]">▲ 12% MTD</div>
          </div>
          <div className="flex items-end gap-1 h-16">
            {[55, 72, 68, 84, 76, 91, 83, 69, 88, 95, 78, 97].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.045, duration: 0.45, ease: "easeOut" }}
                style={{
                  background: h > 82 ? "#C8921A" : h > 70 ? "#1A6478" : "rgba(28,43,74,0.12)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Module pills */}
        <div className="flex flex-wrap gap-1.5">
          {["Campaigns", "Paid Media", "Geofencing", "Vendors", "Analytics", "AI Layer"].map((m) => (
            <motion.span
              key={m}
              whileHover={{ scale: 1.05, backgroundColor: "#1C2B4A", color: "white" }}
              className="font-sans-ui text-[10px] font-medium px-2.5 py-1 rounded-md border text-[#4A5568] border-[rgba(28,43,74,0.1)] bg-[#F5F1EB] cursor-default transition-colors"
            >
              {m}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="w-full overflow-hidden border-t border-[rgba(28,43,74,0.08)] bg-[#EDE9E3]/80 backdrop-blur-sm py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((b, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6">
            <span className="font-sans-ui text-[11px] font-medium text-[#718096] tracking-[0.12em] uppercase">{b}</span>
            <span className="w-1 h-1 rounded-full bg-[#C8921A]/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
