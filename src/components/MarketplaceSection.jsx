import Cart from "./Cart.jsx";
import ProductCard from "./ProductCard.jsx";

export default function MarketplaceSection({ products, cartItems, activeTab, setActiveTab, onAddToCart, onRemove, onCheckout }) {
  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  return (
    <section id="marketplace" className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-600">Marketplace</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-5xl">Premium Digital Tools</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Powerful tools to streamline your workflow and take your creativity, productivity, and business to the next level.
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-md rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button type="button" onClick={() => setActiveTab("products")} className={`flex-1 rounded-full px-5 py-3 text-sm font-black ${activeTab === "products" ? "bg-brand-gradient text-white shadow-glow" : "text-slate-600 hover:bg-slate-50"}`}>
            Products
          </button>
          <button type="button" onClick={() => setActiveTab("cart")} className={`flex-1 rounded-full px-5 py-3 text-sm font-black ${activeTab === "cart" ? "bg-brand-gradient text-white shadow-glow" : "text-slate-600 hover:bg-slate-50"}`}>
            Cart ({cartItems.length})
          </button>
        </div>

        <div className="mt-12">
          {activeTab === "products" ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} isSelected={isInCart(product.id)} />
              ))}
            </div>
          ) : (
            <Cart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
          )}
        </div>
      </div>
    </section>
  );
}
