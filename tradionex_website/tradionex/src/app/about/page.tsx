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
    </div>
  );
}
