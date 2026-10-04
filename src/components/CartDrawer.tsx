'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Product } from '@/types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CHECKOUT_WHATSAPP_NUMBER = '923153661866';

export default function CartDrawer({
  items,
  isOpen,
  onClose,
  onQuantityChange,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const checkoutOnWhatsApp = () => {
    if (items.length === 0) return;

    const orderLines = items.map((item, index) => {
      const lineTotal = item.product.price * item.quantity;
      return `${index + 1}. ${item.product.name}\nQuantity: ${item.quantity} x Rs ${item.product.price.toLocaleString()} = Rs ${lineTotal.toLocaleString()}`;
    });

    const message = [
      'Assalam-o-Alaikum Sparkle Beads Lover!',
      '',
      'I would like to place this order:',
      '',
      ...orderLines.flatMap((line) => [line, '']),
      `Total Bill: Rs ${total.toLocaleString()}`,
      '',
      'Please confirm availability and delivery details. Thank you!',
    ].join('\n');

    window.open(
      `https://wa.me/${CHECKOUT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close cart"
      />

      <aside className="relative flex h-full w-full max-w-md flex-col bg-[#fffdf8] shadow-[-24px_0_70px_rgba(15,28,49,0.22)] animate-fade-soft">
        <div className="flex items-center justify-between px-5 py-5 sm:px-6">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
              Your Selection
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-slate-900">
              Shopping Cart
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-slate-700 shadow-[0_10px_24px_rgba(25,48,78,0.1)] hover:bg-slate-50"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ead7] text-3xl">
              🛍️
            </div>
            <h3 className="mt-5 font-display text-3xl font-semibold text-slate-900">
              Your cart is empty
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Add your favorite bracelets and come back here to checkout on WhatsApp.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 pb-5 sm:px-6">
              {items.map((item) => (
                <article
                  key={item.product._id}
                  className="flex gap-4 rounded-[24px] bg-white p-3 shadow-[0_14px_34px_rgba(25,48,78,0.09)]"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[18px] bg-slate-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-tight text-slate-900">
                      {item.product.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#b9872e]">
                      Rs {item.product.price.toLocaleString()}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded-full bg-[#f7f1e6] p-1">
                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.product._id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-slate-700 hover:bg-white"
                          aria-label={`Decrease ${item.product.name} quantity`}
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.product._id, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-slate-700 hover:bg-white"
                          aria-label={`Increase ${item.product.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.product._id)}
                        className="text-xs font-semibold text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="bg-white/90 px-5 py-5 shadow-[0_-14px_34px_rgba(25,48,78,0.08)] backdrop-blur sm:px-6">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Total Bill
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Delivery charges confirmed on WhatsApp</p>
                </div>
                <p className="font-display text-3xl font-semibold text-[#b9872e]">
                  Rs {total.toLocaleString()}
                </p>
              </div>
              <button
                type="button"
                onClick={checkoutOnWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#25D366,#159447)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(37,211,102,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(37,211,102,0.36)]"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" />
                Checkout on WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
