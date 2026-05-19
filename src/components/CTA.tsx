"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1120]" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(200,149,32,0.12) 0%, rgba(42,157,143,0.06) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated border ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C89520]/[0.06] spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#2A9D8F]/[0.04] pointer-events-none" style={{ animation: "spin-slow 25s linear infinite reverse" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center glow-gold"
              style={{ background: "linear-gradient(135deg, #C89520 0%, #E0AB30 100%)" }}
            >
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <path d="M5 16 C10 8, 17 14, 14 20 C11 14, 7 13, 5 16Z" fill="#080C18" />
                <path d="M35 16 C30 8, 23 14, 26 20 C29 14, 33 13, 35 16Z" fill="#080C18" />
                <circle cx="14" cy="22" r="5.5" fill="none" stroke="#080C18" strokeWidth="1.8" />
                <circle cx="26" cy="22" r="5.5" fill="none" stroke="#080C18" strokeWidth="1.8" />
                <path d="M14 28 L20 32 L26 28" fill="none" stroke="#080C18" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h2
            className="text-5xl sm:text-7xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            READY TO REPLACE THE<br />
            <span className="gradient-text-gold">CHAOS?</span>
          </h2>

          <p className="text-[#9CA3AF] text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the pilot cohort. We&apos;re accepting 2–4 Canadian franchise brands who want to be first — and want to shape what gets built.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="font-bold tracking-wide shadow-[0_0_40px_rgba(200,149,32,0.4)] hover:shadow-[0_0_60px_rgba(200,149,32,0.6)] text-base px-8 py-4"
            >
              Request Early Access
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 py-4">
              <Calendar size={16} />
              Book a 20-minute call
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#6B7280]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              Canadian-hosted. Your data never leaves Canada.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89520]" />
              No long-term contract required for pilot.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B6070]" />
              CAD invoicing. CFA-aligned.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
