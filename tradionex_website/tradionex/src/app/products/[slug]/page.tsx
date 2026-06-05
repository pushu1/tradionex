import { productsData, subProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Globe2, ChevronRight, Check, Factory } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData.find(
    p => p.slug === resolvedParams.slug
  );

  const subProduct = subProducts.find(
    p => p.slug === resolvedParams.slug
  );

  if (!product && !subProduct) {
    notFound();
  }

  if (subProduct) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">
        {/* Dynamic Hero with Background Image */}
        <section
          className="relative py-32 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gray-900 z-0"></div>
          <div
            className="absolute inset-0 z-10 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${subProduct.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black/30 z-20"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-30">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Industrial subProduct</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{subProduct.name}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{subProduct.name}</h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">{subProduct.tagline}</p>
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
                  {subProduct.description}
                </p>
                {subProduct.slug !== "1121-basmati-rice" && 
                subProduct.slug !== "1509-basmati-rice" && 
                subProduct.slug !== "sugandha-rice" &&
                subProduct.slug !== "sharbati-rice" && 
                subProduct.slug !== "pusa-rice" &&
                subProduct.slug !== "non-basmati-rice" && (

                  subProduct.slug === "cumin-seeds" ||
                    subProduct.slug === "fenugreek-seeds" ||
                    subProduct.slug === "fennel-seeds" ||
                    subProduct.slug === "turmeric-finger" ||
                    subProduct.slug === "red-chilli" ||
                    subProduct.slug === "coriander-seeds" ||
                    subProduct.slug === "Cinnamon" ||
                    subProduct.slug === "small-cardamom" ||
                    subProduct.slug === "large-cardamom" ||
                    subProduct.slug === "fresh-ginger" ||
                    subProduct.slug === "onion" ||
                    subProduct.slug === "garam-masala" ? (
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-bold">Packing:- </span>
                      {subProduct.Packing}
                    </p>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-bold">Edges:- </span>
                      {subProduct.Edges}
                    </p>
                  )

                )}

                {subProduct.riceVarieties && (
                  <div className="space-y-16 mt-12">

                    {subProduct.riceVarieties.map((rice: any, idx: number) => (

                      <div
                        key={idx}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                      >

                        <div>
                          <img
                            src={rice.image}
                            alt={rice.title}
                            className="w-full rounded-xl shadow-lg"
                          />
                        </div>

                        <div>
                          <h2 className="text-3xl font-bold mb-4">
                            {rice.title}
                          </h2>

                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {rice.description}
                          </p>
                        </div>

                      </div>

                    ))}

                  </div>
                )}

                {/* Quality Image Glimpse */}
                <div className="w-full h-64 rounded-xl overflow-hidden mb-10 shadow-sm border border-gray-100 dark:border-gray-800">
                  <img src={subProduct.image} alt={subProduct.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {subProduct.slug !== "cumin-seeds" &&
                subProduct.slug !== "fenugreek-seeds" &&
                subProduct.slug !== "fennel-seeds" &&
                subProduct.slug !== "turmeric-finger" &&
                subProduct.slug !== "red-chilli" &&
                subProduct.slug !== "coriander-seeds" &&
                subProduct.slug !== "Cinnamon" &&
                subProduct.slug !== "small-cardamom" &&
                subProduct.slug !== "large-cardamom" &&
                subProduct.slug !== "fresh-ginger" &&
                subProduct.slug !== "onion" &&
                subProduct.slug !== "garam-masala" && 
                subProduct.slug !== "1121-basmati-rice" && 
                subProduct.slug !== "1509-basmati-rice" &&
                subProduct.slug !== "sugandha-rice" &&  
                subProduct.slug !== "sharbati-rice" &&
                subProduct.slug !== "pusa-rice" &&
                subProduct.slug !== "non-basmati-rice" && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                      <Factory className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />

                      {subProduct.slug === "kandla-grey" ||
                        subProduct.slug === "autumn-brown" ||
                        subProduct.slug === "golden-buff"
                        ? "Tiles Size in cm:-"
                        : subProduct.slug === "natural-garnet"
                          ? "We have all sizes available"
                          : "Key Industrial Applications"}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {subProduct.applications?.map((app, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {app}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              <div />


              {/* Right Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">


                  <h3 className="text-2xl font-bold mb-2">
                    {subProduct.slug === "onion"
                      ? "Sizes according to country:-"

                      : subProduct.slug === "cumin-seeds" ||
                        subProduct.slug === "fenugreek-seeds" ||
                        subProduct.slug === "fennel-seeds" ||
                        subProduct.slug === "turmeric-finger"
                        ? "Container Type"

                        : subProduct.slug === "kandla-grey" ||
                          subProduct.slug === "autumn-brown" ||
                          subProduct.slug === "golden-buff" ||
                          subProduct.slug === "rippon-buff" ||
                          subProduct.slug === "mint-white" ||
                          subProduct.slug === "raj-green" ||
                          subProduct.slug === "kota-blue" ||
                          subProduct.slug === "kota-brown"
                          ? "Thickness"

                          : "Quality Index"}
                  </h3>

                  {subProduct.slug !== "onion" && (
                    <p className="text-sm text-gray-500 mb-6">
                      {subProduct.slug === "kandla-grey" ||
                        subProduct.slug === "autumn-brown" ||
                        subProduct.slug === "golden-buff" ||
                        subProduct.slug === "rippon-buff" ||
                        subProduct.slug === "mint-white" ||
                        subProduct.slug === "raj-green" ||
                        subProduct.slug === "kota-blue" ||
                        subProduct.slug === "kota-brown"
                        ? "15mm to 50mm with a tolerance of ±5mm"
                        : "Verified Technical Specifications"}
                    </p>
                  )}

                  {(subProduct.slug === "kandla-grey" ||
                    subProduct.slug === "autumn-brown" ||
                    subProduct.slug === "golden-buff" ||
                    subProduct.slug === "rippon-buff" ||
                    subProduct.slug === "mint-white" ||
                    subProduct.slug === "raj-green" ||
                    subProduct.slug === "kota-blue" ||
                    subProduct.slug === "kota-brown") && (
                      <p className="text-sm text-gray-500 mb-6">
                        19mm to 21mm with a tolerance of ±1mm (back sides calibrated)
                      </p>
                    )}

                  {subProduct.slug === "kandla-grey" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original
                        condition with no wear and tear. This process involves good quality treated
                        crates with proper foaming and shrink wrapping to sustain all type of
                        weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Kandla Grey sandstone consists of many surface finishes & we have many
                        other colours. All that information is collected in our sandstone catalog.
                        Please share your email address or contact us so we can share our catalog
                        with you.
                      </p>

                    </div>

                  ) : subProduct.slug === "autumn-brown" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original
                        condition with no wear and tear. This process involves good quality treated
                        crates with proper foaming and shrink wrapping to sustain all type of
                        weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Autumn Brown sandstone consists of many surface finishes & we have many
                        other colours. All that information is collected in our sandstone catalog.
                        Please share your email address or contact us so we can share our catalog
                        with you.
                      </p>

                    </div>

                  ) : subProduct.slug === "golden-buff" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Golden Buff sandstone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.
                      </p>

                    </div>

                  ) : subProduct.slug === "rippon-buff" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Rippon Buff sandstone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.
                      </p>

                    </div>

                  ) : subProduct.slug === "mint-white" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Mint White sandstone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.                      </p>

                    </div>

                  ) : subProduct.slug === "raj-green" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Raj Green sandstone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.
                      </p>

                    </div>

                  ) : subProduct.slug === "kota-blue" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Kota Blue Limestone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.
                      </p>

                    </div>

                  ) : subProduct.slug === "kota-brown" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Kota Brown Limestone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.
                      </p>

                    </div>


                  ) : subProduct.slug === "kota-black" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Packing:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        We take special care in this respect to deliver the product in the original condition with no wear and tear. This process involves good quality treated crates with proper foaming and shrink wrapping to sustain all type of weather conditions.
                      </p>

                      <p className="text-gray-600 leading-relaxed">
                        <strong>Note - </strong>
                        Kota Black Limestone consists of many surface finishes & we have many other colours all that information collected in our sandstone catalog please share your email address or contact us so we can share our catalog to you.                      </p>

                    </div>

                  ) : subProduct.slug === "cumin-seeds" ? (

                    <div className="space-y-4 mb-8">

                      <h4 className="text-lg font-bold text-gray-900">
                        Container:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        20ft
                      </p>
                      <h4 className="text-lg font-bold text-gray-900">
                        Quantity:-
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        13.5MT
                      </p>
                      <h4 className="text-lg font-bold text-gray-900">
                        Container:-
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        40ft                      </p>
                      <h4 className="text-lg font-bold text-gray-900">
                        Quantity:-
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        27MT
                      </p>


                    </div>


                  ) : subProduct.slug === "onion" ? (

                    <div className="space-y-4 mb-8">


                      <p className="text-gray-600 leading-relaxed">
                        London Size 55mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        UAE Size 55mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Saudi Arabia Size 55mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Malaysia Size: 45mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Colombo Size: 45mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Bangladesh Size: 40mm+
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Vaitnam Size 30mm+
                      </p>

                    </div>



                  ) : subProduct.slug === "red-chilli" ||
                    subProduct.slug === "coriander-seeds" ||
                    subProduct.slug === "fenugreek-seeds" ||
                    subProduct.slug === "fennel-seeds" ||
                    subProduct.slug === "turmeric-finger" ||
                    subProduct.slug === "Cinnamon" ||
                    subProduct.slug === "small-cardamom" ||
                    subProduct.slug === "large-cardamom" ||
                    subProduct.slug === "fresh-ginger" ||
                    subProduct.slug === "garam-masala" || 
                    subProduct.slug === "1121-basmati-rice" ||
                    subProduct.slug === "1509-basmati-rice" ||
                    subProduct.slug === "sugandha-rice" ||
                    subProduct.slug === "sharbati-rice" ||
                    subProduct.slug === "pusa-rice" ||
                    subProduct.slug === "non-basmati-rice" ? null

                    : (

                      <div className="space-y-5 mb-8">

                        <div>
                          <p className="text-sm text-gray-500">Color</p>
                          <p className="font-semibold">{subProduct.specs.color}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Finish</p>
                          <p className="font-semibold">{subProduct.specs.finish}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Packaging</p>
                          <p className="font-semibold">{subProduct.specs.packaging}</p>
                        </div>

                      </div>

                    )}



                  <div className="bg-gray-900 p-6 rounded-xl text-center">

                    <p className="text-sm text-white mb-4">
                      If you need any other grade/usage please contact us.
                    </p>

                    <Link
                      href="/contact"
                      className="block w-full py-3 bg-blue-600 text-white rounded-lg"
                    >
                      Request a Quote
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {subProduct.slug === "feldspar" && (
            <>

              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Chemical Analysis
              </h4>

              <ul className="space-y-4 mb-6">
                {(subProduct as any).sodiumReport?.map((spec: any, idx: number) => (
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
                {(subProduct as any).sodiumPhysical?.map((spec: any, idx: number) => (
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
                {(subProduct as any).potassiumReport?.map((spec: any, idx: number) => (
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
                {(subProduct as any).potassiumPhysical?.map((spec: any, idx: number) => (
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

          {subProduct.slug === "bentonite" && (
            <>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                API 13 A Section 9
              </h4>

              <ul className="space-y-3 mb-6">
                {(subProduct as any).api13Section9?.map((spec: any, idx: number) => (
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
                {(subProduct as any).api13Section11?.map((spec: any, idx: number) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-gray-500 text-sm">{spec.property}</span>
                    <span className="font-semibold">{spec.specification}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

        </div>
      </div>
    );
  }

  if (!product) {
    return null;
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
        <div className="grid grid-cols-1 gap-8">

          {/* Main Description */}
          <div className="w-full bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            {(product as any).cards && (<>
              <h2 className="text-3xl font-bold mb-10">
                Collection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                {(product as any).cards.map((item: any) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="group"
                  >
                    <div className="relative">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-72 object-cover"
                      />

                      <div className="bg-white shadow-xl w-full p-6 relative -mt-16 z-10 min-h-[180px] flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800">
                            {item.name}
                          </h3>

                          <p className="text-gray-500 mt-2">
                            {item.type}
                          </p>
                        </div>

                        <span className="text-green-700 font-semibold border-b border-green-700 w-fit">
                          Read More...
                        </span>

                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
