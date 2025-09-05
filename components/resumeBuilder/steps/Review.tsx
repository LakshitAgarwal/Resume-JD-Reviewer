"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { useState } from "react";
import axios from "axios";

interface ReviewProps {
  formData: ResumeFormData;
  onBack: () => void;
}

export default function Review({ formData, onBack }: ReviewProps) {
  const [latexCode, setLatexCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async () => {
    setIsGenerating(true);
    try {
      const res = await axios.post("/api/buildResume", formData);
      console.log(res.data);
      setLatexCode(res.data.data);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexCode);
    alert("LaTeX code copied to clipboard!");
  };

  const getSectionValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.trim() === "" ? "Not provided" : value;
    }
    return value || "Not provided";
  };

  const formatDate = (date: string) => {
    if (!date) return "Not specified";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Review & Generate
        </h2>
        <p className="text-gray-600">
          Review your information and generate your professional resume
        </p>
      </div>

      {/* Personal Information Review */}
      <div className="aesthetic-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="aesthetic-icon">👤</div>
          <div>
            <h3 className="text-2xl font-bold gradient-text">
              Personal Information
            </h3>
            <p className="text-gray-600">Your contact and profile details</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">Name:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.name)}
            </span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">Email:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.email)}
            </span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">Phone:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.phone)}
            </span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">LinkedIn:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.linkedinProfile)}
            </span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">GitHub:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.githubProfile)}
            </span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
            <strong className="text-slate-700">LeetCode:</strong>{" "}
            <span className="text-slate-800">
              {getSectionValue(formData.leetcodeProfile)}
            </span>
          </div>
        </div>
      </div>

      {/* Education Review */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Education</h3>
        </div>
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              College/University
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/80 rounded-lg p-3">
                <strong className="text-slate-700">Institution:</strong>{" "}
                <span className="text-slate-800">
                  {getSectionValue(formData.collegeName)}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <strong className="text-slate-700">Degree:</strong>{" "}
                <span className="text-slate-800">
                  {getSectionValue(formData.degree)}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <strong className="text-slate-700">GPA:</strong>{" "}
                <span className="text-slate-800">
                  {getSectionValue(formData.gpa)}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <strong className="text-slate-700">Location:</strong>{" "}
                <span className="text-slate-800">
                  {getSectionValue(formData.collegeLocation)}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg p-3 md:col-span-2">
                <strong className="text-slate-700">Duration:</strong>{" "}
                <span className="text-slate-800">
                  {formatDate(formData.collegeStartDate)} -{" "}
                  {formatDate(formData.collegeEndDate)}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              School
            </h4>

            {/* Dynamic Classes */}
            {formData.schoolClasses
              ?.filter((cls) => cls.classType)
              .map((schoolClass, index) => (
                <div key={index} className="mt-4">
                  <h5 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Class {schoolClass.classType}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">School:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(schoolClass.schoolName)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Location:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(schoolClass.schoolLocation)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Percentage:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(schoolClass.percentage)}
                        {schoolClass.percentage && "%"}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Duration:</strong>{" "}
                      <span className="text-slate-800">
                        {formatDate(schoolClass.startDate)}{" "}
                        {schoolClass.startDate && schoolClass.endDate && "- "}
                        {formatDate(schoolClass.endDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Experience Review */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Work Experience ({formData.experiences.length} entries)
          </h3>
        </div>
        <div className="space-y-6">
          {formData.experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-3">
                    {getSectionValue(exp.position)} at{" "}
                    <span className="text-purple-600">
                      {getSectionValue(exp.companyName)}
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Location:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(exp.location)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Duration:</strong>{" "}
                      <span className="text-slate-800">
                        {formatDate(exp.jobStartDate)} -{" "}
                        {formatDate(exp.jobEndDate)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Technologies:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(exp.technologiesUsed)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3 md:col-span-2">
                      <strong className="text-slate-700">Description:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(exp.description)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Review */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Projects ({formData.projects.length} entries)
          </h3>
        </div>
        <div className="space-y-6">
          {formData.projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-3">
                    {getSectionValue(proj.projectName)}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Technologies:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(proj.projectTechnologiesUsed)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Duration:</strong>{" "}
                      <span className="text-slate-800">
                        {formatDate(proj.projectStartDate)} -{" "}
                        {formatDate(proj.projectEndDate)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">Live Demo:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(proj.projectLink)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <strong className="text-slate-700">GitHub:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(proj.projectGithubLink)}
                      </span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3 md:col-span-2">
                      <strong className="text-slate-700">Description:</strong>{" "}
                      <span className="text-slate-800">
                        {getSectionValue(proj.projectDescription)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills and Others Review */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Skills & Additional Information
          </h3>
        </div>
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              Skills
            </h4>
            <p className="text-sm text-slate-800 bg-white/80 rounded-lg p-4">
              {getSectionValue(formData.skills)}
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              Achievements ({formData.achivements.length} entries)
            </h4>
            <ul className="text-sm text-slate-800 space-y-2">
              {formData.achivements.map((achievement, i) => (
                <li
                  key={i}
                  className="bg-white/80 rounded-lg p-3 flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  {getSectionValue(achievement.achivement)}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              Extra Curricular Activities ({
                formData.extraCurricular.length
              }{" "}
              entries)
            </h4>
            <ul className="text-sm text-slate-800 space-y-2">
              {formData.extraCurricular.map((activity, i) => (
                <li
                  key={i}
                  className="bg-white/80 rounded-lg p-3 flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  {getSectionValue(activity.extraCurricular)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 justify-center">
        <button
          onClick={onBack}
          className="aesthetic-button-secondary px-8 py-4 cursor-pointer"
        >
          Back to Edit
        </button>
        <button
          onClick={handleSubmit}
          disabled={isGenerating}
          className="aesthetic-button px-10 py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? "Generating Resume..." : "Generate Resume"}
        </button>
      </div>

      {/* LaTeX Code Preview Section */}
      {latexCode && (
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 border border-slate-200/50 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Generated LaTeX Code
              </h3>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Copy to Clipboard
            </button>
          </div>
          <textarea
            value={latexCode}
            readOnly
            className="w-full h-96 font-mono text-xs border border-slate-300 rounded-2xl p-6 bg-white text-slate-800 shadow-inner resize-none"
          />
          <p className="text-sm text-slate-600 mt-4 flex items-center gap-2 justify-center">
            <svg
              className="w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Copy this LaTeX code and paste it into an online LaTeX compiler like
            Overleaf to generate your PDF resume.
          </p>
        </div>
      )}
    </div>
  );
}
