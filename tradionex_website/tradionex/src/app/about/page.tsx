import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-black">
              Global Excellence in
            </span>
            <br />
            <span className="text-[#241c66]">
              Industrial Export
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Tradionex is a UAE-based exporter of Garnet Abrasives and Industrial Minerals, supplying consistent grade materials for sandblasting, waterjet cutting, and surface preparation & other industries worldwide. With over 10+ years of experience in mineral sourcing, processing, and export, we focus on delivering stable quality, reliable supply, and industrial-grade specifications for global buyers. Our core strength lies in garnet abrasives (20/40, 30/60, 80 mesh) & Industrial Minerals supplied to clients across the Middle East, Asia, and other international markets. We operate through a controlled supply chain between India and UAE, ensuring quality inspection, bulk availability, and efficient export logistics. In addition to industrial minerals, we also deal in rice, natural stones, and spices through our Indian firms Star Enterprises and JB Enterprises.
          </p>
        </div>
      </section>

      {/* Certifications & Quality Policy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl font-bold text-[#241c66] mb-6 tracking-tight">Certifications & Quality Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg font-light">
                Quality is not an act, it is our habit. At Tradionex, we adhere to stringent international standards
                across all our product lines. From mining raw industrial minerals to processing agricultural goods,
                every step is monitored for absolute compliance.
              </p>

              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Quality Management Certified",
                  "Stringent Pre-Shipment Inspection Protocols",
                  "Ethical Sourcing & Mining Practices",
                  "Global Phytosanitary Compliance for Agricultural Exports"
                ].map((policy, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#241c66] mr-4 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{policy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
              {/* Google Maps Embed (Dubai Placeholder) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115534.61916327387!2d55.1583196963473!3d25.188448377755865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

          </div>
        </div>
      </section>


      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-5xl font-bold text-[#241c66] mb-4">
              Our Group Companies
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              A diversified business group serving global industries through mining, minerals, international trade, and business solutions.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">

              <Image
                src="/professional.jpg"
                alt="Axis Zone UAE"
                fill
                className="object-cover"
              />

              {/* Logo */}

              <div className="absolute bottom-5 right-5 bg-white p-2 rounded-xl shadow-lg">

                <Image
                  src="/axiszonelogo.png"
                  alt="Axis Zone Logo"
                  width={85}
                  height={85}
                  className="object-contain"
                />

              </div>

            </div>


            {/* Right Side Content */}

            <div>

              <h3 className="text-4xl font-bold text-[#241c66] mb-6">

                Axis Zone – Your Gateway to UAE Business Growth

              </h3>

              <p className="text-gray-600 mb-10 leading-relaxed text-lg">

                Axis Zone is our trusted strategic partner in the UAE, helping entrepreneurs, startups, and international businesses establish and expand their presence in the region. Through expert guidance in company formation, licensing, corporate taxation, banking support, and compliance services, Axis Zone simplifies the business setup journey and enables sustainable growth.

              </p>


              <div className="space-y-4">

                {[
                  "UAE Company Formation & Licensing",
                  "Corporate Tax Registration",
                  "Residency Visa Assistance",
                  "Corporate Banking Support",
                  "Business Compliance Services",
                  "End-to-End Business Advisory",
                ].map((service, idx) => (

                  <div key={idx} className="flex items-center">

                    <CheckCircle2 className="w-6 h-6 text-[#241c66] mr-4 flex-shrink-0" />

                    <span className="text-gray-800 font-medium">

                      {service}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>



        {/* Group Company 2 */}

        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Left Content */}

              <div>

                <h3 className="text-4xl font-bold text-[#241c66] mb-6">
                  Star Enterprises – Trusted Global Export Partner
                </h3>

                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  Star Enterprises is a valued member of our group, specializing in the supply of industrial minerals for industries such as oil & gas, drilling, ceramics, construction, foundry, and manufacturing. Our product portfolio includes bentonite, china clay, feldspar, and other industrial raw materials sourced from trusted suppliers across India.
                  <br />
                  In addition to our core minerals business, Star Enterprises also supplies natural stones, rice, spices, and selected agricultural products to customers across global markets, supported by reliable sourcing, quality assurance, and efficient logistics solutions.
                </p>

                <div className="space-y-4">

                  {[
                    "Industrial Minerals Raw Materials",
                    "Bentonite for Drilling & Energy Industries",
                    "China Clay (Kaolin) & Feldspar Supply",
                    "Foundry, Refractory & Ceramic Raw Materials",
                    "Construction & Infrastructure Solutions",
                    "Natural Stone Export & Supply",
                    "Rice, Spices & Agricultural Commodities",
                  ].map((service, idx) => (

                    <div key={idx} className="flex items-center">

                      <CheckCircle2 className="w-6 h-6 text-[#241c66] mr-4 flex-shrink-0" />

                      <span className="text-gray-800 font-medium">
                        {service}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Right Image */}

              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">

                <Image
                  src="/Starenterprises.png"
                  alt="Star Enterprises"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>

        </div>



{/* Group Company 3 */}

<div className="mt-24">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">

        <Image
          src="/JB.jpeg"
          alt="JB Enterprises"
          fill
          className="object-cover"
        />

      </div>

      {/* Right Content */}

      <div>

        <h3 className="text-4xl font-bold text-[#241c66] mb-6">
          JB Enterprises – Premium Garnet Mining & Processing Experts
        </h3>

        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
          JB Enterprises is our specialized garnet division in India,
          engaged in the mining, processing, and supply of premium-quality
          garnet abrasives. With our strong focus on quality, consistency,
          and customer satisfaction, we serve industries including surface
          preparation, sandblasting, waterjet cutting, shipbuilding,
          oil & gas, and infrastructure projects worldwide.
          <br />
          <br />
          We are committed to delivering high-performance garnet abrasive
          solutions that meet international standards while ensuring
          reliable supply, competitive pricing, and outstanding customer
          support for our global partners.
        </p>

        <div className="space-y-4">

          {[
            "Garnet Mine Owner & Processor",
            "Garnet Abrasive Manufacturer & Exporter",
            "Sandblasting & Waterjet Garnet",
            "20/40, 30/60, 80 & 120 Mesh Grades",
            "Surface Preparation Solutions",
            "Oil & Gas Blasting Applications",
            "Shipyard & Marine Maintenance Abrasives",
            "Quality-Assured Processing",
            "Global Supply Chain Support",
          ].map((service, idx) => (

            <div key={idx} className="flex items-center">

              <CheckCircle2 className="w-6 h-6 text-[#241c66] mr-4 flex-shrink-0" />

              <span className="text-gray-800 font-medium">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</div>



      </section>
      
    </div>
  );
}
