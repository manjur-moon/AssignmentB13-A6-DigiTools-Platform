# DigiTools Marketplace

A modern, responsive digital product marketplace built from the provided Figma-style requirements. The app includes a polished landing page, product grid, tab-based cart view, pricing section, checkout flow, and toast notifications.

## Project Overview

DigiTools Marketplace is a React.js front-end project for selling premium digital tools such as AI writing tools, design templates, stock assets, automation kits, resume builders, and productivity resources. Users can browse products, add selected products to the cart, remove products, view the cart total, and clear the cart through the checkout button.

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON data module for product data
- Vite

## Main Features

1. Product and cart toggle section with products visible by default.
2. Fully functional cart with add, remove, item count, total price, and checkout clear action.
3. React-Toastify alerts for add to cart, duplicate add, remove item, and checkout completion.

## Additional Features

- Figma-inspired navbar, hero banner, stats section, steps section, pricing section, CTA banner, and footer.
- Responsive 3-column product layout on large screens with graceful tablet and mobile layouts.
- Cart count updates live in the navbar.
- Buy Now button changes to Added to Cart after a product is selected.
- Product data is managed from a separate JSON data file.

## Folder Structure

```text
digitools-marketplace/
├── public/
│   └── hero-visual.svg
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MarketplaceSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Stats.jsx
│   │   └── Steps.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Product Data Fields

Each product contains the following fields:

```json
{
  "id": 1,
  "name": "AI Writing Pro",
  "description": "Generate high-quality blogs, ads, emails, and landing page copy in seconds with AI.",
  "price": 29,
  "period": "one-time",
  "tag": "Popular",
  "tagType": "popular",
  "features": ["AI-powered suggestions", "SEO optimized", "Multi-language support"],
  "icon": "AI"
}
```

## How to Run Locally

Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Requirement Coverage

- Navbar designed according to the Figma reference.
- Empty cart icon and live cart count in the navbar.
- Banner section with heading, description, image, and buttons.
- Stats section based on the Figma reference.
- Center toggle buttons for Products and Cart.
- Products section visible by default.
- Empty cart message shown when cart has no products.
- 8 generated product data objects with all required fields.
- 3-column product card layout on desktop.
- Cart layout uses one column.
- Cart item includes name, icon, price, and remove button.
- Proceed to Checkout clears all cart items.
- Total price of selected products is shown in the cart.
- Steps, pricing, and footer sections follow the Figma style.
- Fully responsive layout using Tailwind CSS utilities.
- React-Toastify alerts implemented.

## Author

Created for a React assignment based on the provided DigiTools Figma screenshots and requirements.


## Uploaded Assets Integration

The provided Figma image assets are placed in `public/assets` and used across the UI:

- `banner.png` in the hero/banner section
- Product icons from `public/assets/products` in product cards, cart items, and navbar cart icon
- `user.png`, `package.png`, and `rocket.png` in the steps and CTA sections

Because the assets are in the Vite public folder, they are referenced with `/assets/...` paths from the React components and JSON data.
