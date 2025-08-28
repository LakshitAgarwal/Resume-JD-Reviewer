"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";

interface PersonalInfoProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function PersonalInfo({
  formData,
  setFormData,
}: PersonalInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
          Personal Information
        </h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Let&apos;s start with your basic details and professional profiles
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Information */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100/50 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">
              Contact Details
            </h3>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-blue-600 transition-colors"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-blue-600 transition-colors"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-blue-600 transition-colors"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="+91 9514512842"
                required
              />
            </div>
          </div>
        </div>

        {/* Profile Links */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100/50 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">
              Professional Profiles
            </h3>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label
                htmlFor="linkedinProfile"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-emerald-600 transition-colors"
              >
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedinProfile"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="group">
              <label
                htmlFor="githubProfile"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-emerald-600 transition-colors"
              >
                GitHub Profile
              </label>
              <input
                type="url"
                id="githubProfile"
                name="githubProfile"
                value={formData.githubProfile}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="group">
              <label
                htmlFor="leetcodeProfile"
                className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-emerald-600 transition-colors"
              >
                LeetCode Profile
              </label>
              <input
                type="url"
                id="leetcodeProfile"
                name="leetcodeProfile"
                value={formData.leetcodeProfile}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                placeholder="https://leetcode.com/yourusername"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
