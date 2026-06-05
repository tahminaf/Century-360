import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://instagram.com/century360sauna", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com/century360", icon: FaFacebook, label: "Facebook" },
  { href: "https://tiktok.com/@century360sauna", icon: FaTiktok, label: "TikTok" },
  { href: "https://x.com/century360sauna", icon: FaXTwitter, label: "X" },
];

export default function Footer() {
  return (
    <footer className="bg-mocha text-sand/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <p className="font-sans font-light text-[10px] tracking-[0.35em] uppercase text-terra mb-1">
              Century 360
            </p>
            <p className="font-sans font-light text-[8px] tracking-[0.3em] uppercase text-sand/40 mb-6">
              Spa &amp; Sauna House
            </p>
            <p className="font-serif font-light text-3xl italic text-sand/80 leading-snug mb-6">
              Everything, in balance.
            </p>
            <p className="font-sans font-light text-xs text-sand/50 leading-relaxed max-w-xs">
              A full-spectrum wellness sanctuary in Hicksville, NY — where heat,
              light, and touch work together to restore your body and reset your mind.
            </p>
          </div>

          <div>
            <p className="label text-sand/40 mb-5">Navigate</p>
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Amenities", href: "/amenities" },
              { label: "Membership", href: "/membership" },
              { label: "Gift Cards", href: "/gift-cards" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block font-sans font-light text-xs text-sand/60 hover:text-terra transition-colors duration-200 mb-3"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="label text-sand/40 mb-5">Visit Us</p>
            <address className="not-italic font-sans font-light text-xs text-sand/60 leading-relaxed mb-6">
              Hicksville, NY<br />
              Nassau County, Long Island
            </address>
            <p className="label text-sand/40 mb-3">Hours</p>
            <p className="font-sans font-light text-xs text-sand/60 leading-relaxed mb-8">
              Mon – Fri: 9am – 9pm<br />
              Sat – Sun: 8am – 8pm
            </p>
            <p className="label text-sand/40 mb-4">Follow Us</p>
            <div className="flex items-center gap-5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-sand/40 hover:text-terra transition-all duration-250 hover:scale-115 inline-flex"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider opacity-20 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-light text-[10px] tracking-widest uppercase text-sand/30">
            © {new Date().getFullYear()} Century 360 Spa &amp; Sauna House. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-sans font-light text-[10px] tracking-widest uppercase text-sand/30 hover:text-terra transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-sans font-light text-[10px] tracking-widest uppercase text-sand/30 hover:text-terra transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
