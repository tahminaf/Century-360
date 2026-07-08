"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BookNowButton from "@/components/BookNowButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Membership", href: "/membership" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF5EE] border-b border-mocha/10 py-2">
        <div className="w-full px-10 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center shrink-0 opacity-100 hover:opacity-70 transition-opacity duration-200"
          >
            <Image
              src="/logo.png"
              alt="Century 360 Spa & Sauna House"
              width={240}
              height={88}
              priority
              className="w-[180px] md:w-[220px] h-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans font-medium text-[11px] tracking-[0.22em] uppercase transition-colors duration-200 ${
                  pathname === l.href ? "text-terra" : "text-mocha/70 hover:text-terra"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <BookNowButton className="btn-primary">
              Book Now
            </BookNowButton>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1px] bg-mocha transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-6 h-[1px] bg-mocha transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[1px] bg-mocha transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-24 px-8 md:hidden overflow-y-auto"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.055, ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-serif font-light text-4xl text-mocha py-4 border-b border-mocha/10 italic hover:text-terra transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48, duration: 0.4 }}
            >
              <BookNowButton
                onClick={() => setOpen(false)}
                className="btn-primary mt-8 text-center block"
              >
                Book Now
              </BookNowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}