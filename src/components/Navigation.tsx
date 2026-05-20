"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Executive Circle", href: "/executive-circle" },
  { label: "Rankings", href: "/rankings" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#EDE9E3]/95 backdrop-blur-md border-b border-[rgba(28,43,74,0.08)] shadow-[0_1px_0_rgba(28,43,74,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18" style={{ height: "72px" }}>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/sova-logo.png"
                alt="Sova"
                className="h-10 w-auto"
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-sans-ui text-[13px] font-medium px-4 py-2 rounded-sm transition-colors duration-150",
                    pathname === item.href
                      ? "text-[#C8921A]"
                      : "text-[#4A5568] hover:text-[#1C2B4A]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/pricing"
                className="font-sans-ui text-[13px] font-medium text-[#4A5568] hover:text-[#1C2B4A] transition-colors"
              >
                Pricing
              </Link>
              <Link href="/early-access">
                <Button size="sm" variant="dark">Join the Waitlist</Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[#1C2B4A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#EDE9E3]/98 backdrop-blur-md border-b border-[rgba(28,43,74,0.08)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans-ui text-sm font-medium text-[#4A5568] hover:text-[#1C2B4A] py-3 border-b border-[rgba(28,43,74,0.06)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/pricing" className="font-sans-ui text-sm font-medium text-[#4A5568] py-3 border-b border-[rgba(28,43,74,0.06)]">
                Pricing
              </Link>
              <div className="pt-4">
                <Link href="/early-access">
                  <Button variant="dark" size="md" className="w-full justify-center">Join the Waitlist</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
