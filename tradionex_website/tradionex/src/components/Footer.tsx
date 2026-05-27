import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
              Tradionex<span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Global excellence in industrial minerals and agricultural export. We deliver purity and scale to the world's most demanding industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Insights & News</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Export Catalogue</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/minerals/kaolin" className="hover:text-blue-400 transition-colors">Industrial Minerals</Link></li>
              <li><Link href="/products/natural-stone" className="hover:text-blue-400 transition-colors">Natural Stones</Link></li>
              <li><Link href="/products/basmati-rice" className="hover:text-blue-400 transition-colors">Agricultural Products</Link></li>
              <li><Link href="/application" className="hover:text-blue-400 transition-colors">Industry Applications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>Dubai Silicon Oasis, <br/> Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span>export@tradionex.com</span>
              </li>
            </ul>
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
