import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give the gift of wellness with a Century 360 gift card. Coming soon.",
};

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

      <section className="section-pad px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label text-terra mb-10">Coming Soon</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-8">
            Gift cards are on<br />their <em className="text-terra italic">way.</em>
          </h2>
          <p className="font-sans font-light text-sm text-muted leading-relaxed max-w-md mx-auto mb-10">
            We're putting the finishing touches on our gift card program. Check back soon — or reach out and we'll let you know the moment they're available.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
