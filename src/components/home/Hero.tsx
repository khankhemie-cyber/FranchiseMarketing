"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1C2B4A]">
      {/* Background photograph */}
      <img
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Deep navy overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(28,43,74,0.97) 0%, rgba(28,43,74,0.90) 50%, rgba(28,43,74,0.82) 100%)" }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-subtle opacity-20 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[10%] right-[8%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,146,26,0.15) 0%, transparent 70%)" }} />
        <div className="orb-b absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(46,165,160,0.10) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 w-full">
        <motion.div style={{ opacity }} className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A] animate-pulse" />
              Built for Canadian Franchise Brands
            </div>
          </motion.div>

          <motion.h1
            className="font-display leading-[0.86] mb-8"
            style={{ fontSize: "clamp(64px, 8vw, 116px)", color: "#FDFBF8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {["YOUR ENTIRE", "FRANCHISE", "NETWORK."].map((line, i) => (
              <motion.span
                key={line}
                className="block"
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
            className="text-[18px] leading-relaxed text-white/60 mb-10 max-w-xl"
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
            <Link href="/early-access">
              <Button variant="primary" size="lg">
                Join the Waitlist <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/executive-circle/events">
              <Button variant="ghost" size="lg" className="font-sans-ui text-white/70 hover:text-white">
                Join the Conversation →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
