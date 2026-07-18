// components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import type { IconType } from "react-icons";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
];

const SOCIALS: { Icon: IconType; href: string }[] = [
  { Icon: FaFacebook, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaTwitter, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: Logo + description (span 2) */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <Link href="/" className="text-xl font-semibold w-fit">
           <Image src="/logo.png" height="80" width="80" alt="company logo"/>
          </Link>
          <p className="text-white/70 text-sm max-w-sm">
            Short description about your company goes here. Keep it brief and
            explain what you do in one or two lines.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-1">Quick Links</h4>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-primary transition-colors duration-200 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Social + Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-1">Contact</h4>
          <p className="text-white/70 text-sm">+880 123 456 789</p>
          <p className="text-white/70 text-sm">hello@yourcompany.com</p>
          <div className="flex gap-4 mt-1">
            {SOCIALS.map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-primary transition-colors duration-200"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
          {" "}Design and developed by{" "}
          
           <a href="https://webpoka.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline">
            webpoka
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;