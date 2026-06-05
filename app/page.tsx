import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Membership Teaser */}
      <section className="bg-terra section-pad">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="label text-cream/60 mb-6">Become a Member</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl text-cream leading-tight mb-6">
              Unlimited wellness,<br /><em className="italic">every month.</em>
            </h2>
            <p className="font-sans font-light text-sm text-cream/70 max-w-xl mx-auto leading-relaxed mb-10">
              Our membership plans give you unlimited access to Century 360's core offerings at one simple monthly rate. No per-visit fees. No stress.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <Link
              href="/membership"
              className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-mocha-light transition-colors duration-300"
            >
              View Membership Plans
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Gift Cards Teaser */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 md:order-1">
              <div className="bg-sand-dark h-64 md:h-80 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-muted mb-3">Century 360</p>
                  <p className="font-serif font-light italic text-4xl text-mocha">Gift Card</p>
                  <div className="w-12 h-px bg-terra mx-auto mt-4" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.12} className="order-1 md:order-2">
              <div>
                <p className="label mb-6">Give the gift of wellness</p>
                <h2 className="font-serif font-light text-5xl leading-tight mb-6">
                  The perfect <em className="text-terra italic">gift</em> for someone you love.
                </h2>
                <p className="font-sans font-light text-sm text-muted leading-relaxed mb-8">
                  Century 360 gift cards are redeemable on all services and memberships. Give someone the experience of true restoration — available in any amount.
                </p>
                <Link href="/gift-cards" className="btn-primary">Purchase a Gift Card</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sand-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="label mb-6">Ready to restore?</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl text-mocha leading-tight mb-8">
              Your session<br /><em className="text-terra italic">awaits.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.18}>
            <Link href="/contact" className="btn-primary">Book Now</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}