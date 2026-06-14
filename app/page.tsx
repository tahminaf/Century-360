import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Century 360 | Spa & Sauna House — Restore. Reset. Renew.",
  description:
    "Century 360 Spa & Sauna House in Hicksville, NY. Infrared sauna, cold plunge, red light therapy, IV infusions, lymphatic drainage, facials & more. Book your session today.",
};

const services = [
  { num: "01", name: "Infrared Sauna", desc: "Deep heat therapy to promote circulation and eliminate toxins" },
  { num: "02", name: "Dry Sauna", desc: "Traditional high-heat sauna for full-body detox" },
  { num: "03", name: "Cold Plunge", desc: "Contrast therapy to reduce inflammation and accelerate recovery" },
  { num: "04", name: "Red Light Therapy", desc: "Cellular rejuvenation and skin renewal through photobiomodulation" },
  { num: "05", name: "IV Vitamin Infusions", desc: "Targeted wellness drips delivered directly to your bloodstream" },
  { num: "06", name: "Lymphatic Drainage", desc: "Manual therapy to detox, depuff, and restore flow" },
  { num: "07", name: "Facials", desc: "Customized treatments for your skin's unique needs" },
  { num: "08", name: "Body Treatments", desc: "Wraps, scrubs, and therapies for full-body renewal" },
  { num: "09", name: "Botox & Fillers", desc: "Expert cosmetic injectables for natural-looking results" },
  { num: "10", name: "Peptides", desc: "Advanced peptide therapies for longevity and vitality" },
  { num: "11", name: "Laser Hair Removal", desc: "Permanent hair reduction with precision laser technology" },
];

const pillars = [
  { word: "Detox.", sub: "Sweat out what no longer serves you." },
  { word: "Relax.", sub: "Slow down. Breathe. Be still." },
  { word: "Rejuvenate.", sub: "Leave renewed in body and mind." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-mocha flex flex-col justify-center py-16 px-6 overflow-hidden" style={{ minHeight: "520px" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, #C8947A 80px, #C8947A 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #C8947A 80px, #C8947A 81px)`,
          }}
        />
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn delay={0.15}>
            <p className="label text-terra mb-6">Hicksville, NY · Now Open</p>
          </FadeIn>
          <FadeIn delay={0.28}>
            <h1
              className="font-serif font-light text-sand leading-[0.92] mb-8"
              style={{ fontSize: "clamp(48px, 7vw, 100px)" }}
            >
              Restore.<br />
              <em className="text-terra">Reset.</em><br />
              Renew.
            </h1>
          </FadeIn>
          <FadeIn delay={0.44}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/contact" className="btn-primary">Book a Session</Link>
              <Link
                href="/amenities"
                className="btn-outline"
                style={{ borderColor: "rgba(250,245,238,0.3)", color: "rgba(250,245,238,0.6)" }}
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.6} className="absolute bottom-6 right-8 md:right-16">
          <p className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-sand/30">
            Everything, in balance.
          </p>
        </FadeIn>
      </section>

      {/* Pillars */}
      <section className="bg-sand-dark section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-mocha/10">
            {pillars.map((p, i) => (
              <FadeIn key={p.word} delay={i * 0.12}>
                <div className="bg-sand-dark px-10 py-12 h-full">
                  <p className="font-serif font-light italic text-5xl text-mocha mb-4">{p.word}</p>
                  <p className="font-sans font-light text-xs text-muted tracking-wide leading-relaxed">{p.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <p className="label mb-6">About Century 360</p>
                <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight mb-6">
                  A sanctuary built for <em className="text-terra italic">whole-body</em> wellness.
                </h2>
                <p className="font-sans font-light text-sm text-muted leading-relaxed mb-4">
                  Century 360 is Hicksville's premier spa and sauna house — a curated space where modern wellness meets timeless ritual. Whether you're here to sweat, recover, or simply exhale, every experience is designed to bring you back to balance.
                </p>
                <p className="font-sans font-light text-sm text-muted leading-relaxed mb-8">
                  From the warmth of our infrared and dry saunas to the precision of our aesthetic treatments, every offering at Century 360 is chosen with one purpose: to help you feel like your best self.
                </p>
                <Link href="/about" className="btn-outline">Our Story</Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.12}>
              <div className="bg-sand-dark h-80 md:h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif font-light italic text-6xl text-mocha/20">360°</p>
                  <p className="label mt-3 text-mocha/30">Whole-body wellness</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="section-pad bg-sand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <p className="label mb-4">Follow Along</p>
                <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
                  We're on <em className="text-terra italic">Instagram.</em>
                </h2>
              </div>
              <a
                href="https://www.instagram.com/century360sauna/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline self-start md:self-auto whitespace-nowrap"
              >
                @century360sauna ↗
              </a>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 py-4">
            {[
              { n: 1, href: "https://www.instagram.com/p/DYipdOwDetU/?img_index=1" },
              { n: 2, href: "https://www.instagram.com/p/DY5iA5Hv4Gp/" },
              { n: 3, href: "https://www.instagram.com/p/DZGr7bIjS_V/?img_index=1" },
              { n: 4, href: "https://www.instagram.com/p/DX11sDaDobn/" },
            ].map(({ n, href }, i) => (
              <FadeIn key={n} delay={i * 0.09}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden block"
                >
                  <Image
                    src={`/image${n}.png`}
                    alt={`Century 360 Instagram photo ${n}`}
                    width={800}
                    height={800}
                    className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-mocha section-pad" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="label text-terra mb-4">What We Offer</p>
                <h2 className="font-serif font-light text-5xl text-sand leading-tight">
                  Our <em className="italic">services</em>
                </h2>
              </div>
              <Link
                href="/amenities"
                className="btn-outline whitespace-nowrap self-start md:self-auto"
                style={{ borderColor: "rgba(200,148,122,0.4)", color: "#C8947A" }}
              >
                View All Amenities
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/5">
            {services.map((s, i) => (
              <FadeIn key={s.num} delay={Math.min(i * 0.07, 0.42)}>
                <div className="bg-mocha px-8 py-8 group hover:bg-mocha-light transition-colors duration-300 h-full">
                  <p className="font-serif font-light text-3xl text-terra/30 mb-4 group-hover:text-terra/60 transition-colors duration-300">{s.num}</p>
                  <p className="font-serif font-light text-xl text-sand mb-2">{s.name}</p>
                  <p className="font-sans font-light text-xs text-sand/40 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards & Membership */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mocha/10">
            <FadeIn direction="right">
              <div className="bg-sand-dark px-10 py-12 flex flex-col gap-6 h-full">
                <div>
                  <p className="label mb-4">Give the gift of wellness</p>
                  <h2 className="font-serif font-light text-4xl leading-tight mb-4">
                    The perfect <em className="text-terra italic">gift.</em>
                  </h2>
                  <p className="font-sans font-light text-xs text-muted leading-relaxed">
                    Redeemable on all services and memberships — available in any amount.
                  </p>
                </div>
                <Link href="/gift-cards" className="btn-primary self-start">Purchase a Gift Card</Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.12}>
              <div className="bg-terra px-10 py-12 flex flex-col gap-6 h-full">
                <div>
                  <p className="label text-cream/60 mb-4">Become a Member</p>
                  <h2 className="font-serif font-light text-4xl text-cream leading-tight mb-4">
                    Unlimited wellness,<br /><em className="italic">every month.</em>
                  </h2>
                  <p className="font-sans font-light text-xs text-cream/70 leading-relaxed">
                    One monthly rate. Unlimited access to core offerings. No per-visit fees.
                  </p>
                </div>
                <Link
                  href="/membership"
                  className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-mocha-light transition-colors duration-300 self-start"
                >
                  View Plans
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-sand-dark section-pad">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <p className="label mb-4 text-center">Find Us</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-12 text-center">
              We're in <em className="text-terra italic">Hicksville, NY.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-mocha/10">

            {/* Info panel */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="bg-sand-dark h-full px-8 py-10 flex flex-col gap-10">

                {/* Address */}
                <div>
                  <p className="label mb-3">Address</p>
                  <p className="font-serif font-light text-2xl text-mocha leading-snug">
                    350 S Broadway<br />Unit 17<br />Hicksville, NY 11801
                  </p>
                  <a
                    href="https://www.google.com/maps/place/350+S+Broadway+%2317,+Hicksville,+NY+11801/@40.7609423,-73.5159364,17.63z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-sans font-light text-[10px] tracking-[0.22em] uppercase text-terra border-b border-terra/40 pb-px hover:border-terra transition-colors"
                  >
                    Get Directions ↗
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="label mb-3">Hours</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-sans font-light text-xs text-muted tracking-wide">Monday – Friday</span>
                      <span className="font-serif font-light text-lg text-mocha">8 am – 7 pm</span>
                    </div>
                    <div className="h-px bg-mocha/8" />
                    <div className="flex justify-between items-baseline">
                      <span className="font-sans font-light text-xs text-muted tracking-wide">Saturday – Sunday</span>
                      <span className="font-serif font-light text-lg text-mocha">8 am – 10 pm</span>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div>
                  <p className="label mb-3">Parking</p>
                  <p className="font-sans font-light text-xs text-muted leading-relaxed">
                    Free on-site parking is available in the building lot directly off S Broadway. Additional street parking is available along the surrounding blocks.
                  </p>
                </div>

                {/* Accessibility */}
                <div>
                  <p className="label mb-3">Accessibility</p>
                  <p className="font-sans font-light text-xs text-muted leading-relaxed">
                    Century 360 is wheelchair accessible with step-free entry, accessible restrooms, and elevator access within the building. Please contact us in advance if you have specific needs — we're happy to accommodate.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.12} className="lg:col-span-3">
              <div className="w-full overflow-hidden" style={{ height: "560px" }}>
                <iframe
                  src="https://www.google.com/maps?q=40.7608304,-73.5160691&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(25%) contrast(1.05) sepia(10%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Century 360 location"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-terra py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="label text-cream/60 mb-6">Ready to restore?</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl text-cream leading-tight mb-8">
              Your session<br /><em className="italic">awaits.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.18}>
            <Link
              href="/contact"
              className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-sand hover:text-mocha transition-colors duration-300"
            >
              Book Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}