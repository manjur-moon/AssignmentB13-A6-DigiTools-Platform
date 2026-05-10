const footerGroups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Testimonials", "FAQ"]
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Contact"]
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Guides", "Updates"]
  }
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-white">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="text-2xl font-black text-white">DigiTools</a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Powerful digital tools for modern professionals. Access 200+ premium tools with one simple purchase.
            </p>
            <div className="mt-6 flex gap-3">
              {["f", "x", "in", "ig"].map((item) => (
                <a key={item} href="#home" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-black text-white hover:bg-brand-600" aria-label={`Social link ${item}`}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="text-sm text-slate-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-black text-white">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>hello@digitools.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Street, Tech City, TC 12345, USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2024 DigiTools. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#home" className="hover:text-white">Privacy Policy</a>
            <a href="#home" className="hover:text-white">Terms of Service</a>
            <a href="#home" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
