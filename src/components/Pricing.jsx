const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    features: ["5 free tools", "Community access", "Basic support", "No credit card required"],
    button: "Get Started Free",
    highlight: false
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: "$29",
    period: "one-time",
    features: ["All premium tools", "Lifetime access", "Regular updates", "Priority support", "Commercial license"],
    button: "Buy Pro Now",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "$99",
    period: "one-time",
    features: ["Everything in Pro", "Team collaboration", "Advanced features", "Dedicated support", "Custom solutions"],
    button: "Contact Sales",
    highlight: false
  }
];

function CheckIcon({ highlight }) {
  return (
    <svg className={`mt-0.5 h-4 w-4 flex-none ${highlight ? "text-white" : "text-emerald-500"}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.5 5.5l-8.2 8.2-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-slate-600">Choose the perfect plan for your needs.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative rounded-3xl border p-8 ${plan.highlight ? "border-transparent bg-brand-gradient text-white shadow-glow" : "border-slate-100 bg-white shadow-sm"}`}>
              {plan.highlight && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 px-4 py-1 text-xs font-black text-amber-700">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-black ${plan.highlight ? "text-white" : "text-ink"}`}>{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>{plan.description}</p>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className={`pb-1 text-sm font-semibold ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>/{plan.period}</span>
              </div>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-white" : "text-slate-600"}`}>
                    <CheckIcon highlight={plan.highlight} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#marketplace" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black ${plan.highlight ? "bg-white text-brand-600 hover:bg-brand-50" : "border border-brand-200 text-brand-600 hover:bg-brand-50"}`}>
                {plan.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
