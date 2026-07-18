// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark w-full sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right: Contact button (desktop only) */}
          <div className="hidden md:block order-3">
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 cursor-pointer order-3"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>

          {/* Nav links: single map, conditional classNames handle mobile/desktop */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-dark md:bg-transparent flex-col md:flex-row items-center gap-4 md:gap-8 py-6 md:py-0 order-2`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors duration-200 uppercase"
              >
                {link.label}
              </Link>
            ))}

            {/* Contact button repeated inside dropdown for mobile only */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="md:hidden bg-primary text-whihte px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;