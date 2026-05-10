const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating", stars: true }
];

export default function Stats() {
  return (
    <section id="stats" className="bg-brand-gradient py-10 text-white">
      <div className="section-container grid gap-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-white/25">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4">
            <p className="text-4xl font-black tracking-tight sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-white/90">{stat.label}</p>
            {stat.stars && (
              <div className="mt-3 flex justify-center gap-1" aria-label="Five star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 fill-amber-300" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 1.7l2.35 5.01 5.28.8-3.81 3.89.9 5.49L10 14.3l-4.72 2.59.9-5.49-3.81-3.89 5.28-.8L10 1.7z" />
                  </svg>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
