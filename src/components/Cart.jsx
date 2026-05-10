function EmptyCart() {
  return (
    <div className="soft-card flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-600">
        <img src="/assets/products/shopping-cart.png" alt="Empty cart" className="h-9 w-9 object-contain" />
      </div>
      <h3 className="mt-6 text-2xl font-black text-ink">Your cart is empty</h3>
      <p className="mt-3 max-w-md text-slate-600">Choose a premium digital tool from the products tab and it will appear here.</p>
    </div>
  );
}

export default function Cart({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="soft-card mx-auto max-w-5xl p-5 sm:p-8 lg:p-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-3xl font-black text-ink">Your Cart</h3>
          <p className="mt-2 text-sm text-slate-500">Review selected tools before checkout.</p>
        </div>
        <div className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700">
          {cartItems.length} selected item{cartItems.length > 1 ? "s" : ""}
        </div>
      </div>

      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="grid gap-4 rounded-3xl bg-slate-50 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
              <img src={item.icon} alt={`${item.name} icon`} className="h-9 w-9 object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-black text-ink">{item.name}</h4>
              <p className="mt-1 text-sm font-semibold text-slate-500">${item.price} / {item.period}</p>
            </div>
            <button type="button" onClick={() => onRemove(item.id)} className="justify-self-start rounded-full px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 sm:justify-self-end">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="my-8 h-px bg-slate-200" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-xl font-black text-ink">Total</p>
        <p className="text-4xl font-black text-ink">${total}</p>
      </div>

      <button type="button" onClick={onCheckout} className="mt-8 w-full rounded-full bg-brand-gradient px-6 py-4 text-base font-black text-white shadow-glow hover:-translate-y-0.5">
        Proceed to Checkout
      </button>
    </div>
  );
}
