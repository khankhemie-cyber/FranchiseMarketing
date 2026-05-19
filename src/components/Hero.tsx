"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, TrendingUp, MapPin, Users } from "lucide-react";

const STATS = [
  { value: "$133B", label: "Canadian franchise GDP", accent: "#C89520" },
  { value: "76,000+", label: "Franchise locations", accent: "#2A9D8F" },
  { value: "1,300", label: "Active franchise brands", accent: "#1B6070" },
];

function DashboardPreview() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0D1120] shadow-[0_0_100px_rgba(200,149,32,0.08)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#080C18]/60">
        <div className="w-3 h-3 rounded-full bg-[#D4592A]/70" />
        <div className="w-3 h-3 rounded-full bg-[#C89520]/70" />
        <div className="w-3 h-3 rounded-full bg-[#2A9D8F]/70" />
        <div className="mx-auto text-xs text-[#6B7280] font-mono">sova.platform — Network Dashboard</div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 grid grid-cols-3 gap-3">
        {/* KPI cards */}
        {[
          { label: "Active Campaigns", value: "247", delta: "+18%", color: "#C89520" },
          { label: "Network Revenue", value: "$8.4M", delta: "+24%", color: "#2A9D8F" },
          { label: "Franchise Locations", value: "143", delta: "+7", color: "#1B6070" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-[#080C18]/80 rounded-xl p-4 border border-white/[0.05]"
            style={{ borderTop: `2px solid ${kpi.color}` }}
          >
            <div className="text-[11px] text-[#6B7280] mb-2 font-medium">{kpi.label}</div>
            <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
              {kpi.value}
            </div>
            <div className="text-xs font-semibold" style={{ color: kpi.color }}>{kpi.delta} this month</div>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="px-5 pb-2">
        <div className="bg-[#080C18]/60 rounded-xl border border-white/[0.05] p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-white/80">Location Performance Index</div>
            <div className="flex items-center gap-3 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#C89520] inline-block" />Gold tier</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2A9D8F] inline-block" />Standard</span>
            </div>
          </div>
          {/* Fake chart bars */}
          <div className="flex items-end gap-1.5 h-20">
            {[65, 82, 74, 91, 78, 95, 88, 72, 86, 93, 79, 97].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                style={{ background: h > 85 ? "#C89520" : "rgba(42,157,143,0.6)" }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-[#6B7280]">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Module pills */}
      <div className="p-5 pt-3 flex items-center gap-2 flex-wrap">
        {["Campaign Engine", "Paid Media", "Geofencing", "Vendor Marketplace", "AI Layer", "Analytics"].map((m) => (
          <div
            key={m}
            className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-[#9CA3AF] bg-white/[0.04] border border-white/[0.05] hover:border-[#C89520]/30 hover:text-[#C89520] transition-all cursor-pointer"
          >
            {m}
          </div>
        ))}
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-y-0 -left-full w-1/2 shimmer-line opacity-60" />
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial gradient blobs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(200,149,32,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(42,157,143,0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(27,96,112,0.06) 0%, transparent 70%)" }} />
      </motion.div>

      {/* Animated ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C89520]/[0.04] spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#2A9D8F]/[0.03] pointer-events-none" style={{ animation: "spin-slow 30s linear infinite reverse" }} />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Badge variant="gold" className="text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89520] pulse-glow inline-block" />
            Now in Private Pilot — Canadian Franchise Brands Only
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            THE OPERATING<br />
            <span className="gradient-text-gold">SYSTEM</span> FOR<br />
            <span className="text-[#2A9D8F]">CANADIAN</span><br />
            FRANCHISE GROWTH.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          One platform. Eight integrated modules. Built exclusively for Canadian franchise brands ready to scale without chaos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="font-bold tracking-wide shadow-[0_0_30px_rgba(200,149,32,0.3)] hover:shadow-[0_0_50px_rgba(200,149,32,0.5)]">
            Get Early Access
            <ArrowRight size={18} />
          </Button>
          <Button variant="ghost" size="lg" className="group">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C89520]/50 transition-colors">
              <Play size={12} className="ml-0.5" />
            </span>
            See the platform
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: stat.accent, letterSpacing: "0.04em" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#6B7280] font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute -inset-4 rounded-3xl opacity-40"
            style={{ background: "radial-gradient(ellipse, rgba(200,149,32,0.12) 0%, transparent 70%)" }} />
          <DashboardPreview />
        </motion.div>
      </motion.div>
    </section>
  );
}
