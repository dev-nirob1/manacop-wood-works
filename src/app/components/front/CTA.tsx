import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-dark text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/cta.png"
          alt="Premium woodworking banner background"
          fill
          className="object-cover object-center"
        />
        {/* Soft elegant overlay */}
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
          Ready to Bring Heirloom <br className="hidden sm:inline" />
          <span className="font-semibold text-primary">Quality</span> to Your Space?
        </h2>
        
        <p className="max-w-xl text-base sm:text-lg text-white/80 leading-relaxed font-light">
          Every custom piece begins with a conversation. Share your vision with us, and let's craft something designed to last generations.
        </p>

        <div className="mt-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-dark shadow-lg transition-all duration-300 hover:bg-primary/95 hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <span>Book A Consultation</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
