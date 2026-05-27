import { prisma } from "@/lib/prisma";
import CareerApplication from "./CareerApplication";

export const dynamic = 'force-dynamic';

export default async function CareerPage() {
  const jobs = await prisma.job.findMany({
    where: { status: "OPEN" },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">Build Your Career With Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Join a global team dedicated to excellence in international trade, resource extraction, and agricultural export.
          </p>
        </div>

        <CareerApplication initialJobs={jobs} />

      </div>
    </div>
  );
}
