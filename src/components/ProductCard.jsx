const tagClasses = {
  popular: "bg-amber-100 text-amber-700",
  new: "bg-emerald-100 text-emerald-700",
  "best seller": "bg-violet-100 text-violet-700",
  "best value": "bg-orange-100 text-orange-700",
  featured: "bg-sky-100 text-sky-700"
};

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-500" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.5 5.5l-8.2 8.2-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductCard({ product, onAddToCart, isSelected }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 shadow-sm ring-1 ring-brand-100 transition group-hover:scale-105">
          <img src={product.icon} alt={`${product.name} icon`} className="h-8 w-8 object-contain" />
        </div>
        <span className={`label-pill ${tagClasses[product.tagType] || "bg-slate-100 text-slate-700"}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-black text-ink">{product.name}</h3>
      <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">{product.description}</p>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-3xl font-black text-ink">${product.price}</span>
        <span className="pb-1 text-sm font-semibold text-slate-500">/{product.period}</span>
      </div>

      <ul className="mt-5 space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => onAddToCart(product)} className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-black text-white shadow-lg ${isSelected ? "bg-slate-900 hover:bg-slate-800" : "bg-brand-gradient hover:-translate-y-0.5 hover:shadow-glow"}`}>
        {isSelected ? "Added to Cart" : "Buy Now"}
      </button>
    </article>
  );
}
