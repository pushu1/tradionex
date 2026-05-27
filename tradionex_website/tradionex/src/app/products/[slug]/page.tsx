import { productsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Globe2, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">
      {/* Dynamic Hero */}
      <section className="bg-gray-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Export Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{product.name}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">{product.name}</h1>
          <p className="text-xl text-gray-300 font-light">{product.tagline}</p>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Description */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Global Export Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-10">
              {product.description}
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
              <Globe2 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Primary Global Markets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Sidebar */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 h-fit">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">Export Specifications</h3>
            <ul className="space-y-4 mb-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex flex-col mb-4 last:mb-0">
                  <span className="text-gray-500 dark:text-gray-400 text-sm capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{value}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gray-900 dark:bg-black p-6 rounded-xl border border-gray-800 dark:border-gray-800 text-center">
              <p className="text-sm text-gray-300 mb-4 font-medium">Ready to discuss bulk orders and CIF pricing?</p>
              <Link href="/contact" className="inline-block w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Sales Team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
