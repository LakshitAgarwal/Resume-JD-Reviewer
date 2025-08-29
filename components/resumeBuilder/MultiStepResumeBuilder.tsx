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
  { id: 5, title: "Skills", description: "Skills & achievements" },
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
    isFirstJobSeeker: false,
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
    <div
      className="min-h-screen"
      style={{ background: "var(--background-soft)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="aesthetic-icon mx-auto mb-6 animate-gentle-float">
            ✨
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Resume Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your dream resume with our beautiful, step-by-step builder
          </p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator
          currentStep={currentStep}
          steps={steps}
          goToStep={goToStep}
        />

        {/* Main Content */}
        <div className="aesthetic-card p-10 mb-10">{renderStep()}</div>

        {/* Navigation Controls */}
        {currentStep !== 6 && (
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center cursor-pointer gap-3  px-6 py-3 transition-all duration-300 ${
                currentStep === 1
                  ? "aesthetic-button-secondary opacity-50 cursor-not-allowed"
                  : "aesthetic-button-secondary"
              }`}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div
              className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full text-sm font-medium"
              style={{ color: "var(--primary)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              ></span>
              Step {currentStep} of {steps.length}
              <span className="text-xs text-gray-500">
                ({Math.round((currentStep / steps.length) * 100)}%)
              </span>
            </div>

            <button
              onClick={nextStep}
              className="aesthetic-button cursor-pointer flex items-center gap-3 px-6 py-3"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
