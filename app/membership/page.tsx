import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join Century 360 and enjoy unlimited wellness with monthly membership plans. Infrared sauna, cold plunge, red light therapy and more — at one simple monthly rate.",
};

const plans = [
  {
    name: "Restore",
    price: "$89",
    period: "/mo",
    tagline: "Begin your wellness journey.",
    features: [
      "Unlimited infrared sauna",
      "4 cold plunge sessions/mo",
      "2 red light therapy sessions/mo",
      "10% off all spa services",
      "Member-only booking priority",
    ],
    featured: false,
  },
  {
    name: "Balance",
    price: "$149",
    period: "/mo",
    tagline: "The full thermal experience.",
    features: [
      "Unlimited infrared + dry sauna",
      "Unlimited cold plunge",
      "8 red light therapy sessions/mo",
      "1 complimentary facial/mo",
      "15% off all spa services",
      "Guest pass (1/mo)",
      "Member-only booking priority",
    ],
    featured: true,
  },
  {
    name: "Elevate",
    price: "$249",
    period: "/mo",
    tagline: "Unlimited everything.",
    features: [
      "Unlimited access to all thermal services",
      "Unlimited red light therapy",
      "2 complimentary spa services/mo",
      "20% off all additional services",
      "Monthly IV infusion credit ($50)",
      "2 guest passes/mo",
      "Priority booking always",
    ],
    featured: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. All memberships are month-to-month with no long-term commitment. Cancel anytime with 30 days notice." },
  { q: "Do unused sessions roll over?", a: "Complimentary service credits (like facials) roll over for one month. Unlimited-access services do not require tracking." },
  { q: "Can I bring a guest?", a: "Balance and Elevate members receive monthly guest passes. Additional guest day passes can be purchased at the front desk." },
  { q: "Is there a joining fee?", a: "There is a one-time $25 enrollment fee for all new memberships." },
  { q: "Can I pause my membership?", a: "Yes. Members may pause their membership once per year for up to 30 days (e.g., for travel or medical reasons)." },
];

export default function MembershipPage() {
  return (
    <>
      <section className="bg-mocha pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label text-terra mb-8">Membership</p>
          <h1 className="font-serif font-light text-sand leading-[0.92]" style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            Unlimited<br /><em className="text-terra italic">wellness.</em>
          </h1>
          <p className="font-sans font-light text-sand/50 text-sm max-w-lg leading-relaxed mt-8">
            Join Century 360 and make wellness a non-negotiable part of your life — at one simple monthly rate.
          </p>
        </div>
      </section>

      <section className="section-pad bg-sand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-mocha/10">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`px-10 py-12 flex flex-col ${p.featured ? "bg-mocha" : "bg-sand-dark"}`}
              >
                {p.featured && (
                  <span className="label text-terra mb-4">Most Popular</span>
                )}
                <p className={`font-serif font-light italic text-4xl mb-1 ${p.featured ? "text-sand" : "text-mocha"}`}>
                  {p.name}
                </p>
                <p className={`font-sans font-light text-xs mb-6 ${p.featured ? "text-sand/50" : "text-muted"}`}>
                  {p.tagline}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-serif font-light text-5xl ${p.featured ? "text-terra" : "text-mocha"}`}>{p.price}</span>
                  <span className={`font-sans font-light text-sm ${p.featured ? "text-sand/40" : "text-muted"}`}>{p.period}</span>
                </div>
                <ul className="space-y-3 mb-10 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 font-sans font-light text-xs leading-relaxed ${p.featured ? "text-sand/70" : "text-muted"}`}>
                      <span className="w-1 h-1 rounded-full bg-terra mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={p.featured ? "btn-primary text-center" : "btn-outline text-center"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad px-6">
        <div className="max-w-3xl mx-auto">
          <p className="label mb-10">Frequently Asked Questions</p>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-mocha/10 py-6">
                <p className="font-serif font-light text-xl text-mocha mb-3">{f.q}</p>
                <p className="font-sans font-light text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-terra section-pad px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-light text-5xl text-cream leading-tight mb-6">
            Ready to commit to <em className="italic">yourself?</em>
          </h2>
          <p className="font-sans font-light text-sm text-cream/70 mb-10 leading-relaxed">
            Reach out to our team and we'll help you find the membership that fits your life.
          </p>
          <Link href="/contact" className="inline-block bg-mocha text-sand font-sans font-light text-[10px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-mocha-light transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
