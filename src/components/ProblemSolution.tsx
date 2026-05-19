"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

const PROBLEMS = [
  { text: "Head office creates assets. Franchisees go off-brand anyway.", bad: true },
  { text: "Data lives across POS, social, spreadsheets, and email chains.", bad: true },
  { text: "US-built platforms that ignore Canadian compliance requirements.", bad: true },
  { text: "No cross-location benchmarking or early warning system.", bad: true },
  { text: "Marketing ROI is unmeasurable at the local level.", bad: true },
];

const SOLUTIONS = [
  { text: "Brand-controlled campaigns activated by franchisees with one click.", bad: false },
  { text: "Single source of truth across every location in your network.", bad: false },
  { text: "Built in Canada, for Canada — bilingual, CFA-aligned, Canadian hosting.", bad: false },
  { text: "Location scorecards, network dashboards, and AI health scores.", bad: false },
  { text: "Full attribution from campaign to revenue at every location.", bad: false },
];

function AnimatedCard({ item, delay }: { item: { text: string; bad: boolean }; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: item.bad ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-200"
      style={{
        background: item.bad ? "rgba(212,89,42,0.04)" : "rgba(42,157,143,0.04)",
        borderColor: item.bad ? "rgba(212,89,42,0.15)" : "rgba(42,157,143,0.15)",
      }}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: item.bad ? "rgba(212,89,42,0.15)" : "rgba(42,157,143,0.15)" }}
      >
        {item.bad
          ? <X size={12} className="text-[#D4592A]" />
          : <Check size={12} className="text-[#2A9D8F]" />
        }
      </div>
      <p className="text-sm leading-relaxed" style={{ color: item.bad ? "#9CA3AF" : "#D1D5DB" }}>
        {item.text}
      </p>
    </motion.div>
  );
}

export function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(200,149,32,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="orange" className="mb-5">The Problem</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            A $133B INDUSTRY RUNNING ON<br />
            <span className="text-[#D4592A]">SPREADSHEETS AND EMAIL CHAINS.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            FranConnect, Rallio, and SOCi are American. None understand the Canadian market.
            No platform exists built specifically for Canadian franchise brands.
          </p>
        </motion.div>

        {/* Split comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-lg bg-[#D4592A]/10 border border-[#D4592A]/20">
                <span className="text-xs font-bold text-[#D4592A] tracking-widest uppercase">Today</span>
              </div>
              <div className="h-px flex-1 bg-[#D4592A]/10" />
            </div>
            <div className="space-y-3">
              {PROBLEMS.map((item, i) => (
                <AnimatedCard key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-lg bg-[#2A9D8F]/10 border border-[#2A9D8F]/20">
                <span className="text-xs font-bold text-[#2A9D8F] tracking-widest uppercase">With Sova</span>
              </div>
              <div className="h-px flex-1 bg-[#2A9D8F]/10" />
            </div>
            <div className="space-y-3">
              {SOLUTIONS.map((item, i) => (
                <AnimatedCard key={i} item={item} delay={i * 0.1 + 0.2} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl border border-[#C89520]/15 text-center"
          style={{ background: "linear-gradient(135deg, rgba(200,149,32,0.06) 0%, rgba(27,96,112,0.04) 100%)" }}
        >
          <p className="text-[#C89520] font-semibold text-lg mb-2">
            The result: franchise brands leave money on the table, lose brand consistency, and make operational decisions with incomplete data.
          </p>
          <p className="text-white font-bold text-xl">Sova exists to fix this.</p>
        </motion.div>
      </div>
    </section>
  );
}
