import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-dark text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero.jpeg"
          alt="Premium handcrafted woodwork background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Overlay layer: Deep dark gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-transparent md:bg-gradient-to-r md:from-dark/95 md:via-dark/80 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-transparent to-transparent" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col gap-6 md:gap-8">
          
          {/* Decorative Tagline Badge */}
          <div className="inline-flex items-center gap-2 w-fit rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md p-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-secondary">
            <Compass className="size-4 animate-spin-slow text-primary" />
            <span>EST. 2008 &bull; Premium Wood Craftsmanship</span>
          </div>

          {/* Heading with Elegant Serif style & color accents */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-white">
            Where raw timber becomes <br className="hidden sm:inline" />
            <span className="font-semibold text-primary drop-shadow-sm">timeless masterpieces</span>.
          </h1>

          {/* Luxury Description */}
          <p className="text-base sm:text-lg md:text-lg text-white/85 leading-relaxed max-w-xl font-light">
            We blend ancestral joinery techniques with modern architectural design to shape unique furniture and spaces that speak of luxury, character, and longevity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-dark shadow-lg transition-all duration-300 hover:bg-primary/95 hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/gallery"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>Explore Gallery</span>
            </Link>
          </div>

          {/* Elegant Stats Divider/Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/10 max-w-lg">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-primary">15+</p>
              <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-primary">100%</p>
              <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Handcrafted</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-primary">Lifetime</p>
              <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Guarantee</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
