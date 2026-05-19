"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Modules", href: "#modules" },
  { label: "Who We Serve", href: "#who" },
  { label: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#080C18]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(200,149,32,0.05)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <defs>
                    <linearGradient id="owlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C89520" />
                      <stop offset="100%" stopColor="#E0AB30" />
                    </linearGradient>
                  </defs>
                  {/* Owl eyes logo simplified */}
                  <path d="M5 16 C10 8, 17 14, 14 20 C11 14, 7 13, 5 16Z" fill="url(#owlGrad)" />
                  <path d="M35 16 C30 8, 23 14, 26 20 C29 14, 33 13, 35 16Z" fill="url(#owlGrad)" />
                  <circle cx="14" cy="22" r="5.5" fill="none" stroke="url(#owlGrad)" strokeWidth="1.8" />
                  <circle cx="26" cy="22" r="5.5" fill="none" stroke="url(#owlGrad)" strokeWidth="1.8" />
                  <path d="M14 28 L20 32 L26 28" fill="none" stroke="url(#owlGrad)" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                className="text-xl font-bold tracking-[0.15em] text-white group-hover:text-[#C89520] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                SOVA
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-md hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Sign in
              </a>
              <Button size="sm" className="font-semibold tracking-wide">
                Request Access →
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-[#9CA3AF] hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D1120]/95 backdrop-blur-xl border-b border-white/[0.06] p-4"
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <Button className="w-full" size="md">
                  Request Early Access →
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
