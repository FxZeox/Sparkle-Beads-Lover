'use client';

import { Product } from '@/types';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const canPortal = typeof document !== 'undefined';
  const modalDescription =
    product.description?.trim() ||
    'A handcrafted piece designed with care for a graceful, elegant look.';

  useEffect(() => {
    // Prevent background scroll to avoid visual jump/flicker when modal opens.
    if (!showModal) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showModal]);

  return (
    <div className="group relative mx-auto flex w-full max-w-none flex-col overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,243,236,0.95))] shadow-[0_18px_40px_rgba(28,54,86,0.11)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_54px_rgba(28,54,86,0.16)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.3)] sm:max-w-[320px] sm:rounded-[30px]">
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#d8b15b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-4 bottom-8 h-20 w-20 rounded-full bg-[#6ca6dd]/12 blur-3xl" />

      <div
        className="relative h-36 w-full cursor-zoom-in overflow-hidden bg-slate-100 min-[430px]:h-40 sm:h-52"
        onClick={() => {
          setModalImageLoaded(false);
          setShowModal(true);
        }}
      >
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">💎</div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,26,45,0.18)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col gap-2 p-3 sm:gap-2.5 sm:p-5">
        <div>
          <h3 className="product-card-title font-display text-[1.02rem] font-semibold leading-[1.18] break-words transition-colors min-[430px]:text-[1.14rem] sm:text-[1.5rem]">
            {product.name}
          </h3>
        </div>

        <div className="flex items-end justify-between gap-2 pt-0.5">
          <div>
            <p className="product-card-label text-[0.58rem] font-semibold uppercase tracking-[0.26em] min-[430px]:text-[0.64rem]">Price</p>
            <span className="mt-0.5 block font-display text-[1.38rem] font-semibold text-[#c4953d] min-[430px]:text-[1.55rem] sm:text-[2rem]">
              Rs {product.price.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-1 w-full rounded-full bg-[linear-gradient(135deg,#244f82,#d6aa4f)] px-3 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_26px_rgba(36,79,130,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(36,79,130,0.28)] active:scale-[0.98] min-[430px]:text-xs sm:px-4 sm:py-3"
        >
          Add to Cart
        </button>
      </div>

      {canPortal &&
        showModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-[30px] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid max-h-[90vh] grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
                <div className="relative flex min-h-[260px] items-center justify-center bg-[#f7f3eb] p-4 sm:min-h-[320px] sm:p-6">
                  {!modalImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d8b15b]/25 border-t-[#d8b15b]" />
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    draggable={false}
                    className={`cursor-zoom-out object-contain p-4 select-none transition-opacity duration-200 sm:p-6 ${
                      modalImageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setModalImageLoaded(true)}
                    onError={() => {
                      setImageError(true);
                      setModalImageLoaded(true);
                    }}
                  />
                </div>
                <div className="flex max-h-[48vh] flex-col gap-5 overflow-y-auto p-5 sm:max-h-[42vh] sm:p-7 md:max-h-[90vh]">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
                      Product Details
                    </p>
                    <h3 className="product-card-title mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {modalDescription}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Price</p>
                    <p className="mt-1 font-display text-4xl font-semibold text-[#c4953d] sm:text-5xl">
                      Rs {product.price.toLocaleString()}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        onAddToCart(product);
                        setShowModal(false);
                      }}
                      className="mt-5 w-full rounded-full bg-[linear-gradient(135deg,#244f82,#d6aa4f)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(36,79,130,0.22)] transition-all hover:-translate-y-0.5"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(false);
                }}
                className="absolute right-3 top-3 rounded-full bg-white p-2.5 shadow-lg transition-all hover:bg-gray-200 sm:right-4 sm:top-4"
                title="Close"
                aria-label="Close image"
              >
                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
