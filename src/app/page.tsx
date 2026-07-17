export default function Home() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-[#e8dfd4] bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-[var(--color-secondary)]/70 px-3 py-1 text-sm font-semibold text-[var(--color-dark)]">
          Handcrafted woodwork for modern spaces
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-[var(--color-dark)] sm:text-5xl">
            Beautiful furniture and bespoke interiors, built to last.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[var(--color-dark)]/70">
            From elegant shelving to statement tables, Manacop Wood Works creates timeless pieces with precision, warmth, and attention to detail.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8e6348]"
          >
            Book a Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-[#d8cbb9] px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[var(--color-secondary)]/40"
          >
            Learn More
          </a>
        </div>
      </div>

      <div id="about" className="rounded-[1.5rem] bg-[var(--color-secondary)]/35 p-6">
        <h2 className="text-xl font-semibold text-[var(--color-dark)]">Why clients choose us</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-dark)]/80">
          <li>• Custom designs tailored to your home or business</li>
          <li>• Premium hardwoods and durable finishes</li>
          <li>• Clear communication from concept to installation</li>
        </ul>
      </div>
    </section>
  );
}
