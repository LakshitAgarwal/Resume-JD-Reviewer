/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { Plus, Trash2 } from "lucide-react";

interface SkillsAndOthersProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function SkillsAndOthers({
  formData,
  setFormData,
}: SkillsAndOthersProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAchievementChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updated = [...formData.achivements];
    (updated[i] as any)[name] = value;
    setFormData({
      ...formData,
      achivements: updated,
    });
  };

  const handleExtraCurricularChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updated = [...formData.extraCurricular];
    (updated[i] as any)[name] = value;
    setFormData({
      ...formData,
      extraCurricular: updated,
    });
  };

  const addNewAchievement = () => {
    const newAchievement = { achivement: "" };
    setFormData({
      ...formData,
      achivements: [...formData.achivements, newAchievement],
    });
  };

  const addNewExtraCurricular = () => {
    const newExtraCurricular = { extraCurricular: "" };
    setFormData({
      ...formData,
      extraCurricular: [...formData.extraCurricular, newExtraCurricular],
    });
  };

  const removeAchievement = (index: number) => {
    if (formData.achivements.length > 1) {
      const updated = formData.achivements.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        achivements: updated,
      });
    }
  };

  const removeExtraCurricular = (index: number) => {
    if (formData.extraCurricular.length > 1) {
      const updated = formData.extraCurricular.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        extraCurricular: updated,
      });
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-amber-600"
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
          Skills & Additional Information
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Showcase your technical expertise and professional achievements
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Technical Skills
          </h3>
        </div>
        <div className="group">
          <label
            htmlFor="skills"
            className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-amber-600 transition-colors"
          >
            Skills (comma-separated) *
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows={5}
            className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800 resize-none"
            placeholder="JavaScript, React, Node.js, Python, SQL, Git, AWS, Docker, MongoDB, Express.js, TypeScript, HTML, CSS, RESTful APIs, Agile, Problem Solving, Team Leadership"
            required
          />
          <p className="text-sm text-slate-500 mt-3 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-amber-500"
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
            Include programming languages, frameworks, tools, databases, and
            soft skills. Separate each skill with a comma.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Achievements & Awards
          </h3>
        </div>
        <div className="space-y-6">
          {formData.achivements.map((achievement, i) => (
            <div
              key={i}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor={`achievement-${i}`}
                    className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-rose-600 transition-colors"
                  >
                    Achievement {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`achievement-${i}`}
                    name="achivement"
                    value={achievement.achivement}
                    onChange={(e) => handleAchievementChange(i, e)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                    placeholder="Won 1st place in ABC Hackathon with 500+ participants"
                  />
                </div>
                {formData.achivements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAchievement(i)}
                    className="text-rose-500 hover:text-rose-700 p-3 hover:bg-rose-50 rounded-xl transition-all duration-300 group-hover:scale-105"
                    title="Remove this achievement"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addNewAchievement}
            className="flex items-center gap-3 text-rose-600 hover:text-rose-700 text-sm font-medium hover:bg-rose-50 px-4 py-3 rounded-xl transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={16} className="text-white" />
            </div>
            Add Another Achievement
          </button>
        </div>
      </div>

      {/* Extra Curricular Section */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100/50 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Extra Curricular Activities
          </h3>
        </div>
        <div className="space-y-6">
          {formData.extraCurricular.map((activity, i) => (
            <div
              key={i}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor={`extraCurricular-${i}`}
                    className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-cyan-600 transition-colors"
                  >
                    Activity {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`extraCurricular-${i}`}
                    name="extraCurricular"
                    value={activity.extraCurricular}
                    onChange={(e) => handleExtraCurricularChange(i, e)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white transition-all duration-300 placeholder-slate-400 text-slate-800"
                    placeholder="President of Computer Science Club, Volunteer at Local Food Bank"
                  />
                </div>
                {formData.extraCurricular.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExtraCurricular(i)}
                    className="text-cyan-500 hover:text-cyan-700 p-3 hover:bg-cyan-50 rounded-xl transition-all duration-300 group-hover:scale-105"
                    title="Remove this activity"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addNewExtraCurricular}
            className="flex items-center gap-3 text-cyan-600 hover:text-cyan-700 text-sm font-medium hover:bg-cyan-50 px-4 py-3 rounded-xl transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={16} className="text-white" />
            </div>
            Add Another Activity
          </button>
        </div>
      </div>
    </div>
  );
}
