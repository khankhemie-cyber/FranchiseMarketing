'use client';

import { useState } from 'react';

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    brand: '',
    email: '',
    locations: '',
    statement: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.1)] rounded-xl p-10 text-center">
        <div className="w-10 h-0.5 bg-[#C8921A] mx-auto mb-6" />
        <p className="font-display text-[28px] text-[#1C2B4A] mb-3">APPLICATION RECEIVED</p>
        <p className="font-sans-ui text-sm text-[#4A5568]">
          We review applications monthly and will be in touch within two weeks.
        </p>
      </div>
    );
  }

  const inputClass =
    'font-sans-ui w-full text-sm text-[#1C2B4A] bg-[#FDFBF8] border border-[rgba(28,43,74,0.15)] rounded-sm px-4 py-2.5 placeholder:text-[#718096] focus:outline-none focus:border-[#C8921A] transition-colors';

  const labelClass = 'font-sans-ui text-[11px] font-semibold tracking-[0.12em] text-[#4A5568] uppercase block mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="title" className={labelClass}>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={form.title}
            onChange={handleChange}
            placeholder="VP of Marketing"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="brand" className={labelClass}>Brand / Company</label>
          <input
            id="brand"
            name="brand"
            type="text"
            required
            value={form.brand}
            onChange={handleChange}
            placeholder="Acme Franchise Group"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Work Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@acmefranchise.ca"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="locations" className={labelClass}>Number of Locations</label>
        <select
          id="locations"
          name="locations"
          required
          value={form.locations}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select range</option>
          <option value="10-24">10–24</option>
          <option value="25-49">25–49</option>
          <option value="50-99">50–99</option>
          <option value="100-249">100–249</option>
          <option value="250+">250+</option>
        </select>
      </div>

      <div>
        <label htmlFor="statement" className={labelClass}>Brief Statement of Interest</label>
        <textarea
          id="statement"
          name="statement"
          required
          rows={5}
          value={form.statement}
          onChange={handleChange}
          placeholder="What brings you to the Executive Circle, and what would you hope to contribute or take away from the community?"
          className={inputClass + ' resize-none'}
        />
      </div>

      <div className="flex items-start gap-6 pt-2">
        <button
          type="submit"
          className="font-sans-ui text-sm font-semibold tracking-wide bg-[#1C2B4A] text-white px-8 py-3 rounded-sm hover:bg-[#263d6b] active:scale-[0.98] transition-all"
        >
          Submit Application
        </button>
        <p className="font-sans-ui text-xs text-[#718096] leading-relaxed pt-1">
          Applications are reviewed monthly. We&rsquo;ll be in touch within 2 weeks.
        </p>
      </div>
    </form>
  );
}
