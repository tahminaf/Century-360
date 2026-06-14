"use client";
import { useState } from "react";
import Link from "next/link";

const saunaServices = [
  {
    name: "Infrared Sauna",
    tagline: "Detox. Relax. Rejuvenate.",
    desc: "Infrared saunas use light to heat the body directly, penetrating deeper into tissue than traditional saunas. Sessions promote circulation, reduce inflammation, aid in muscle recovery, and help eliminate toxins through deep sweat.",
    benefits: ["Detoxifies the body", "Relaxes the mind", "Improves circulation", "Reduces muscle soreness", "Supports weight management"],
    duration: "30 or 45 min",
  },
  {
    name: "Dry Sauna",
    tagline: "Deep heat. Total release.",
    desc: "Our traditional dry sauna delivers the classic high-heat experience at temperatures between 160–200°F. The intense heat opens pores, boosts cardiovascular health, and creates a deep sense of calm.",
    benefits: ["Cardiovascular support", "Skin cleansing", "Stress relief", "Immune boost", "Deep relaxation"],
    duration: "20 or 40 min",
  },
  {
    name: "Cold Plunge",
    tagline: "The ultimate reset.",
    desc: "Contrast therapy at its most powerful. Our cold plunge pool is maintained at 50–55°F, triggering a rush of endorphins, reducing inflammation, and accelerating muscle recovery. Pair it with sauna for the full thermal circuit.",
    benefits: ["Reduces inflammation", "Boosts endorphins", "Accelerates recovery", "Improves alertness", "Strengthens resilience"],
    duration: "3–10 min",
  },
  {
    name: "Red Light Therapy",
    tagline: "Heal from the inside out.",
    desc: "Low-level red and near-infrared light stimulates cellular energy production, promoting skin rejuvenation, collagen synthesis, pain relief, and recovery. A non-invasive therapy backed by decades of research.",
    benefits: ["Stimulates collagen", "Reduces inflammation", "Accelerates healing", "Improves skin tone", "Enhances mood"],
    duration: "20 min",
  },
];

const spaServices = [
  {
    name: "Facials",
    tagline: "Glow, restored.",
    desc: "Our licensed aestheticians customize every facial to your skin type and concern — from hydration and brightening to anti-aging and acne management. We use professional-grade products to deliver visible, lasting results.",
    benefits: ["Deep cleansing", "Hydration boost", "Even skin tone", "Anti-aging support", "Relaxation"],
    duration: "60 or 90 min",
  },
  {
    name: "Body Treatments",
    tagline: "Head-to-toe renewal.",
    desc: "Luxurious body scrubs, wraps, and massage therapies designed to exfoliate, nourish, and restore your skin. Each treatment is tailored to your needs, leaving you soft, glowing, and completely renewed.",
    benefits: ["Exfoliation", "Deep moisturization", "Skin smoothing", "Detoxification", "Full-body relaxation"],
    duration: "60 or 90 min",
  },
  {
    name: "Botox & Fillers",
    tagline: "Subtle. Natural. You.",
    desc: "Our medical team administers Botox and dermal fillers with a precise, conservative approach — enhancing your natural features, never masking them. From fine lines to volume restoration, results speak for themselves.",
    benefits: ["Smooths fine lines", "Restores volume", "Natural results", "Quick recovery", "Expert precision"],
    duration: "30–60 min",
  },
  {
    name: "Peptides",
    tagline: "Longevity from within.",
    desc: "Advanced peptide therapies support everything from tissue repair and hormone regulation to cognitive function and anti-aging. Administered by our medical team, these protocols are tailored to your health goals.",
    benefits: ["Tissue regeneration", "Hormone support", "Anti-aging", "Cognitive clarity", "Metabolic health"],
    duration: "Varies by protocol",
  },
  {
    name: "IV Vitamin Infusions",
    tagline: "Nourish at the cellular level.",
    desc: "Skip the digestive tract. IV vitamin drips deliver nutrients, hydration, and antioxidants directly into your bloodstream for maximum absorption. We offer targeted formulas for energy, immunity, beauty, and recovery.",
    benefits: ["100% nutrient absorption", "Instant hydration", "Energy boost", "Immune support", "Skin radiance"],
    duration: "45–60 min",
  },
  {
    name: "Lymphatic Drainage",
    tagline: "Release. Detox. Flow.",
    desc: "Manual lymphatic drainage uses gentle, rhythmic techniques to stimulate lymph flow — reducing puffiness, supporting detoxification, and promoting a deep sense of calm. Especially effective post-sauna or post-procedure.",
    benefits: ["Reduces puffiness", "Supports detox", "Improves immunity", "Post-surgical recovery", "Deep relaxation"],
    duration: "60 min",
  },
  {
    name: "Laser Hair Removal",
    tagline: "Smooth, permanently.",
    desc: "Our advanced laser hair removal system targets hair follicles with precision, delivering permanent reduction across all skin types. Safe, effective, and virtually painless — say goodbye to razors for good.",
    benefits: ["Permanent reduction", "All skin types", "Precision targeting", "Minimal discomfort", "No downtime"],
    duration: "15–60 min (area dependent)",
  },
];

function ServiceCard({ s }: { s: typeof saunaServices[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-mocha/10 py-8">
      <div
        className="flex items-start justify-between cursor-pointer group"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="font-serif font-light text-3xl text-mocha group-hover:text-terra transition-colors">{s.name}</h3>
          <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mt-1">{s.tagline}</p>
        </div>
        <div className="flex items-center gap-6 mt-2 shrink-0">
          <span className="font-serif font-light text-2xl text-terra transition-transform duration-200" style={{ transform: expanded ? "rotate(45deg)" : "none" }}>+</span>
        </div>
      </div>
      {expanded && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="font-sans font-light text-sm text-muted leading-relaxed">{s.desc}</p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-xs py-3 px-6">Book This Service</Link>
            </div>
          </div>
          <div>
            <p className="label mb-4">Benefits</p>
            <ul className="space-y-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 font-sans font-light text-xs text-muted">
                  <span className="w-1 h-1 rounded-full bg-terra shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AmenitiesPage() {
  const [tab, setTab] = useState<"sauna" | "spa">("sauna");

  return (
    <>
      <section className="bg-mocha pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label text-terra mb-8">Everything We Offer</p>
          <h1 className="font-serif font-light text-sand leading-[0.92]" style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            Our<br /><em className="text-terra italic">amenities.</em>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-px mb-12 max-w-sm">
            <button
              onClick={() => setTab("sauna")}
              className={`flex-1 py-3 font-sans font-light text-xs tracking-widest uppercase transition-colors duration-200 ${
                tab === "sauna" ? "bg-mocha text-sand" : "bg-sand-dark text-muted hover:bg-mocha/10"
              }`}
            >
              Sauna &amp; Thermal
            </button>
            <button
              onClick={() => setTab("spa")}
              className={`flex-1 py-3 font-sans font-light text-xs tracking-widest uppercase transition-colors duration-200 ${
                tab === "spa" ? "bg-mocha text-sand" : "bg-sand-dark text-muted hover:bg-mocha/10"
              }`}
            >
              Spa &amp; Aesthetic
            </button>
          </div>

          {tab === "sauna" && (
            <div>
              <p className="font-sans font-light text-sm text-muted leading-relaxed max-w-xl mb-10">
                Our thermal circuit is the heart of Century 360 — a carefully curated sequence of heat, cold, and light designed to detox, recover, and renew.
              </p>
              {saunaServices.map((s) => <ServiceCard key={s.name} s={s} />)}
            </div>
          )}

          {tab === "spa" && (
            <div>
              <p className="font-sans font-light text-sm text-muted leading-relaxed max-w-xl mb-10">
                From expert facials to IV infusions and laser treatments, our spa and aesthetic offerings deliver results-driven care with a luxurious touch.
              </p>
              {spaServices.map((s) => <ServiceCard key={s.name} s={s} />)}
            </div>
          )}
        </div>
      </section>

      <section className="bg-terra section-pad px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label text-cream/60 mb-6">Ready to experience it?</p>
          <h2 className="font-serif font-light text-5xl text-cream leading-tight mb-8">
            Book your visit<br /><em className="italic">today.</em>
          </h2>
          <Link href="/contact" className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-mocha-light transition-colors">
            Reserve Now
          </Link>
        </div>
      </section>
    </>
  );
}
