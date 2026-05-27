"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type ConsentState = "accepted" | "necessary" | "pending";

const STORAGE_KEY = "sova_cookie_consent";

export function CookieConsent() {
  const [state, setState] = useState<ConsentState | null>(null);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: true });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "necessary") {
      setState(stored);
    } else {
      setState("pending");
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setState("accepted");
  }

  function necessary() {
    localStorage.setItem(STORAGE_KEY, "necessary");
    setState("necessary");
  }

  function savePrefs() {
    const value = prefs.analytics || prefs.marketing ? "accepted" : "necessary";
    localStorage.setItem(STORAGE_KEY, value);
    setState(value);
  }

  if (state !== "pending") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-end justify-center pointer-events-none"
      aria-live="polite"
    >
      {/* Backdrop — subtle, doesn't block scrolling */}
      <div className="absolute inset-0 bg-black/20 pointer-events-auto" />

      <div
        className="relative pointer-events-auto w-full max-w-2xl mx-4 sm:mx-6 mb-6 rounded-xl overflow-hidden"
        style={{
          background: "#FDFBF8",
          border: "1px solid rgba(28,43,74,0.12)",
          borderTop: "3px solid #C8921A",
          boxShadow: "0 24px 80px rgba(28,43,74,0.18), 0 4px 16px rgba(28,43,74,0.08)",
        }}
      >
        {!showPrefs ? (
          /* ── Main banner ── */
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-sans-ui text-[11px] font-semibold tracking-[0.18em] text-[#C8921A] uppercase mb-1">
                  Cookie Preferences
                </p>
                <h2 className="font-display text-[22px] text-[#1C2B4A] leading-tight">
                  WE USE COOKIES.
                </h2>
              </div>
              <button
                onClick={necessary}
                aria-label="Close and accept necessary cookies only"
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(28,43,74,0.06)] transition-colors"
              >
                <X size={16} color="#718096" />
              </button>
            </div>

            <p className="font-sans-ui text-[13px] leading-relaxed text-[#4A5568] mb-6">
              Sova uses cookies to keep the site working, understand how visitors use it, and occasionally
              personalise content. We respect your privacy under{" "}
              <Link href="/legal/privacy" className="text-[#1A6478] underline hover:text-[#C8921A] transition-colors">
                PIPEDA
              </Link>
              . You can accept all, choose only what&rsquo;s necessary, or customise your preferences.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={accept}
                className="font-sans-ui text-[13px] font-semibold bg-[#1C2B4A] text-white px-5 py-2.5 rounded-sm hover:bg-[#263d6b] transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={necessary}
                className="font-sans-ui text-[13px] font-semibold bg-transparent text-[#1C2B4A] px-5 py-2.5 rounded-sm border border-[rgba(28,43,74,0.2)] hover:border-[#1C2B4A] transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={() => setShowPrefs(true)}
                className="font-sans-ui text-[13px] text-[#718096] hover:text-[#1C2B4A] px-3 py-2.5 transition-colors underline"
              >
                Customise
              </button>
            </div>
          </div>
        ) : (
          /* ── Preferences panel ── */
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-[22px] text-[#1C2B4A] leading-tight">COOKIE SETTINGS</h2>
              <button
                onClick={() => setShowPrefs(false)}
                aria-label="Back"
                className="font-sans-ui text-[12px] text-[#718096] hover:text-[#1C2B4A] transition-colors"
              >
                ← Back
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary — always on */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-[#F5F1EB]">
                <div>
                  <p className="font-sans-ui text-[13px] font-semibold text-[#1C2B4A] mb-0.5">Necessary</p>
                  <p className="font-sans-ui text-[12px] text-[#718096] leading-snug">
                    Required for the site to function. Cannot be disabled.
                  </p>
                </div>
                <div className="shrink-0 mt-0.5">
                  <span className="font-sans-ui text-[11px] font-semibold text-[#2EA5A0] tracking-wide">Always on</span>
                </div>
              </div>

              {/* Analytics */}
              <label className="flex items-start justify-between gap-4 p-4 rounded-lg border border-[rgba(28,43,74,0.08)] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors">
                <div>
                  <p className="font-sans-ui text-[13px] font-semibold text-[#1C2B4A] mb-0.5">Analytics</p>
                  <p className="font-sans-ui text-[12px] text-[#718096] leading-snug">
                    Helps us understand how visitors interact with the site so we can improve it.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="shrink-0 mt-1 w-4 h-4 accent-[#C8921A] cursor-pointer"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-start justify-between gap-4 p-4 rounded-lg border border-[rgba(28,43,74,0.08)] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors">
                <div>
                  <p className="font-sans-ui text-[13px] font-semibold text-[#1C2B4A] mb-0.5">Marketing</p>
                  <p className="font-sans-ui text-[12px] text-[#718096] leading-snug">
                    Used to personalise content and measure the effectiveness of campaigns.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="shrink-0 mt-1 w-4 h-4 accent-[#C8921A] cursor-pointer"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={savePrefs}
                className="font-sans-ui text-[13px] font-semibold bg-[#C8921A] text-white px-5 py-2.5 rounded-sm hover:bg-[#B07D14] transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={accept}
                className="font-sans-ui text-[13px] text-[#718096] hover:text-[#1C2B4A] px-3 py-2.5 transition-colors underline"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
