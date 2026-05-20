"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="py-28 bg-[#EDE9E3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C2B4A] rounded-2xl px-10 py-16 md:px-16 text-center relative overflow-hidden"
        >
          {/* Background radial */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,146,26,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-5">
              Get Started
            </div>
            <h2 className="font-display text-[52px] sm:text-[68px] text-white leading-[0.92] mb-6">
              READY TO SEE<br />YOUR NETWORK<br />CLEARLY?
            </h2>
            <p className="text-[17px] leading-relaxed text-white/55 mb-10 max-w-lg mx-auto" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Join early access and be among the first Canadian franchise brands to build on Sova — with founder-level pricing locked in.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/early-access">
                <Button variant="primary" size="lg">
                  Join the Waitlist
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="text-white/70 hover:text-white">
                  See Pricing →
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
