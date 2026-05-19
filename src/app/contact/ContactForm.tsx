"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", message: "", source: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "font-sans-ui w-full rounded-sm border border-[rgba(28,43,74,0.15)] bg-[#FDFBF8] px-4 py-3 text-sm text-[#1C2B4A] placeholder-[#718096] focus:outline-none focus:border-[#1A6478] transition-colors";
  const labelClass = "font-sans-ui block text-[11px] font-semibold tracking-[0.12em] text-[#1C2B4A] uppercase mb-2";

  if (submitted) {
    return (
      <div className="py-12">
        <div className="rule-gold mb-6" />
        <h3 className="font-display text-[36px] text-[#1C2B4A] mb-4">MESSAGE RECEIVED</h3>
        <p className="text-base text-[#4A5568]" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
          Thank you for reaching out. A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name <span className="text-[#D84F18]">*</span></label>
          <input id="name" name="name" type="text" required placeholder="Jean Dupont" value={form.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company <span className="text-[#D84F18]">*</span></label>
          <input id="company" name="company" type="text" required placeholder="Maple Group Inc." value={form.company} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>Email <span className="text-[#D84F18]">*</span></label>
          <input id="email" name="email" type="email" required placeholder="you@company.ca" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone <span className="normal-case font-normal text-[#718096]">(optional)</span></label>
          <input id="phone" name="phone" type="tel" placeholder="416-555-0100" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message <span className="text-[#D84F18]">*</span></label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your franchise network and what you are looking to solve." value={form.message} onChange={handleChange} className={inputClass + " resize-none"} />
      </div>
      <div>
        <label htmlFor="source" className={labelClass}>How did you hear about Sova?</label>
        <select id="source" name="source" value={form.source} onChange={handleChange} className={inputClass}>
          <option value="">Select an option</option>
          <option value="search">Search engine</option>
          <option value="linkedin">LinkedIn</option>
          <option value="cfa">Canadian Franchise Association</option>
          <option value="referral">Referral from a colleague</option>
          <option value="event">Industry event</option>
          <option value="press">Press or media</option>
          <option value="other">Other</option>
        </select>
      </div>
      <Button type="submit" variant="dark" size="lg">Send Message</Button>
      <p className="font-sans-ui text-xs text-[#718096]">We typically respond within one business day.</p>
    </form>
  );
}
