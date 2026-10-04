'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.product._id !== productId)
      );
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product._id !== productId)
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="storefront min-h-screen overflow-x-hidden bg-transparent text-slate-900">
      <Navbar cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <HeroSection products={products} loading={loading} />

      <section
        id="products"
        className="relative px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
      >
        <div className="pointer-events-none absolute inset-x-0 top-8 h-48 bg-[radial-gradient(circle_at_center,rgba(108,166,221,0.12),transparent_65%)]" />
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-slate-500 dark:text-slate-400">
              Curated Collection
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Featured Collection
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Discover our handcrafted bracelets, each piece designed with elegance and care
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-96 items-center justify-center">
              <div className="rounded-[32px] bg-white/75 px-10 py-12 shadow-[0_22px_60px_rgba(28,54,86,0.12)] backdrop-blur">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#d8b15b]/25 border-t-[#d8b15b]" />
              </div>
            </div>
          ) : error ? (
            <div className="mx-auto max-w-2xl rounded-[32px] bg-white/85 p-8 text-center shadow-[0_22px_60px_rgba(28,54,86,0.12)] backdrop-blur">
              <p className="text-lg font-semibold text-red-800">Unable to load products</p>
              <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-[32px] bg-white/85 p-8 text-center shadow-[0_22px_60px_rgba(28,54,86,0.12)] backdrop-blur">
              <p className="font-display text-3xl font-semibold text-slate-900">No products available yet</p>
              <p className="mt-3 text-sm text-slate-600">Check back soon for new bracelets!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <div
                  key={product._id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <ProductCard product={product} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <AboutSection />
      <Footer />

      <CartDrawer
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onQuantityChange={updateCartQuantity}
        onRemove={removeFromCart}
      />

      <a
        href="https://wa.me/923153661866?text=Hi%20Sparkle%20Beads%20Lover%2C%20I%20want%20to%20order%20a%20bracelet."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#36d46f,#1eb85b)] text-white shadow-[0_20px_40px_rgba(37,211,102,0.38)] transition-all duration-300 hover:scale-110 hover:shadow-[0_24px_48px_rgba(37,211,102,0.46)] animate-float-gentle"
      >
        <FaWhatsapp className="text-3xl" aria-hidden="true" />
      </a>
    </main>
  );
}
