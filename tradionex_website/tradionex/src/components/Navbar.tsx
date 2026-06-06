"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMinerals, setShowMinerals] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background and text color based on route and scroll state
  const isTransparent = isHome && !scrolled;
  const navClass =
    "fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm";
  const textClass =
    "text-black hover:text-[#fa7719] font-semibold tracking-wide";
  const logoClass = "text-white";
  const chevronClass =
    "text-gray-500 group-hover:text-[#fa7719]";

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="/Tradionex.png"
                alt="Tradionex"
                width="180"
                height="60"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 h-full">
            <Link href="/" className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors ${textClass}`}>
              Home
            </Link>

            <Link href="/about" className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors ${textClass}`}>
              About Us
            </Link>

            <Link
              href="/garnet"
              className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors ${textClass}`}
            >
              Garnet
            </Link>

            {/* Industrial Minerals Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors focus:outline-none ${textClass}`}>
                Industrial Minerals
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform group-hover:rotate-180 ${chevronClass}`} />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100 py-3">
                <div className="flex flex-col">
                  {['China Clay', 'Quartz', 'Feldspar', 'Bentonite', 'Talc', 'Mica'].map((mineral) => (
                    <Link
                      key={mineral}
                      href={`/minerals/${mineral.toLowerCase().replace(' ', '-')}`}
                      className="px-5 py-2.5 text-sm text-gray-600 hover:text-[#fa7719] hover:bg-gray-50 transition-colors"                    >
                      {mineral}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors focus:outline-none ${textClass}`}>
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform group-hover:rotate-180 ${chevronClass}`} />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100 py-3">
                <div className="flex flex-col">
                  {['Natural Stone', 'Indian Spices', 'Basmati Rice', 'Non-Basmati Rice'].map((product) => (
                    <Link
                      key={product}
                      href={`/products/${product.toLowerCase().replace(' ', '-')}`}
                      className="px-5 py-2.5 text-sm text-gray-600 hover:text-[#fa7719] hover:bg-gray-50 transition-colors"                    >
                      {product}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/application" className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors ${textClass}`}>
              Application
            </Link>
            <Link href="/blog" className={`inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors ${textClass}`}>
              Blog
            </Link>
          </nav>

          {/* Contact CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle isTransparent={isTransparent} />
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm bg-white text-[#241c66] hover:bg-[#fa7719] hover:text-[#241c66]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center relative z-[999999]">
            <button
              className="relative z-[999999] text-[#241c66]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>


        </div>


        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="flex flex-col py-4">

              <Link
                href="/"
                className="px-6 py-3 text-[#241c66] hover:text-[#fa7719] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 text-[#241c66] hover:text-[#fa7719] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>


              <Link
                href="/garnet"
                className="px-6 py-3 text-[#241c66] hover:text-[#fa7719] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Garnet
              </Link>

              <button
                onClick={() => setShowMinerals(!showMinerals)}
                className="px-6 py-3 text-left text-[#241c66] font-medium"
              >
                Industrial Minerals
              </button>

              {showMinerals && (
                <div className="pl-10 flex flex-col gap-2 pb-2">
                  <Link href="/minerals/china-clay">China Clay</Link>
                  <Link href="/minerals/quartz">Quartz</Link>
                  <Link href="/minerals/feldspar">Feldspar</Link>
                  <Link href="/minerals/bentonite">Bentonite</Link>
                  <Link href="/minerals/talc">Talc</Link>
                  <Link href="/minerals/mica">Mica</Link>
                </div>
              )}


              <button
                onClick={() => setShowProducts(!showProducts)}
                className="px-6 py-3 text-left text-[#241c66] font-medium"
              >
                Products
              </button>

              {showProducts && (
                <div className="pl-10 flex flex-col gap-2 pb-2">
                  <Link href="/products/natural-stone">Natural Stone</Link>
                  <Link href="/products/indian-spices">Indian Spices</Link>
                  <Link href="/products/basmati-rice">Basmati Rice</Link>
                  <Link href="/products/non-basmati-rice">Non-Basmati Rice</Link>
                </div>
              )}

              <Link
                href="/application"
                className="px-6 py-3 text-[#241c66] hover:text-[#fa7719] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Application
              </Link>

              <Link
                href="/blog"
                className="px-6 py-3 text-[#241c66] hover:text-[#fa7719] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="mx-6 mt-4 text-center py-3 rounded-full bg-[#241c66] text-white hover:bg-[#fa7719] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

            </div>
          </div>
        )}



      </div>
    </header>
  );
}
