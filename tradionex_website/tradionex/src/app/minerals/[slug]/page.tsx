import { mineralsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Factory, ChevronRight, Check } from "lucide-react";

export async function generateStaticParams() {
  return mineralsData.map((mineral) => ({
    slug: mineral.slug,
  }));
}

export default async function MineralPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const mineral = mineralsData.find(m => m.slug === resolvedParams.slug);

  if (!mineral) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">
      {/* Dynamic Hero with Background Image */}
      <section
        className="relative py-32 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
        <div
          className="absolute inset-0 z-10 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${mineral.heroImage || mineral.imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black/30 z-20"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-30">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Industrial Minerals</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{mineral.name}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{mineral.name}</h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">{mineral.tagline}</p>
          
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Description */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Product Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-10">
                {mineral.description}
              </p>

              {/* Quality Image Glimpse */}
              <div className="w-full h-64 rounded-xl overflow-hidden mb-10 shadow-sm border border-gray-100 dark:border-gray-800">
                <img src={mineral.imageUrl} alt={mineral.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <Factory className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />

                {mineral.slug === "natural-garnet"
                  ? "We have all sizes available"
                  : "Key Industrial Applications"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mineral.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{app}</span>
                  </div>
                ))}
              </div>

              {mineral.slug === "natural-garnet" && (
                <div className="mt-8 grid md:grid-cols-2 gap-6">

                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border">
                    <h3 className="text-lg font-bold mb-4">
                      Packaging & Supply
                    </h3>

                    <ul className="space-y-2">
                      <li>• 25 kg bags / Jumbo bags (1 MT)</li>
                      <li>• Bulk export shipments</li>
                      <li>• Consistent supply capability</li>
                      <li>• India & UAE controlled sourcing network</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border">
                    <h3 className="text-lg font-bold mb-4">
                      Export Markets
                    </h3>

                    <ul className="space-y-2">
                      <li>• Middle East (UAE, Oman, Saudi Arabia, Qatar)</li>
                      <li>• Asia (Vietnam, Malaysia, Indonesia)</li>
                      <li>• Africa and other global markets</li>
                    </ul>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Quality Index Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {mineral.slug === "quartz"
                  ? "Chemical Analysis Report"
                  : mineral.slug === "natural-garnet"
                    ? "AVERAGE CHEMICAL COMPOSITION (Typical)"
                    : mineral.slug === "feldspar"
                      ? "Sodium Feldspar Test Report"
                      : mineral.slug === "bentonite"
                        ? "API Test Reports"
                        : "Quality Index"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">Verified Technical Specifications</p>
              {mineral.slug !== "bentonite" && (
                <ul className="space-y-4 mb-8">
                  {mineral.qualityIndex?.map((spec, idx) => (
                    <li key={idx} className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">{spec.label}</span>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}


              {mineral.slug === "feldspar" && (
                <>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Chemical Analysis
                  </h4>

                  <ul className="space-y-4 mb-6">
                    {(mineral as any).sodiumReport?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {spec.label}
                        </span>

                        <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h5 className="font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
                    Physical Properties
                  </h5>

                  <ul className="space-y-4 mb-6">
                    {(mineral as any).sodiumPhysical?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {spec.label}
                        </span>

                        <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-6" />

                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Potassium Feldspar Test Report
                  </h4>

                  <ul className="space-y-4 mb-6">
                    {(mineral as any).potassiumReport?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {spec.label}
                        </span>

                        <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h5 className="font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
                    Physical Properties
                  </h5>

                  <ul className="space-y-4 mb-6">
                    {(mineral as any).potassiumPhysical?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {spec.label}
                        </span>

                        <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {mineral.slug === "bentonite" && (
                <>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                    API 13 A Section 9
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {(mineral as any).api13Section9?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 text-sm">{spec.property}</span>
                        <span className="font-semibold">{spec.specification}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-6" />

                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                    API 13 A Section 11 (OCMA)
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {(mineral as any).api13Section11?.map((spec: any, idx: number) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-gray-500 text-sm">{spec.property}</span>
                        <span className="font-semibold">{spec.specification}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="bg-gray-900 dark:bg-black p-6 rounded-xl border border-gray-800 dark:border-gray-800 text-center shadow-inner">
                <p className="text-sm text-gray-300 mb-4 font-medium"> If you need any other grade/usage please contact us, So we will share the specs and pricing quick accordingly.</p>
                <Link href="/contact" className="inline-block w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
