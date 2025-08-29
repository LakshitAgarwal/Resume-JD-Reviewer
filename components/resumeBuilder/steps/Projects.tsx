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
        <div className="aesthetic-icon mx-auto mb-6 animate-gentle-float">
          🚀
        </div>
        <h2 className="section-title gradient-text mb-4">Projects</h2>
        <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
          Showcase your best projects and technical work
        </p>
      </div>

      <div className="space-y-8">
        {formData.projects.map((proj: any, i: number) => (
          <div key={i} className="aesthetic-card p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div
                  className="aesthetic-icon"
                  style={{ width: "48px", height: "48px", fontSize: "20px" }}
                >
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Project {i + 1}
                  </h3>
                  <p className="text-gray-600">Share your amazing work</p>
                </div>
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
                <label htmlFor={`projectName-${i}`} className="form-label">
                  Project Name *
                </label>
                <input
                  type="text"
                  id={`projectName-${i}`}
                  name="projectName"
                  value={proj.projectName}
                  onChange={(e) => handleProjChange(i, e)}
                  className="aesthetic-input"
                  placeholder="E-commerce Platform, Chat Application, etc."
                  required
                />
              </div>

              <div className="group">
                <label
                  htmlFor={`projectTechnologiesUsed-${i}`}
                  className="form-label"
                >
                  Technologies Used *
                </label>
                <input
                  type="text"
                  id={`projectTechnologiesUsed-${i}`}
                  name="projectTechnologiesUsed"
                  value={proj.projectTechnologiesUsed}
                  onChange={(e) => handleProjChange(i, e)}
                  className="aesthetic-input"
                  placeholder="React, Node.js, MongoDB, AWS"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor={`projectStartDate-${i}`}
                    className="form-label"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id={`projectStartDate-${i}`}
                    name="projectStartDate"
                    value={proj.projectStartDate}
                    onChange={(e) => handleProjChange(i, e)}
                    className="aesthetic-input"
                  />
                </div>

                <div className="group">
                  <label htmlFor={`projectEndDate-${i}`} className="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    id={`projectEndDate-${i}`}
                    name="projectEndDate"
                    value={proj.projectEndDate}
                    onChange={(e) => handleProjChange(i, e)}
                    className="aesthetic-input"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor={`projectLink-${i}`} className="form-label">
                  Live Demo URL
                </label>
                <input
                  type="url"
                  id={`projectLink-${i}`}
                  name="projectLink"
                  value={proj.projectLink}
                  onChange={(e) => handleProjChange(i, e)}
                  className="aesthetic-input"
                  placeholder="https://yourproject.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor={`projectGithubLink-${i}`}
                  className="form-label"
                >
                  GitHub Repository
                </label>
                <input
                  type="url"
                  id={`projectGithubLink-${i}`}
                  name="projectGithubLink"
                  value={proj.projectGithubLink}
                  onChange={(e) => handleProjChange(i, e)}
                  className="aesthetic-input"
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
                className="aesthetic-input resize-none"
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
