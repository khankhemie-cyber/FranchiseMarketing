"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EventCallout() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
      {/* Toronto skyline photograph */}
      <img
        src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80"
        alt="Toronto at night"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Deep gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(10,16,28,0.96) 0%, rgba(10,16,28,0.88) 50%, rgba(10,16,28,0.70) 100%)" }}
      />
      {/* Gold accent line on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8921A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid lg:grid-cols-[1fr_auto] gap-10 items-center"
        >
          {/* Left — event identity */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase">
                Executive Circle · Roundtable 01
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-sans-ui text-[11px] text-white/35 uppercase tracking-wider">Invite Only</span>
            </div>

            <h2 className="font-display text-[clamp(40px,6vw,76px)] text-white leading-[0.88] mb-5">
              THE SYSTEMS<br />READINESS AUDIT.
            </h2>

            <p className="text-[17px] sm:text-[19px] text-white/55 leading-relaxed max-w-xl mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Is your franchise operationally ready to scale — and what&rsquo;s standing in the way? A half-day in Toronto with the executives building Canada&rsquo;s largest franchise systems.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <span className="font-sans-ui text-[14px] text-white/55">July 25, 2026</span>
              <span className="w-px h-4 bg-white/15 hidden sm:block" />
              <span className="font-sans-ui text-[14px] text-white/55">Toronto, Ontario</span>
              <span className="w-px h-4 bg-white/15 hidden sm:block" />
              <span className="font-sans-ui text-[14px] text-white/55">$150 per attendee</span>
            </div>
          </div>

          {/* Right — CTA */}
          <div className="lg:text-right">
            <Link
              href="/executive-circle/events"
              className="inline-flex items-center gap-2.5 font-sans-ui text-[14px] font-semibold bg-[#C8921A] text-white px-8 py-4 rounded-sm hover:bg-[#B07D14] transition-colors"
            >
              Request Invitation <ArrowRight size={15} />
            </Link>
            <p className="font-sans-ui text-[12px] font-semibold text-[#C8921A] mt-3 lg:text-right">
              No cost to apply
            </p>
            <p className="font-sans-ui text-[11px] text-white/30 mt-1 lg:text-right">
              Limited seats · Applications reviewed weekly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
