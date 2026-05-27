"use client";

import { useState } from "react";
import { Briefcase, MapPin, Loader2, CheckCircle2 } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
};

export default function CareerApplication({ initialJobs }: { initialJobs: Job[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          position: selectedPosition,
          resumeUrl,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setResumeUrl("");
        setSelectedPosition("");
      } else {
        alert("Failed to submit application");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (title: string) => {
    setSelectedPosition(title);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Open Roles */}
      <div className="lg:col-span-7 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Open Roles</h3>
        {initialJobs.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-400">No open positions at the moment. You can still submit your resume for future opportunities!</p>
          </div>
        ) : (
          initialJobs.map(job => (
            <div key={job.id} onClick={() => handleApplyClick(job.title)} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer group">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h4>
                <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.department}</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300">{job.type}</span>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleApplyClick(job.title); }} 
                className="px-5 py-2 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-black rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors"
              >
                Apply
              </button>
            </div>
          ))
        )}
      </div>

      {/* Application Form */}
      <div className="lg:col-span-5" id="application-form">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100 dark:border-gray-800 sticky top-32">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Application Received!</h3>
              <p className="text-gray-600 dark:text-gray-300">Our HR team will review your profile and get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Submit Resume</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Don't see a role for you? Drop your CV and we'll keep you in mind.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                    <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                    <input type="text" required value={lastName} onChange={e => setLastName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                  <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Position of Interest</label>
                  <input 
                    type="text" 
                    required 
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume Link (Google Drive / Dropbox)</label>
                  <input type="url" required value={resumeUrl} onChange={e => setResumeUrl(e.target.value)} placeholder="https://" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 outline-none transition-all" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl mt-4 hover:bg-blue-700 transition-colors disabled:opacity-70 flex justify-center items-center">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</> : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
