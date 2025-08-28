/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { Plus, Trash2 } from "lucide-react";

interface ProjectsProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function Projects({ formData, setFormData }: ProjectsProps) {
  const handleProjChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = [...formData.projects];
    (updated[i] as any)[name] = value;
    setFormData({
      ...formData,
      projects: updated,
    });
  };

  const addNewProject = () => {
    const newProj = {
      projectName: "",
      projectDescription: "",
      projectTechnologiesUsed: "",
      projectLink: "",
      projectGithubLink: "",
      projectStartDate: "",
      projectEndDate: "",
    };
    setFormData({
      ...formData,
      projects: [...formData.projects, newProj],
    });
  };

  const removeProject = (index: number) => {
    if (formData.projects.length > 1) {
      const updated = formData.projects.filter(
        (_: any, i: number) => i !== index
      );
      setFormData({
        ...formData,
        projects: updated,
      });
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-indigo-600"
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
          Projects
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Showcase your best projects and technical work with stunning visuals
        </p>
      </div>

      <div className="space-y-8">
        {formData.projects.map((proj: any, i: number) => (
          <div
            key={i}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
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
                  Project {i + 1}
                </h3>
              </div>
              {formData.projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProject(i)}
                  className="text-red-500 hover:text-red-700 p-3 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-105"
                  title="Remove this project"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 group">
                <label
                  htmlFor={`projectName-${i}`}
                  className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                >
                  Project Name *
                </label>
                <input
                  type="text"
                  id={`projectName-${i}`}
                  name="projectName"
                  value={proj.projectName}
                  onChange={(e) => handleProjChange(i, e)}
                  className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                  placeholder="E-commerce Platform, Chat Application, etc."
                  required
                />
              </div>

              <div className="group">
                <label
                  htmlFor={`projectTechnologiesUsed-${i}`}
                  className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                >
                  Technologies Used *
                </label>
                <input
                  type="text"
                  id={`projectTechnologiesUsed-${i}`}
                  name="projectTechnologiesUsed"
                  value={proj.projectTechnologiesUsed}
                  onChange={(e) => handleProjChange(i, e)}
                  className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                  placeholder="React, Node.js, MongoDB, AWS"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor={`projectStartDate-${i}`}
                    className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id={`projectStartDate-${i}`}
                    name="projectStartDate"
                    value={proj.projectStartDate}
                    onChange={(e) => handleProjChange(i, e)}
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 text-slate-800"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor={`projectEndDate-${i}`}
                    className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id={`projectEndDate-${i}`}
                    name="projectEndDate"
                    value={proj.projectEndDate}
                    onChange={(e) => handleProjChange(i, e)}
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 text-slate-800"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor={`projectLink-${i}`}
                  className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                >
                  Live Demo URL
                </label>
                <input
                  type="url"
                  id={`projectLink-${i}`}
                  name="projectLink"
                  value={proj.projectLink}
                  onChange={(e) => handleProjChange(i, e)}
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                  placeholder="https://yourproject.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor={`projectGithubLink-${i}`}
                  className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
                >
                  GitHub Repository
                </label>
                <input
                  type="url"
                  id={`projectGithubLink-${i}`}
                  name="projectGithubLink"
                  value={proj.projectGithubLink}
                  onChange={(e) => handleProjChange(i, e)}
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            <div className="mt-6 group">
              <label
                htmlFor={`projectDescription-${i}`}
                className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-indigo-600 transition-colors"
              >
                Project Description & Impact *
              </label>
              <textarea
                id={`projectDescription-${i}`}
                name="projectDescription"
                value={proj.projectDescription}
                onChange={(e) => handleProjChange(i, e)}
                rows={5}
                className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800 resize-none"
                placeholder="Describe what the project does, your role, key features, and any notable achievements or metrics (e.g., 'Built a real-time chat app supporting 1000+ concurrent users')."
                required
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addNewProject}
          className="w-full flex items-center justify-center gap-3 py-6 px-6 border-2 border-dashed border-indigo-300 text-indigo-600 hover:border-indigo-400 hover:text-indigo-700 rounded-2xl transition-all duration-300 hover:bg-indigo-50 group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={24} className="text-white" />
          </div>
          <span className="text-lg font-medium">Add Another Project</span>
        </button>
      </div>
    </div>
  );
}
