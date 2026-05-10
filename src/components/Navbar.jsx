import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Products", href: "#marketplace" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#stats" },
  { label: "FAQ", href: "#footer" }
];

function CartIcon() {
  return <img src="/assets/products/shopping-cart.png" alt="" className="h-5 w-5 object-contain" />;
}

export default function Navbar({ cartCount, onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <nav className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="text-3xl font-black tracking-tight text-brand-600">
          DigiTools
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-slate-700 hover:text-brand-600">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button type="button" onClick={onCartClick} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-brand-200 hover:text-brand-600">
            <CartIcon />
            Cart
            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-brand-600 px-2 text-xs text-white">
              {cartCount}
            </span>
          </button>
          <a href="#marketplace" className="gradient-button px-5 py-2.5">
            Get Started
          </a>
        </div>

        <button type="button" onClick={() => setIsOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden" aria-label="Toggle menu">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-container space-y-3 py-5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600">
                {link.label}
              </a>
            ))}
            <button type="button" onClick={() => { onCartClick(); setIsOpen(false); }} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700">
              <span className="inline-flex items-center gap-2">
                <CartIcon />
                Cart
              </span>
              <span className="rounded-full bg-brand-600 px-3 py-1 text-xs text-white">{cartCount}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
