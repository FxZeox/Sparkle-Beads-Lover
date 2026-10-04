'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingBag } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/40 bg-[linear-gradient(180deg,rgba(255,253,248,0.92),rgba(255,249,239,0.78))] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(13,20,34,0.95),rgba(17,26,42,0.9))]">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-[78px]">
            <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 transition hover:opacity-90 sm:gap-3.5">
            <Image
              src="/brand-images/logo"
              alt="Sparkle Beads Lover logo"
              width={54}
              height={54}
              className="h-11 w-11 shrink-0 object-contain sm:h-[58px] sm:w-[58px]"
              priority
              unoptimized
            />
            <h1 className="font-display min-w-0 truncate text-xl font-semibold leading-none tracking-[0.03em] text-slate-900 dark:text-white sm:text-[2rem]">
              Sparkle Beads Lover
            </h1>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <Link href="#home" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)] dark:text-slate-200">
              Home
              </Link>
              <Link href="#products" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)] dark:text-slate-200">
              Products
              </Link>
              <Link href="#about" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)] dark:text-slate-200">
              About
              </Link>
              <Link href="#contact" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)] dark:text-slate-200">
              Contact
              </Link>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onCartOpen}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-[0_10px_24px_rgba(25,48,78,0.1)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1f4f88] sm:h-11 sm:w-11"
                aria-label={`Open cart with ${cartCount} items`}
              >
                <FaShoppingBag className="text-base sm:text-lg" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6a94d] px-1 text-[10px] font-bold text-white shadow-md">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col gap-1.5 p-2 md:hidden"
                aria-label="Toggle navigation menu"
              >
              <span
                className={`h-0.5 w-6 bg-slate-700 transition-all dark:bg-white ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              />
              <span
                className={`h-0.5 w-6 bg-slate-700 transition-all dark:bg-white ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              />
              <span
                className={`h-0.5 w-6 bg-slate-700 transition-all dark:bg-white ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              />
              </button>
            </div>
        </div>

        {isMenuOpen && (
          <div className="pb-4 md:hidden">
              <div className="border-t border-slate-200/70 bg-white/55 px-1 pt-3 backdrop-blur">
                <Link
                  href="#home"
                  className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#products"
                  className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white/85 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(25,48,78,0.08)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
          </div>
        )}
      </div>
    </nav>
  );
}
