"use client";

import { useState } from "react";
import { ResumeFormData } from "@/components/resumeBuilder/types";
import ProgressIndicator from "./ProgressIndicator";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Projects from "./steps/Projects";
import SkillsAndOthers from "./steps/SkillsAndOthers";
import Review from "./steps/Review";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info", description: "Basic details" },
  { id: 2, title: "Education", description: "Academic background" },
  { id: 3, title: "Experience", description: "Work history" },
  { id: 4, title: "Projects", description: "Your projects" },
  { id: 5, title: "Skills & Others", description: "Skills & activities" },
  { id: 6, title: "Review", description: "Final review" },
];

export default function MultiStepResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ResumeFormData>({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    degree: "",
    gpa: "",
    collegeStartDate: "",
    collegeEndDate: "",
    collegeLocation: "",
    schoolName: "",
    class: "",
    percentage: "",
    schoolStartDate: "",
    schoolEndDate: "",
    schoolLocation: "",
    experiences: [
      {
        companyName: "",
        position: "",
        jobStartDate: "",
        jobEndDate: "",
        description: "",
        technologiesUsed: "",
        location: "",
      },
    ],
    projects: [
      {
        projectName: "",
        projectDescription: "",
        projectTechnologiesUsed: "",
        projectLink: "",
        projectGithubLink: "",
        projectStartDate: "",
        projectEndDate: "",
      },
    ],
    skills: "",
    githubProfile: "",
    linkedinProfile: "",
    leetcodeProfile: "",
    achivements: [{ achivement: "" }],
    extraCurricular: [{ extraCurricular: "" }],
  });

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1: // Personal Info
        return !!(formData.name && formData.email && formData.phone);
      case 2: // Education
        return !!(formData.collegeName && formData.degree);
      case 3: // Experience
        return formData.experiences.every(
          (exp) => exp.companyName && exp.position
        );
      case 4: // Projects
        return formData.projects.every(
          (proj) =>
            proj.projectName &&
            proj.projectTechnologiesUsed &&
            proj.projectDescription
        );
      case 5: // Skills & Others
        return !!formData.skills;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    // Allow going to previous steps or current step
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <Education formData={formData} setFormData={setFormData} />;
      case 3:
        return <Experience formData={formData} setFormData={setFormData} />;
      case 4:
        return <Projects formData={formData} setFormData={setFormData} />;
      case 5:
        return (
          <SkillsAndOthers formData={formData} setFormData={setFormData} />
        );
      case 6:
        return <Review formData={formData} onBack={() => setCurrentStep(5)} />;
      default:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Resume Builder
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Craft your professional story with our intuitive, step-by-step
            resume builder
          </p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator
          currentStep={currentStep}
          steps={steps}
          goToStep={goToStep}
        />

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 mb-10">
          {renderStep()}
        </div>

        {/* Navigation Controls */}
        {currentStep !== 6 && (
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex cursor-pointer items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                currentStep === 1
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-slate-700 text-white hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="text-sm text-slate-500 bg-white/60 px-6 py-3 rounded-full backdrop-blur-sm">
              Step {currentStep} of {steps.length}
            </div>

            <button
              onClick={nextStep}
              className="flex cursor-pointer items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
