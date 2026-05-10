import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MarketplaceSection from "./components/MarketplaceSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./components/Pricing.jsx";
import Stats from "./components/Stats.jsx";
import Steps from "./components/Steps.jsx";
import products from "./data/products.json";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const scrollToMarketplace = () => {
    window.setTimeout(() => {
      document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleCartNavClick = () => {
    setActiveTab("cart");
    scrollToMarketplace();
  };

  const handleAddToCart = (product) => {
    const alreadyExists = cartItems.some((item) => item.id === product.id);

    if (alreadyExists) {
      toast.info(`${product.name} is already added to your cart.`);
      return;
    }

    setCartItems((currentItems) => [...currentItems, product]);
    toast.success(`${product.name} added to cart.`);
  };

  const handleRemoveFromCart = (productId) => {
    const removedItem = cartItems.find((item) => item.id === productId);
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    toast.warn(`${removedItem?.name || "Product"} removed from cart.`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is already empty.");
      return;
    }

    setCartItems([]);
    setActiveTab("cart");
    toast.success("Checkout completed. Your cart has been cleared.");
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar cartCount={cartItems.length} onCartClick={handleCartNavClick} />
      <main>
        <Hero />
        <Stats />
        <MarketplaceSection
          products={products}
          cartItems={cartItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onAddToCart={handleAddToCart}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={1700} pauseOnHover theme="colored" />
    </div>
  );
}
