import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";


export default function HomePage() {
  const mineralGlimpses = [
    { name: "China Clay (Kaolin)", slug: "china-clay", image: "/ChinaClay.jpg", desc: "Tradionex offer their customers a wide range of quality products. We offer China Clay(Kaolin)." },
    { name: "Quartz", slug: "quartz", image: "/Quartz.jpg", desc: "Tradionex offer their customers a wide range of products. We offer Quartz Silica Sand which is mainly used for the Glassmaking industry." },
    { name: "Bentonite", slug: "bentonite", image: "/Bentonite.jpg", desc: "Tradionex offer their customers a wide range of quality products. Bentonite is used as libricator / thickener for drilling fluids." },
    { name: "Feldspar", slug: "feldspar", image: "/Feldspar.jpg", desc: "Tradionex offer their customers a wide range of quality products. We offer Feldspar according to our customer manufacturing requirements." },
  ];

  const productGlimpses = [
    { name: "Natural Stone", slug: "natural-stone", desc: "Tradionex sources and processes premium Natural Stones directly from the finest Indian quarries." },
    { name: "Basmati Rice", slug: "basmati-rice", desc: "Indian Basmati is one such product which is infused in numerous cultures worldwide. In this section, you will find the finest selection of Basmati Rice." },
    { name: "Indian Spices", slug: "indian-spices", desc: "A spice is a seed, fruit, root, bark, or other plant substance primarily used for flavoring or coloring food." },
  ];

  return (
    <div className="min-h-screen">
      {/* Horizon-style Hero Section */}
      <section className="relative h-screen w-full flex items-end pb-12 md:pb-24 pt-32 overflow-hidden bg-gray-900">

        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/LargeCardamom.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>
        </div>

        {/* Giant Background Typography */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[12vw] font-bold text-[#E5D3C1] opacity-60 tracking-tighter mix-blend-overlay mt-[-10vh]">
            TRADIONEX
          </h1>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full pl-4 sm:pl-6 lg:pl-16 flex flex-col md:flex-row items-end justify-between gap-12">

          {/* Left Text Box */}
          <div className="w-full md:w-1/3 pr-4 md:pr-0 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The World <br /> Of Excellence
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
              Unlock the perfect industrial experience by exploring a diverse selection of premium export materials.
            </p>
          </div>

          {/* Right Cards Carousel */}
          <div className="w-full md:w-2/3 flex space-x-4 overflow-x-auto pb-6 snap-x hide-scrollbar pr-8 pl-4 md:pl-0">

            {/* Card 1 */}

            <Link href="/products/natural-stone" className="flex-shrink-0 w-72 h-[350px] md:h-[400px] rounded-3xl bg-gray-800 overflow-hidden snap-start relative group shadow-2xl">
              <img src="/NaturalStones.jpg" alt="Natural Stone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-2xl mb-1">Natural Stone</h3>
                {/* <p className="text-gray-300 text-sm">Architectural Export</p> */}
              </div>
            </Link>

            {/* Card 2 */}

            <Link href="/products/indian-spices" className="flex-shrink-0 w-72 h-[350px] md:h-[400px] rounded-3xl bg-gray-800 overflow-hidden snap-start relative group shadow-2xl">
              <img src="/Spices.jpg" alt="Spices" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-2xl mb-1">Spices</h3>
                {/* <p className="text-gray-300 text-sm">High Purity Minerals</p> */}
              </div>
            </Link>


            {/* Card 3 */}
            <Link href="/products/basmati-rice" className="flex-shrink-0 w-72 h-[350px] md:h-[400px] rounded-3xl bg-gray-800 overflow-hidden snap-start relative group shadow-2xl">
              <img src="/BasmatiRice.jpg" alt="Basmati Rice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-2xl mb-1">Basmati Rice</h3>
                {/* <p className="text-gray-300 text-sm">Premium Agriculture</p> */}
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/products/non-basmati-rice" className="flex-shrink-0 w-72 h-[350px] md:h-[400px] rounded-3xl bg-gray-800 overflow-hidden snap-start relative group shadow-2xl">
              <img src="/NonBasmatiRice.jpg" alt="Non-Basmati Rice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-2xl mb-1">Non-Basmati Rice</h3>
                {/* <p className="text-gray-300 text-sm">Industrial Minerals</p> */}
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Catalogue Glimpse Section */}
      <section id="catalogue" className="py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Industrial Minerals</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">The foundation of modern manufacturing, extracted and processed to perfection.</p>
              </div>
              <Link
                href="/application"
                className="hidden md:inline-flex items-center text-[#241c66] font-semibold hover:text-[#fa7719] transition-colors duration-300"
              >
                View All Applications <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mineralGlimpses.map((item) => (
                <Link key={item.slug} href={`/minerals/${item.slug}`} className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

                  <div className="h-48 relative overflow-hidden">

                    <img
                      src={item.image || "/IndustrialMinerals.jpg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#fa7719] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-[#241c66] group-hover:text-[#fa7719] transition-colors duration-300">
                      View Specifications <ArrowRight className="ml-1.5 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#241c66] hover:text-[#fa7719] transition-colors duration-300 mb-4 tracking-tight">
                  Export Products
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">Premium agricultural goods and architectural natural stones.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productGlimpses.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <CheckCircle2 className="w-8 h-8 text-[#241c66] mb-4 opacity-50 group-hover:opacity-100 transition-all duration-300" />
                    <h3 className="text-2xl font-bold text-[#241c66] mb-3 group-hover:text-[#fa7719] transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                    <span className="inline-flex items-center font-semibold text-[#241c66] group-hover:text-[#fa7719] transition-colors duration-300">
                      Explore Product <ArrowRight className="ml-1.5 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Core Values / Features Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241c66] mb-4 tracking-tight">The Tradionex Advantage</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Delivering purity, consistency, and reliability across borders. We adhere to stringent international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <Globe2 className="w-10 h-10 text-[#241c66] mb-6 group-hover:text-[#fa7719] transition-colors" />

              <h3 className="text-xl font-bold text-[#241c66] mb-3 group-hover:text-[#fa7719] transition-colors">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our logistics network spans across continents, ensuring timely and secure delivery of raw materials to your manufacturing facilities worldwide.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-10 h-10 text-[#241c66] mb-6 group-hover:text-[#fa7719] transition-colors" />

              <h3 className="text-xl font-bold text-[#241c66] mb-3 group-hover:text-[#fa7719] transition-colors">
                Uncompromising Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From extraction to processing, every batch is subjected to rigorous quality control to meet ISO 9001:2015 standards and phytosanitary requirements.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <Factory className="w-10 h-10 text-[#241c66] mb-6 group-hover:text-[#fa7719] transition-colors" />

              <h3 className="text-xl font-bold text-[#241c66] mb-3 group-hover:text-[#fa7719] transition-colors">
                Scale & Capacity
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you need bulk shipments of Bentonite or premium Basmati Rice, our massive production capacity guarantees steady supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#241c66] mb-6">Ready to secure your supply chain?</h2>
          <p className="text-xl text-black mb-10 font-light">
            Contact our B2B sales team today for bulk pricing, material safety data sheets, and custom export quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-[#241c66] text-white font-bold rounded-full hover:bg-[#fa7719] hover:text-white transition-all duration-300 shadow-xl">
            Request a Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
