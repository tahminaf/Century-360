import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: "Book a session at Century 360 Spa & Sauna House in Hicksville, NY. Reach out for appointments, membership inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-mocha pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="label text-terra mb-8">Get in Touch</p>
          <h1 className="font-serif font-light text-sand leading-[0.92]" style={{ fontSize: "clamp(52px, 8vw, 110px)" }}>
            Book your<br /><em className="text-terra italic">session.</em>
          </h1>
        </div>
      </section>

      {/* ── Location & Map ───────────────────────────────── */}
      <section className="section-pad bg-sand/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label text-terra mb-6">Location</p>
          <h2
            className="font-serif font-light text-mocha mb-14 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
          >
            Find <em className="italic text-terra">us.</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map embed */}
            <div className="w-full relative aspect-[4/3] lg:aspect-auto lg:sticky lg:top-32 lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-73.5160691!3d40.7608304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280f93cc3857f%3A0x3ea8baa03cbabeb2!2s350%20S%20Broadway%20%2317%2C%20Hicksville%2C%20NY%2011801!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Century 360 Spa & Sauna House location map"
              />
            </div>

            {/* Location details */}
            <div className="space-y-8">
              {/* Address + CTA */}
              <div>
                <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-3">Address</p>
                <p className="font-serif font-light text-2xl text-mocha leading-snug">
                  350 S Broadway, Unit 17
                </p>
                <p className="font-sans font-light text-sm text-muted mt-1">Hicksville, NY 11801</p>
                <a
                  href="https://www.google.com/maps/place/350+S+Broadway+%2317,+Hicksville,+NY+11801/@40.7609423,-73.5159364,17.63z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 inline-block"
                >
                  Get Directions
                </a>
              </div>

              <div className="w-full h-px bg-mocha/10" />

              {/* Parking */}
              <div>
                <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-3">Parking</p>
                <div className="space-y-2">
                  {[
                    "Free private parking lot available on-site",
                    "Dedicated accessible parking spaces near the entrance",
                    "Additional street parking available along S Broadway",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-terra mt-2 shrink-0" />
                      <span className="font-sans font-light text-sm text-muted leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-mocha/10" />

              {/* Transportation */}
              <div>
                <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-3">Public Transit</p>
                <div className="space-y-2">
                  {[
                    "LIRR: Hicksville Station (Port Washington & Main Line) — approx. 1 mile away",
                    "MTA Bus: N20G & N22 routes serve S Broadway directly",
                    "Rideshare drop-off available at the front of the building",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-terra mt-2 shrink-0" />
                      <span className="font-sans font-light text-sm text-muted leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-mocha/10" />

              {/* Accessibility */}
              <div>
                <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-3">Accessibility</p>
                <div className="space-y-2">
                  {[
                    "Ground-floor entry — no stairs required",
                    "Wheelchair accessible throughout the facility",
                    "Accessible restrooms on-site",
                    "Please contact us in advance for any additional accommodations",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-terra mt-2 shrink-0" />
                      <span className="font-sans font-light text-sm text-muted leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label mb-8">Contact Information</p>
              <div className="space-y-8">
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-2">Location</p>
                  <p className="font-serif font-light text-xl text-mocha">350 S Broadway, Unit 17</p>
                  <p className="font-sans font-light text-sm text-muted mt-1">Hicksville, NY 11801</p>
                </div>
                <div className="w-full h-px bg-mocha/10" />
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-2">Hours</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-sans font-light text-sm text-mocha">Monday – Friday</span>
                      <span className="font-sans font-light text-sm text-muted">8:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans font-light text-sm text-mocha">Saturday – Sunday</span>
                      <span className="font-sans font-light text-sm text-muted">8:00 AM – 10:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-mocha/10" />
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-2">Follow Us</p>
                  <a
                    href="https://instagram.com/century360sauna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-light text-sm text-terra hover:text-terra-dark transition-colors"
                  >
                    @century360sauna
                  </a>
                </div>
                <div className="w-full h-px bg-mocha/10" />
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-3">What to Expect</p>
                  <div className="space-y-3">
                    {[
                      "Arrive 10–15 minutes before your appointment",
                      "Towels and robes are provided",
                      "We recommend hydrating before and after thermal sessions",
                      "Please inform us of any medical conditions before booking",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-terra mt-2 shrink-0" />
                        <span className="font-sans font-light text-sm text-muted leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="label mb-8">Send Us a Message</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
