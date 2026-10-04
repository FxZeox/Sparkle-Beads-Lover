"use client";

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_15%_25%,rgba(216,177,91,0.08),transparent_24%),radial-gradient(circle_at_85%_70%,rgba(108,166,221,0.12),transparent_28%)]" />
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-slate-500 dark:text-slate-400">
            Our Story
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            About Sparkle Beads Lover
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Artisan craftsmanship meets modern design in every bracelet
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="relative flex justify-center">
            <div className="absolute inset-x-12 top-6 -z-10 h-full rounded-[36px] bg-white/55 blur-2xl" />
            <div className="relative h-80 w-full max-w-[520px] overflow-hidden rounded-[34px] bg-white/80 shadow-[0_24px_60px_rgba(25,48,78,0.14)] sm:h-[420px]">
              <Image
                src="/brand-images/full"
                alt="Sparkle Beads Lover full showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                unoptimized
              />
            </div>

            <div className="animate-float-gentle absolute bottom-4 left-2 rounded-[24px] bg-white/88 px-5 py-4 shadow-[0_18px_40px_rgba(25,48,78,0.12)] backdrop-blur sm:left-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Craftsmanship</p>
              <p className="mt-2 font-display text-2xl font-semibold text-slate-900">Made with care</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Our Story</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Sparkle Beads Lover was founded with a passion for creating beautiful, high-quality bracelets that bring joy to people&apos;s lives. Every piece is handcrafted with attention to detail and love.
              </p>
            </div>

            <div>
              <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Why Choose Us</h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                <li className="rounded-[28px] bg-white/90 px-5 py-5 shadow-[0_18px_40px_rgba(25,48,78,0.1)]">
                  <span className="text-sm font-bold text-[#d8b15b]">01</span>
                  <p className="mt-3 text-sm leading-6 text-slate-700">Handcrafted with premium materials</p>
                </li>
                <li className="rounded-[28px] bg-white/90 px-5 py-5 shadow-[0_18px_40px_rgba(25,48,78,0.1)]">
                  <span className="text-sm font-bold text-[#d8b15b]">02</span>
                  <p className="mt-3 text-sm leading-6 text-slate-700">Unique designs created with care</p>
                </li>
                <li className="rounded-[28px] bg-white/90 px-5 py-5 shadow-[0_18px_40px_rgba(25,48,78,0.1)]">
                  <span className="text-sm font-bold text-[#d8b15b]">03</span>
                  <p className="mt-3 text-sm leading-6 text-slate-700">Fast and reliable delivery</p>
                </li>
                <li className="rounded-[28px] bg-white/90 px-5 py-5 shadow-[0_18px_40px_rgba(25,48,78,0.1)]">
                  <span className="text-sm font-bold text-[#d8b15b]">04</span>
                  <p className="mt-3 text-sm leading-6 text-slate-700">Excellent customer service</p>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/923153661866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f4f88,#d8b15b)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_38px_rgba(31,79,136,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(31,79,136,0.3)] active:scale-95"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
