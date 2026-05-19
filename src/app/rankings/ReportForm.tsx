'use client';

import { useState } from 'react';

export function ReportForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-10 h-0.5 bg-[#C8921A] mx-auto mb-5" />
        <p className="font-display text-[24px] text-[#1C2B4A] mb-2">REPORT ON ITS WAY</p>
        <p className="font-sans-ui text-sm text-[#4A5568]">
          Check your inbox. The full 2025 Canada Franchise Rankings report will arrive shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@brand.ca"
        className="font-sans-ui flex-1 text-sm text-[#1C2B4A] bg-[#FDFBF8] border border-[rgba(28,43,74,0.15)] rounded-sm px-4 py-2.5 placeholder:text-[#718096] focus:outline-none focus:border-[#C8921A] transition-colors"
      />
      <button
        type="submit"
        className="font-sans-ui text-sm font-semibold tracking-wide bg-[#1C2B4A] text-white px-7 py-2.5 rounded-sm hover:bg-[#263d6b] active:scale-[0.98] transition-all whitespace-nowrap"
      >
        Request Full Report
      </button>
    </form>
  );
}
