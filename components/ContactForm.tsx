"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const services = [
  "Infrared Sauna",
  "Dry Sauna",
  "Cold Plunge",
  "Red Light Therapy",
  "IV Vitamin Infusions",
  "Lymphatic Drainage",
  "Facials",
  "Body Treatments",
  "Botox & Fillers",
  "Peptides",
  "Laser Hair Removal",
  "Membership Inquiry",
  "Gift Card",
  "General Question",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xkgwznle", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-sand-dark border-0 border-b border-mocha/20 py-3 px-0 font-sans font-light text-sm text-mocha placeholder-muted/50 focus:outline-none focus:border-terra transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <p className="font-serif font-light italic text-4xl text-terra mb-4">Thank you.</p>
        <p className="font-sans font-light text-sm text-muted">We'll be in touch soon to confirm your session.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="label block mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="label block mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="label block mb-2">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="label block mb-2">I'm interested in</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} bg-sand-dark cursor-pointer`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label block mb-2">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your goals, questions, or preferred appointment times..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="font-sans font-light text-xs text-red-500">Something went wrong. Please try again or reach out via Instagram.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
