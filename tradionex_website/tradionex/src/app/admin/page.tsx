import { prisma } from "@/lib/prisma";
import { Users, FileText, Briefcase, Image as ImageIcon } from "lucide-react";

// Server Component for fetching data
export default async function AdminOverview() {
  // Fetch high-level metrics securely from the server
  const [inquiryCount, blogCount, careerCount, galleryCount] = await Promise.all([
    prisma.inquiry.count(),
    prisma.blogPost.count(),
    prisma.jobApplicant.count(),
    prisma.galleryImage.count()
  ]);

  const stats = [
    { name: "Total Inquiries", value: inquiryCount, icon: <Users className="w-6 h-6 text-blue-600" /> },
    { name: "Published Blogs", value: blogCount, icon: <FileText className="w-6 h-6 text-green-600" /> },
    { name: "Job Applicants", value: careerCount, icon: <Briefcase className="w-6 h-6 text-purple-600" /> },
    { name: "Gallery Images", value: galleryCount, icon: <ImageIcon className="w-6 h-6 text-orange-600" /> },
  ];

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Overview</h1>
      <p className="text-gray-500 mb-8">Welcome back to the Tradionex admin dashboard.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <div className="p-3 bg-gray-50 rounded-xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent System Activity</h3>
        <p className="text-gray-500 text-sm italic">Connect real-time logs here in the future. For now, use the sidebar to manage specific data tables.</p>
      </div>
    </div>
  );
}
