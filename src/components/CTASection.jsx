export default function CTASection() {
  return (
    <section className="relative w-full bg-brand-gradient px-4 py-24 text-center text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/80 sm:text-base">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#marketplace"
            className="rounded-full bg-white px-7 py-3 text-sm font-extrabold text-brand-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-50"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-white/60 px-8 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-white/70">
          14-day free trial&nbsp; • &nbsp;No credit card required&nbsp; • &nbsp;Cancel anytime
        </p>
      </div>
    </section>
  );
}
