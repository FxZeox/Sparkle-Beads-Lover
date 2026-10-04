'use client';

import HeroCarousel from './HeroCarousel';
import { Product } from '@/types';

interface HeroSectionProps {
  products: Product[];
  loading: boolean;
}

export default function HeroSection({ products, loading }: HeroSectionProps) {
  const featuredCount = loading ? 'Fresh arrivals' : `${Math.max(products.length, 6)}+ unique styles`;

  return (
    <section id="home" className="relative isolate overflow-hidden pb-14 sm:pb-18 lg:pb-22">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_20%_20%,rgba(108,166,221,0.26),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(216,177,91,0.2),transparent_22%),linear-gradient(180deg,rgba(255,253,248,0.98),rgba(255,249,239,0.82)_42%,rgba(243,247,251,0.42)_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(75,130,182,0.22),transparent_27%),radial-gradient(circle_at_80%_0%,rgba(216,177,91,0.12),transparent_23%),linear-gradient(180deg,#0d1422,#111a2a_55%,transparent_100%)]" />
      <div className="absolute left-[8%] top-24 -z-10 h-24 w-24 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-[10%] top-16 -z-10 h-40 w-40 rounded-full bg-[#d8b15b]/20 blur-3xl" />

      <div className="w-full">
        <div className="animate-fade-up">
          <HeroCarousel products={products} loading={loading} />
        </div>

        <div className="mx-auto mt-8 max-w-[1100px] px-4 animate-fade-up text-center sm:px-6 lg:px-8" style={{ animationDelay: '100ms' }}>
          <div className="mb-5 inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-slate-600 shadow-[0_12px_30px_rgba(25,48,78,0.08)] backdrop-blur">
            Handcrafted Luxury
          </div>

          <h2 className="font-display text-[3rem] font-semibold leading-[0.95] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-[6rem]">
            Bracelets that feel soft, polished, and unforgettable.
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/923153661866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f4f88,#d8b15b)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_38px_rgba(31,79,136,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(31,79,136,0.3)] active:scale-95"
            >
              Shop on WhatsApp
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-white/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 shadow-[0_14px_32px_rgba(25,48,78,0.1)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Collection
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-[28px] bg-white/90 px-5 py-4 shadow-[0_18px_40px_rgba(25,48,78,0.09)] backdrop-blur">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Collection</p>
              <p className="mt-2 font-display text-2xl font-semibold text-slate-900">{featuredCount}</p>
            </div>
            <div className="rounded-[28px] bg-white/90 px-5 py-4 shadow-[0_18px_40px_rgba(25,48,78,0.09)] backdrop-blur">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Crafted</p>
              <p className="mt-2 font-display text-2xl font-semibold text-slate-900">By hand</p>
            </div>
            <div className="rounded-[28px] bg-white/90 px-5 py-4 shadow-[0_18px_40px_rgba(25,48,78,0.09)] backdrop-blur">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Style</p>
              <p className="mt-2 font-display text-2xl font-semibold text-slate-900">Blue & Gold</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
