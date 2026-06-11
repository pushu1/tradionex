import { ArrowRight, Factory, Microscope, Cpu, Building2 } from "lucide-react";

export default function ApplicationPage() {
  const industries = [
    {
      title: "Manufacturing & Ceramics",
      description: "Our high-grade Kaolin and China Clay are essential for producing premium porcelain, sanitaryware, and advanced ceramics, providing exceptional whiteness and structural integrity.",
      image: "/Manufacturing-Ceramics.jpg"
    },
    {
      title: "Pharmaceuticals & Cosmetics",
      description: "Ultra-pure Talc and Bentonite serve as crucial binding agents and absorbents in cosmetics, skincare products, and pharmaceutical formulations.",
      image: "/Pharmaceuticals-Cosmetics.jpg"
    },
    {
      title: "Electronics & Semiconductors",
      description: "We supply high-purity Quartz and Mica, which are vital for semiconductor manufacturing, optical fibers, and electronic insulation due to their thermal resistance.",
      image: "/Electronics-Semiconductors.jpg"
    },
    {
      title: "Construction & Infrastructure",
      description: "Premium Natural Stones (Granite, Marble, Sandstone) and construction-grade minerals provide the foundation for modern architectural masterpieces and robust infrastructure.",
      image: "/Construction-Infrastructure.jpg"
    },
    {
      title: "Sand Blasting & Water Jet Cutting",
      description: "Natural Garnet is widely used as an eco-friendly abrasive in sand blasting and water jet cutting applications. It delivers precise cutting performance, minimal dust generation, and excellent surface preparation for industrial projects.",
      image: "/Sandblasting.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#241c66] mb-6 tracking-tight">Industrial Applications</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Our premium minerals and raw materials power the world's most essential and advanced industries. Discover how Tradionex resources are utilized globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">

              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-10">
                <h3 className="text-2xl font-bold text-[#241c66] mb-4 group-hover:text-[#fa7719] transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {industry.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[#241c66] group-hover:text-[#fa7719] transition-colors duration-300"
                >
                  View Specific Minerals
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
