"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">Contact Our Sales Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Ready to request a quote or need material safety data sheets? Reach out to our global export specialists today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Corporate Office</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4"><MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" /></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Location</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Dubai Silicon Oasis,<br/>Dubai, United Arab Emirates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4"><Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" /></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">+971 50 123 4567<br/>Mon-Fri, 9am to 6pm GST</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4"><Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" /></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">export@tradionex.com<br/>sales@tradionex.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Inquiry Submitted</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Our B2B sales team will review your request and reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name *</label>
                      <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message or Inquiry Details *</label>
                    <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Please specify product quantities, target ports, etc..." className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 flex justify-center items-center text-lg shadow-lg shadow-blue-500/20">
                    {isSubmitting ? <><Loader2 className="w-6 h-6 mr-3 animate-spin" /> Sending...</> : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
