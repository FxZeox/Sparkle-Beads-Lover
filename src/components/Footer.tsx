import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(145deg,#10203a,#18375f,#0f1c31)] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,166,221,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(216,177,91,0.16),transparent_24%)]" />
      <div className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-white/55">Sparkle Beads Lover</p>
              <h3 className="font-display text-5xl font-semibold leading-none text-white sm:text-6xl">Handcrafted sparkle, styled softly.</h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/72">Handcrafted bracelets made with passion and premium materials. Each piece is unique and designed to complement your personal style.</p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b15b]">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-sm font-medium text-white/72 transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm font-medium text-white/72 transition hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm font-medium text-white/72 transition hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm font-medium text-white/72 transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b15b]">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-lg">📱</span>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+923153661866" className="text-sm font-medium text-white/72 transition hover:text-white">
                      +92 315 3661866
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-lg">📧</span>
                  <a href="mailto:info@sparklebeat.com" className="text-sm font-medium text-white/72 transition hover:text-white">
                    sparklebeat@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b15b]">Follow Us</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.tiktok.com/@sparklebeads35?_r=1&_t=ZS-94Hlo4aMPEw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white/8 px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/14 hover:text-white"
                >
                  <SiTiktok className="text-lg" aria-hidden="true" />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.instagram.com/sparklebeads35?igsh=MWc4NHpnMjduYnJ3YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white/8 px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/14 hover:text-white"
                >
                  <FaInstagram className="text-lg" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/923153661866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white/8 px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/14 hover:text-white"
                >
                  <FaWhatsapp className="text-lg" aria-hidden="true" />
                  <span>WhatsApp: 0315 3661866</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="mt-8 text-center text-sm text-white/58 sm:mt-10">
            <p className="mb-1">© {currentYear} Sparkle Beads Lover. All rights reserved.</p>
            <p>Handcrafted bracelets with love ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
