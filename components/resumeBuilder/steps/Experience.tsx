/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ExperienceProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function Experience({ formData, setFormData }: ExperienceProps) {
  const [showEncouragement, setShowEncouragement] = useState(false);

  const handleFirstJobSeekerChange = (checked: boolean) => {
    setFormData({
      ...formData,
      isFirstJobSeeker: checked,
    });

    if (checked && !showEncouragement) {
      setShowEncouragement(true);
      toast.success(
        "Great! We'll help you showcase your potential through projects, education, and skills.",
        {
          duration: 4000,
        }
      );
    } else if (!checked) {
      setShowEncouragement(false);
    }
  };
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
      <Toaster position="top-center" />

      <div className="mb-8">
        <div className="aesthetic-icon mx-auto mb-6 animate-gentle-float">
          💼
        </div>
        <h2 className="section-title gradient-text text-center mb-4">
          Work Experience
        </h2>
        <p className="section-subtitle text-gray-600 text-center mb-8">
          Share your professional journey and achievements ✨
        </p>

        {/* First Job Seeker Checkbox */}
        <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
          <input
            type="checkbox"
            id="firstJobSeeker"
            checked={formData.isFirstJobSeeker}
            onChange={(e) => handleFirstJobSeekerChange(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="firstJobSeeker"
            className="text-sm font-medium text-gray-900 cursor-pointer"
          >
            This is my first job application
          </label>
        </div>

        {formData.isFirstJobSeeker && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Tip:</strong> Focus on internships, volunteer work,
              personal projects, or any leadership roles you've had. Every
              journey starts somewhere!
            </p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {formData.experiences.map((exp, i) => (
          <div key={i} className="aesthetic-card p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="aesthetic-icon"
                  style={{ width: "48px", height: "48px", fontSize: "20px" }}
                >
                  💼
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">
                    {formData.isFirstJobSeeker
                      ? `Experience ${i + 1}`
                      : `Experience ${i + 1}`}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formData.isFirstJobSeeker
                      ? "Every experience counts! ✨"
                      : "Share your professional story"}
                  </p>
                </div>
              </div>
              {formData.experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(i)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                  title="Remove this experience"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor={`companyName-${i}`} className="form-label">
                  {formData.isFirstJobSeeker
                    ? "Organization/Company"
                    : "Company Name"}{" "}
                  *
                </label>
                <input
                  type="text"
                  id={`companyName-${i}`}
                  name="companyName"
                  value={exp.companyName}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                  placeholder={
                    formData.isFirstJobSeeker
                      ? "e.g., University, NGO, Local Business"
                      : "e.g., Google, Microsoft, Startup Inc."
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`position-${i}`} className="form-label">
                  {formData.isFirstJobSeeker
                    ? "Role/Position"
                    : "Job Title/Position"}{" "}
                  *
                </label>
                <input
                  type="text"
                  id={`position-${i}`}
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                  placeholder={
                    formData.isFirstJobSeeker
                      ? "e.g., Intern, Volunteer, Team Leader"
                      : "e.g., Software Engineer, Product Manager"
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`location-${i}`} className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id={`location-${i}`}
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                  placeholder="e.g., San Francisco, CA"
                />
              </div>

              <div className="form-group">
                <label htmlFor={`technologiesUsed-${i}`} className="form-label">
                  Technologies/Skills Used
                </label>
                <input
                  type="text"
                  id={`technologiesUsed-${i}`}
                  name="technologiesUsed"
                  value={exp.technologiesUsed}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                  placeholder={
                    formData.isFirstJobSeeker
                      ? "Python, Excel, Communication, etc."
                      : "React, Node.js, Python, AWS"
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor={`jobStartDate-${i}`} className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  id={`jobStartDate-${i}`}
                  name="jobStartDate"
                  value={exp.jobStartDate}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor={`jobEndDate-${i}`} className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  id={`jobEndDate-${i}`}
                  name="jobEndDate"
                  value={exp.jobEndDate}
                  onChange={(e) => handleExpChange(i, e)}
                  className="aesthetic-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`description-${i}`} className="form-label">
                {formData.isFirstJobSeeker
                  ? "Tell Your Story!"
                  : "Description & Achievements"}
              </label>
              <textarea
                id={`description-${i}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleExpChange(i, e)}
                rows={4}
                className="aesthetic-input resize-none"
                placeholder={
                  formData.isFirstJobSeeker
                    ? "What did you learn? What skills did you develop? What impact did you make? Even small contributions matter! (e.g., 'Helped organize events for 50+ students', 'Learned teamwork and communication skills')"
                    : "Describe your responsibilities, achievements, and impact. Include metrics where possible (e.g., 'Improved performance by 30%', 'Led a team of 5 developers')."
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addNewExperience}
          className="w-full flex items-center justify-center gap-3 py-6 px-6 border-2 border-dashed rounded-2xl transition-all duration-300 hover:scale-105 group"
          style={{
            borderColor: "#0a9396",
            color: "#005f73",
            background: "rgba(148, 210, 189, 0.1)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce-cute"
            style={{
              background: "linear-gradient(135deg, #0a9396, #94d2bd)",
            }}
          >
            <Plus size={24} className="text-white" />
          </div>
          <span className="text-lg font-bold">
            {formData.isFirstJobSeeker
              ? "🌟 Add Another Adventure!"
              : "✨ Add Another Experience!"}
          </span>
        </button>
      </div>
    </div>
  );
}
