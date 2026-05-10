export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-soft-radial py-14 sm:py-18 lg:py-24">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-bold text-brand-700">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white">
              <img src="/assets/Play.png" alt="" className="h-3.5 w-3.5" />
            </span>
            All-in-One Digital Tools Suite
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl lg:text-7xl">
            Supercharge Your Digital Workflow
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Access 200+ premium tools for AI, design, content, and productivity. All in one platform. No subscriptions. One low price.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#marketplace" className="gradient-button inline-flex items-center justify-center gap-2">
              Explore Products
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a href="#pricing" className="outline-button inline-flex items-center justify-center gap-2">
              View Pricing
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-brand-gradient opacity-10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
            <img src="/assets/banner.png" alt="Hand interacting with futuristic digital workflow icons" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
