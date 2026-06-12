import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-2">
              <img
                src="/Tradinax2.png"
                alt="Tradionex"
                className="w-50 h-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 hover:text-[#fa7719] transition-colors duration-300 cursor-pointer">
              Global excellence in industrial minerals and agricultural export. We deliver purity and scale to the world's most demanding industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[#fa7719] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/career" className="hover:text-[#fa7719] transition-colors duration-300">Careers</Link></li>
              <li><Link href="/gallery" className="hover:text-[#fa7719] transition-colors duration-300">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#fa7719] transition-colors duration-300">Insights & News</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Export Catalogue</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/minerals/kaolin" className="hover:text-[#fa7719] transition-colors duration-300">Industrial Minerals</Link></li>
              <li><Link href="/products/natural-stone" className="hover:text-[#fa7719] transition-colors duration-300">Natural Stones</Link></li>
              <li><Link href="/products/basmati-rice" className="hover:text-[#fa7719] transition-colors duration-300">Agricultural Products</Link></li>
              <li><Link href="/application" className="hover:text-[#fa7719] transition-colors duration-300">Industry Applications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="hover:text-[#fa7719] transition-colors duration-300 cursor-pointer">Office No. 903 Dusseldorf Business Point, Al Barsha 1 Dubai</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="hover:text-[#fa7719] transition-colors duration-300 cursor-pointer">+9715 680 39829</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="hover:text-[#fa7719] transition-colors duration-300 cursor-pointer">sales@tradionex.com</span>
              </li>
            </ul>

            <div className="mt-6">
  <div className="flex gap-3">

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-[#fa7719] transition-all duration-300"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-[#fa7719] transition-all duration-300"
    >
      <FaFacebookF size={20} />
    </a>

    <a
      href="https://x.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-[#fa7719] transition-all duration-300"
    >
      <FaXTwitter size={20} />
    </a>

    <a
      href="https://www.linkedin.com/company/tradionex-fze/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-[#fa7719] transition-all duration-300"
    >
      <FaLinkedinIn size={20} />
    </a>

  </div>
</div>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tradionex. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
