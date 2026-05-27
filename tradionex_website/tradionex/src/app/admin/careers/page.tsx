import { prisma } from "@/lib/prisma";
import JobManager from "./JobManager";

export const dynamic = 'force-dynamic';

export default async function CareersAdminPage() {
  const applicants = await prisma.jobApplicant.findMany({
    orderBy: { createdAt: "desc" }
  });

  const jobs = await prisma.job.findMany({
    where: { status: "OPEN" },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="max-w-6xl">
      <JobManager initialJobs={jobs} />

      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-t border-gray-200 dark:border-gray-800 pt-12">Job Applicants</h2>
      
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-medium">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4 text-right">Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {applicants.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    No applicants found.
                  </td>
                </tr>
              ) : (
                applicants.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{app.firstName} {app.lastName}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{app.position}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{app.email}</td>
                    <td className="px-6 py-4 text-right">
                      {app.resumeUrl ? (
                        <a href={app.resumeUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                          View CV
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">N/A</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
