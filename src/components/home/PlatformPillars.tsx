"use client";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    color: "#C8921A",
    title: "Visibility",
    body: "Every location, every campaign, every dollar — visible from one screen. No more waiting for weekly reports or chasing field managers for updates.",
  },
  {
    number: "02",
    color: "#1A6478",
    title: "Control",
    body: "Set the rules once. Brand standards, approval workflows, spend limits — enforced automatically across every location in your network.",
  },
  {
    number: "03",
    color: "#2EA5A0",
    title: "Intelligence",
    body: "Surface what matters. AI-driven anomaly detection, performance benchmarking, and demand forecasting — built for franchise operating rhythms.",
  },
  {
    number: "04",
    color: "#D84F18",
    title: "Confidence",
    body: "Make decisions with data, not assumptions. Sova gives your leadership team the clarity to invest, expand, and operate without second-guessing.",
  },
];

export function PlatformPillars() {
  return (
    <section className="py-24 bg-[#EDE9E3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left */}
          <div>
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
              The Sova Advantage
            </div>
            <h2 className="font-display text-[52px] sm:text-[60px] text-[#1C2B4A] leading-[0.92]">
              FOUR<br />PILLARS.
            </h2>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-[rgba(28,43,74,0.08)]"
              >
                <div className="font-display text-[40px] leading-none mb-3" style={{ color: p.color }}>
                  {p.number}
                </div>
                <div className="font-display text-[24px] text-[#1C2B4A] mb-3">{p.title}</div>
                <p className="font-sans-ui text-[13px] leading-relaxed text-[#4A5568]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
