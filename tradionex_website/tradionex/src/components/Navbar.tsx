"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background and text color based on route and scroll state
  const isTransparent = isHome && !scrolled;
  const navClass = isTransparent 
    ? "fixed top-0 z-50 w-full bg-transparent border-b border-white/10 transition-all duration-300"
    : "fixed top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-300 shadow-sm";
  
  const textClass = isTransparent ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black";
  const logoClass = isTransparent ? "text-white" : "text-gray-900";
  const chevronClass = isTransparent ? "text-white/70 group-hover:text-white" : "text-gray-400 group-hover:text-black";

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-bold tracking-tight transition-colors ${logoClass}`}>
              Tradionex<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 h-full">
            <Link href="/" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              Home
            </Link>
            
            <Link href="/about" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              About Us
            </Link>

            {/* Industrial Minerals Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className={`inline-flex items-center text-sm font-medium transition-colors focus:outline-none ${textClass}`}>
                Industrial Minerals
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform group-hover:rotate-180 ${chevronClass}`} />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100 py-3">
                <div className="flex flex-col">
                  {['China Clay', 'Natural Garnet', 'Quartz', 'Feldspar', 'Bentonite', 'Talc', 'Mica'].map((mineral) => (
                    <Link 
                      key={mineral}
                      href={`/minerals/${mineral.toLowerCase().replace(' ', '-')}`} 
                      className="px-5 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      {mineral}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className={`inline-flex items-center text-sm font-medium transition-colors focus:outline-none ${textClass}`}>
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform group-hover:rotate-180 ${chevronClass}`} />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100 py-3">
                <div className="flex flex-col">
                  {['Natural Stone', 'Indian Spices', 'Basmati Rice', 'Non-Basmati Rice'].map((product) => (
                    <Link 
                      key={product}
                      href={`/products/${product.toLowerCase().replace(' ', '-')}`} 
                      className="px-5 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/application" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              Application
            </Link>
            <Link href="/gallery" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              Gallery
            </Link>
            <Link href="/career" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              Career
            </Link>
            <Link href="/blog" className={`inline-flex items-center text-sm font-medium transition-colors ${textClass}`}>
              Blog
            </Link>
          </nav>

          {/* Contact CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle isTransparent={isTransparent} />
            <Link 
              href="/contact" 
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-colors shadow-sm ${isTransparent ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'}`}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
