const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up for free and explore our premium digital tools.",
    icon: "/assets/user.png"
  },
  {
    id: 2,
    title: "Choose Products",
    description: "Browse 200+ tools and add the ones you need to your cart.",
    icon: "/assets/package.png"
  },
  {
    id: 3,
    title: "Start Creating",
    description: "Instant access and start creating amazing results.",
    icon: "/assets/rocket.png"
  }
];

export default function Steps() {
  return (
    <section id="features" className="bg-slate-50 py-16 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-5xl">Get Started In 3 Steps</h2>
          <p className="mt-4 text-slate-600">Simple process to supercharge your workflow.</p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-1/2 top-20 hidden h-px w-2/3 -translate-x-1/2 border-t border-dashed border-violet-200 lg:block" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.id} className="soft-card relative p-8 text-center">
              <span className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-sm font-black text-white">
                {step.id}
              </span>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-brand-600">
                <img src={step.icon} alt={`${step.title} icon`} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="mt-6 text-xl font-black text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
