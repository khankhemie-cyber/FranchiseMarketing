"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    locations: "",
    role: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to API route / calendar integration
    setSubmitted(true);
  };

  const inputClass =
    "font-sans-ui w-full rounded-sm border border-[rgba(28,43,74,0.15)] bg-[#EDE9E3] px-4 py-3 text-sm text-[#1C2B4A] placeholder-[#718096] focus:outline-none focus:border-[#C8921A] focus:ring-1 focus:ring-[#C8921A] transition-colors";
  const labelClass =
    "font-sans-ui block text-[11px] font-semibold tracking-[0.12em] text-[#1C2B4A] uppercase mb-2";

  if (submitted) {
    return (
      <div className="py-12">
        <div className="rule-gold mb-6" />
        <h3 className="font-display text-[40px] text-[#1C2B4A] mb-4">
          YOU'RE BOOKED
        </h3>
        <p
          className="text-base text-[#4A5568] max-w-sm"
          style={{ fontFamily: "'Constantia', Georgia, serif" }}
        >
          A franchise specialist will reach out within one business day to
          confirm your demo time and send a calendar invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-[#D84F18]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Marie"
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-[#D84F18]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Tremblay"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Work Email <span className="text-[#D84F18]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@brand.ca"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Brand <span className="text-[#D84F18]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Northern Grounds Coffee"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Locations + Role */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="locations" className={labelClass}>
            Number of Locations <span className="text-[#D84F18]">*</span>
          </label>
          <select
            id="locations"
            name="locations"
            required
            value={form.locations}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select range</option>
            <option value="1-10">1 – 10</option>
            <option value="11-50">11 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">200+</option>
          </select>
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Your Role <span className="text-[#D84F18]">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            value={form.role}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select your role</option>
            <option value="cmo">CMO / VP Marketing</option>
            <option value="franchise-dev">Franchise Development</option>
            <option value="operations">Head Office Operations</option>
            <option value="franchisee">Franchisee</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Preferred time */}
      <div>
        <label htmlFor="preferredTime" className={labelClass}>
          Preferred Meeting Time{" "}
          <span className="normal-case font-normal tracking-normal text-[#718096]">
            (e.g. Tuesday afternoon ET)
          </span>
        </label>
        <input
          id="preferredTime"
          name="preferredTime"
          type="text"
          placeholder="Tuesday or Wednesday afternoon ET"
          value={form.preferredTime}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything else we should know?{" "}
          <span className="normal-case font-normal tracking-normal text-[#718096]">
            (optional)
          </span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Current tools, key pain points, priorities for the demo..."
          value={form.notes}
          onChange={handleChange}
          className={inputClass + " resize-none"}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Request My Demo
      </Button>
    </form>
  );
}
