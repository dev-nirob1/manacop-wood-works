export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-8 lg:px-8">
      <section className="rounded-[2rem] border border-[#e8dfd4] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[var(--color-dark)]">About</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-dark)]/70">
          This page now lives inside the frontend route group.
        </p>
      </section>
    </div>
  );
}
