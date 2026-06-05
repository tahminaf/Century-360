import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give the gift of wellness with a Century 360 gift card. Redeemable on all services, memberships, and retail at our Hicksville, NY spa and sauna house.",
};

const amounts = ["$50", "$100", "$150", "$200", "$250", "Custom"];

const occasions = [
  { title: "Birthdays", icon: "✦" },
  { title: "Anniversaries", icon: "✦" },
  { title: "Mother's Day", icon: "✦" },
  { title: "Holidays", icon: "✦" },
  { title: "Just Because", icon: "✦" },
  { title: "Corporate Gifting", icon: "✦" },
];

export default function GiftCardsPage() {
  return (
    <>
      <section className="bg-mocha pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label text-terra mb-8">Gift Cards</p>
          <h1 className="font-serif font-light text-sand leading-[0.92]" style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            Give the gift<br />of <em className="text-terra italic">wellness.</em>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label mb-6">About Our Gift Cards</p>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-6">
                The most <em className="text-terra italic">thoughtful</em> gift you can give.
              </h2>
              <p className="font-sans font-light text-sm text-muted leading-relaxed mb-4">
                A Century 360 gift card lets your loved one choose exactly how they want to restore, reset, and renew. Redeemable on any service, membership, or retail item at our Hicksville location.
              </p>
              <p className="font-sans font-light text-sm text-muted leading-relaxed mb-8">
                Available in preset amounts or as a fully customizable value. Digital delivery available instantly, or pick up a beautifully packaged physical card in-store.
              </p>
              <div className="space-y-3">
                {["Redeemable on all services & memberships", "Never expires", "Digital or physical card available", "Available in any amount"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-terra shrink-0" />
                    <span className="font-sans font-light text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card visual */}
            <div className="bg-mocha p-10 flex flex-col justify-between" style={{ minHeight: "280px" }}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-sans font-light text-[9px] tracking-[0.3em] uppercase text-terra mb-1">Century 360</p>
                  <p className="font-sans font-light text-[7px] tracking-[0.25em] uppercase text-sand/30">Spa & Sauna House</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-terra/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border border-terra/50" />
                </div>
              </div>
              <div>
                <p className="font-serif font-light italic text-5xl text-sand mb-2">Gift Card</p>
                <div className="w-10 h-px bg-terra mb-4" />
                <p className="font-sans font-light text-xs text-sand/40 tracking-widest uppercase">Wellness · Beauty · Longevity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-dark section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label mb-10">Select an Amount</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {amounts.map((a) => (
              <div
                key={a}
                className={`border border-mocha/15 py-6 text-center cursor-pointer hover:border-terra hover:text-terra transition-colors duration-200 group ${a === "$100" ? "border-terra" : ""}`}
              >
                <p className={`font-serif font-light text-2xl group-hover:text-terra transition-colors ${a === "$100" ? "text-terra" : "text-mocha"}`}>{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">Purchase Gift Card</Link>
          </div>
        </div>
      </section>

      <section className="section-pad px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label mb-10">Perfect for any occasion</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-mocha/10">
            {occasions.map((o) => (
              <div key={o.title} className="bg-cream py-8 px-4 text-center">
                <p className="font-serif font-light italic text-xl text-terra mb-2">{o.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-terra section-pad px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-light text-5xl text-cream leading-tight mb-6">
            Corporate gifting?<br /><em className="italic">We've got you.</em>
          </h2>
          <p className="font-sans font-light text-sm text-cream/70 mb-10 leading-relaxed">
            Looking to gift wellness to your team or clients? We offer bulk gift card packages for corporate orders. Contact us for custom pricing.
          </p>
          <Link href="/contact" className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-mocha-light transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
