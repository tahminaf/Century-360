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

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label mb-8">Contact Information</p>
              <div className="space-y-8">
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-2">Location</p>
                  <p className="font-serif font-light text-xl text-mocha">Hicksville, New York</p>
                  <p className="font-sans font-light text-sm text-muted mt-1">Nassau County, Long Island</p>
                </div>
                <div className="w-full h-px bg-mocha/10" />
                <div>
                  <p className="font-sans font-light text-xs text-terra tracking-widest uppercase mb-2">Hours</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-sans font-light text-sm text-mocha">Monday – Friday</span>
                      <span className="font-sans font-light text-sm text-muted">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans font-light text-sm text-mocha">Saturday – Sunday</span>
                      <span className="font-sans font-light text-sm text-muted">8:00 AM – 8:00 PM</span>
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
