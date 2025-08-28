/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { Plus, Trash2 } from "lucide-react";

interface ExperienceProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function Experience({ formData, setFormData }: ExperienceProps) {
  const handleExpChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = [...formData.experiences];
    (updated[i] as any)[name] = value;
    setFormData({
      ...formData,
      experiences: updated,
    });
  };

  const addNewExperience = () => {
    const newExp = {
      companyName: "",
      position: "",
      jobStartDate: "",
      jobEndDate: "",
      description: "",
      technologiesUsed: "",
      location: "",
    };
    setFormData({
      ...formData,
      experiences: [...formData.experiences, newExp],
    });
  };

  const removeExperience = (index: number) => {
    if (formData.experiences.length > 1) {
      const updated = formData.experiences.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        experiences: updated,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-purple-600"
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
          Work Experience
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Share your professional experience and achievements
        </p>
      </div>

      <div className="space-y-6">
        {formData.experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
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
                  Experience {i + 1}
                </h3>
              </div>
              {formData.experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(i)}
                  className="text-red-500 hover:text-red-700 p-3 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-105"
                  title="Remove this experience"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`companyName-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id={`companyName-${i}`}
                  name="companyName"
                  value={exp.companyName}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Google, Microsoft, etc."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor={`position-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Job Title/Position *
                </label>
                <input
                  type="text"
                  id={`position-${i}`}
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Software Engineer, Product Manager, etc."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor={`location-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id={`location-${i}`}
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Hyderabad, Telangana"
                />
              </div>

              <div>
                <label
                  htmlFor={`technologiesUsed-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Technologies Used
                </label>
                <input
                  type="text"
                  id={`technologiesUsed-${i}`}
                  name="technologiesUsed"
                  value={exp.technologiesUsed}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="React, Node.js, Python, AWS"
                />
              </div>

              <div>
                <label
                  htmlFor={`jobStartDate-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id={`jobStartDate-${i}`}
                  name="jobStartDate"
                  value={exp.jobStartDate}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor={`jobEndDate-${i}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id={`jobEndDate-${i}`}
                  name="jobEndDate"
                  value={exp.jobEndDate}
                  onChange={(e) => handleExpChange(i, e)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor={`description-${i}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Description & Achievements
              </label>
              <textarea
                id={`description-${i}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleExpChange(i, e)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Describe your responsibilities, achievements, and impact. Include metrics where possible (e.g., 'Improved performance by 30%', 'Led a team of 5 developers')."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addNewExperience}
          className="w-full flex items-center justify-center gap-3 py-6 px-6 border-2 border-dashed border-purple-300 text-purple-600 hover:border-purple-400 hover:text-purple-700 rounded-2xl transition-all duration-300 hover:bg-purple-50 group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={24} className="text-white" />
          </div>
          <span className="text-lg font-medium">Add Another Experience</span>
        </button>
      </div>
    </div>
  );
}
