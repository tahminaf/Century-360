import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Century 360 Spa & Sauna House — our mission, philosophy, and commitment to whole-body wellness in Hicksville, NY.",
};

const values = [
  { title: "Restore", body: "We believe the body knows how to heal. Our job is to give it the conditions to do so — through heat, light, cold, and touch." },
  { title: "Balance", body: "Wellness isn't one thing. It's the interplay of rest, movement, detox, and nourishment. Century 360 is built around that wholeness." },
  { title: "Excellence", body: "Every service, every detail, every interaction is held to the highest standard. This is not just a spa — it's a sanctuary." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-mocha pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label text-terra mb-8">Our Story</p>
          <h1 className="font-serif font-light text-sand leading-[0.92] mb-8" style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            Built for<br /><em className="text-terra italic">balance.</em>
          </h1>
          <p className="font-sans font-light text-sand/50 text-sm max-w-lg leading-relaxed">
            Century 360 was born from a simple belief: that feeling well shouldn't be complicated. We set out to build a place where every offering — from a sauna session to an IV drip — works together as one seamless experience.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label mb-6">Who We Are</p>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-8">
                A team dedicated to your <em className="text-terra italic">whole self.</em>
              </h2>
              <div className="space-y-5">
                <p className="font-sans font-light text-sm text-muted leading-relaxed">
                  Century 360 Spa & Sauna House is Hicksville's newest destination for holistic wellness. We bring together the best of thermal therapy, aesthetic medicine, and recovery science under one roof — so you can do more of what you love, longer.
                </p>
                <p className="font-sans font-light text-sm text-muted leading-relaxed">
                  Our team includes licensed aestheticians, certified wellness practitioners, and medical professionals who share a passion for evidence-based, results-driven care.
                </p>
                <p className="font-sans font-light text-sm text-muted leading-relaxed">
                  Whether you're stepping in for your first infrared session or you're a seasoned wellness enthusiast, we meet you where you are — and help you go further.
                </p>
              </div>
            </div>
            <div className="bg-sand-dark h-96 flex items-center justify-center">
              <div className="text-center px-8">
                <p className="font-serif font-light italic text-7xl text-mocha/15">C360</p>
                <p className="label mt-4 text-mocha/30">Wellness · Beauty · Longevity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-dark section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label mb-10">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-mocha/10">
            {values.map((v) => (
              <div key={v.title} className="bg-sand-dark px-10 py-10">
                <p className="font-serif font-light italic text-3xl text-terra mb-4">{v.title}</p>
                <div className="w-8 h-px bg-terra/40 mb-5" />
                <p className="font-sans font-light text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label mb-6">Our Philosophy</p>
          <blockquote className="font-serif font-light italic text-4xl md:text-5xl text-mocha leading-snug mb-8">
            "Everything, in balance."
          </blockquote>
          <p className="font-sans font-light text-sm text-muted leading-relaxed mb-10">
            This isn't just our tagline — it's how we designed every square inch of Century 360. The heat of the sauna and the shock of the cold plunge. The stillness of red light and the movement of lymphatic work. Tension and release. It all belongs.
          </p>
          <Link href="/amenities" className="btn-primary">Explore Our Amenities</Link>
        </div>
      </section>
    </>
  );
}
