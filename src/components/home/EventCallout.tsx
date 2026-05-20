"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Lock } from "lucide-react";

export function EventCallout() {
  return (
    <section className="py-6 bg-[#1C2B4A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/executive-circle/events" className="group block">
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 rounded-xl border border-[#C8921A]/25 hover:border-[#C8921A]/50 transition-colors"
              style={{ background: "rgba(200,146,26,0.06)" }}
            >
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(200,146,26,0.15)" }}
                >
                  <Calendar size={18} className="text-[#C8921A]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#C8921A] uppercase">
                      Executive Circle · Roundtable 01
                    </span>
                    <span className="inline-flex items-center gap-1 font-sans-ui text-[10px] text-white/35">
                      <Lock size={9} /> Invite Only
                    </span>
                  </div>
                  <p className="font-display text-[18px] sm:text-[20px] text-white leading-tight">
                    The Systems Readiness Audit
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1.5 font-sans-ui text-[12px] text-white/50">
                      <Calendar size={11} /> July 25, 2026
                    </span>
                    <span className="flex items-center gap-1.5 font-sans-ui text-[12px] text-white/50">
                      <MapPin size={11} /> Toronto, ON
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 font-sans-ui text-[13px] font-semibold text-[#C8921A] group-hover:gap-3 transition-all shrink-0">
                Request to Attend <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
