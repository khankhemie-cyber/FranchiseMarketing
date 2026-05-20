"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NODES = [
  { id: "hq",        label: "Head Office",    sub: "Brand + Strategy",    color: "#C8921A",  angle: 270, r: 160 },
  { id: "campaigns", label: "Campaigns",      sub: "1,300+ active",       color: "#1A6478",  angle: 330, r: 160 },
  { id: "analytics", label: "Analytics",      sub: "Real-time",           color: "#2EA5A0",  angle: 30,  r: 160 },
  { id: "franchisee",label: "Franchisees",    sub: "76,000+ locations",   color: "#D84F18",  angle: 90,  r: 160 },
  { id: "crm",       label: "CRM & Dev",      sub: "Pipeline management", color: "#C8921A",  angle: 150, r: 160 },
  { id: "ai",        label: "AI Layer",       sub: "Predictive insights", color: "#1A6478",  angle: 210, r: 160 },
];

function toXY(angle: number, r: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CX = 220, CY = 220, R_OUTER = 160;

export function NetworkDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#EDE9E3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — diagram */}
          <div ref={ref} className="flex items-center justify-center">
            <div className="relative">
              <svg width="440" height="440" viewBox="0 0 440 440" className="max-w-full">
                {/* Outer ring */}
                <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="rgba(28,43,74,0.06)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx={CX} cy={CY} r={R_OUTER * 0.6} fill="none" stroke="rgba(28,43,74,0.04)" strokeWidth="1" />

                {/* Connection lines */}
                {NODES.map((node, i) => {
                  const { x, y } = toXY(node.angle, R_OUTER, CX, CY);
                  return (
                    <motion.line
                      key={node.id}
                      x1={CX} y1={CY} x2={x} y2={y}
                      stroke={node.color}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    />
                  );
                })}

                {/* Animated data pulses */}
                {inView && NODES.map((node, i) => {
                  const { x, y } = toXY(node.angle, R_OUTER, CX, CY);
                  return (
                    <motion.circle
                      key={`pulse-${node.id}`}
                      r="3"
                      fill={node.color}
                      initial={{ cx: CX, cy: CY, opacity: 0 }}
                      animate={{
                        cx: [CX, x, CX],
                        cy: [CY, y, CY],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                {/* Outer nodes */}
                {NODES.map((node, i) => {
                  const { x, y } = toXY(node.angle, R_OUTER, CX, CY);
                  return (
                    <motion.g
                      key={node.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      style={{ transformOrigin: `${x}px ${y}px` }}
                    >
                      <circle cx={x} cy={y} r="28" fill="white" stroke={node.color} strokeWidth="1.5"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(28,43,74,0.12))" }} />
                      <circle cx={x} cy={y} r="22" fill={node.color} fillOpacity="0.1" />
                      {/* Label */}
                      <text x={x} y={y - 2} textAnchor="middle" dominantBaseline="middle"
                        fill={node.color} fontSize="7.5" fontWeight="700" fontFamily="Inter, system-ui"
                        letterSpacing="0.5">
                        {node.label.toUpperCase().split(" ")[0]}
                      </text>
                      <text x={x} y={y + 9} textAnchor="middle" dominantBaseline="middle"
                        fill={node.color} fontSize="6.5" fontWeight="500" fontFamily="Inter, system-ui">
                        {node.label.split(" ").slice(1).join(" ").toUpperCase() || ""}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Center hub */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                >
                  <circle cx={CX} cy={CY} r="44" fill="#1C2B4A"
                    style={{ filter: "drop-shadow(0 8px 24px rgba(28,43,74,0.35))" }} />
                  <circle cx={CX} cy={CY} r="44" fill="none" stroke="#C8921A" strokeWidth="1" strokeOpacity="0.5" />
                  <motion.circle cx={CX} cy={CY} r="52" fill="none" stroke="#C8921A" strokeWidth="0.5" strokeOpacity="0.2"
                    animate={{ r: [48, 58, 48] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x={CX} y={CY - 6} textAnchor="middle" fill="white" fontSize="11" fontWeight="700"
                    fontFamily="'Bebas Neue', sans-serif" letterSpacing="2">SOVA</text>
                  <text x={CX} y={CY + 9} textAnchor="middle" fill="rgba(200,146,26,0.8)" fontSize="7"
                    fontFamily="Inter, system-ui" letterSpacing="1">PLATFORM</text>
                </motion.g>
              </svg>
            </div>
          </div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
              Connected Platform
            </div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] text-[#1C2B4A] leading-[0.9] mb-6">
              EVERY MODULE.<br />ONE ECOSYSTEM.
            </h2>
            <div className="rule-gold mb-8" />
            <p className="text-[17px] leading-relaxed text-[#4A5568] mb-10" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Unlike siloed tools, every Sova module shares a single data layer. A campaign launched in the Campaign Engine flows into Analytics, triggers CRM actions, and updates field performance — automatically.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {NODES.map((n) => (
                <div key={n.id} className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-[rgba(28,43,74,0.07)]">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: n.color }} />
                  <div>
                    <div className="font-sans-ui text-[12px] font-semibold text-[#1C2B4A]">{n.label}</div>
                    <div className="font-sans-ui text-[10px] text-[#718096]">{n.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
