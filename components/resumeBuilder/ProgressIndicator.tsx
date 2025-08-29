"use client";

import { CheckCircle } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProgressIndicatorProps {
  currentStep: number;
  steps: Step[];
  goToStep?: (step: number) => void;
}

export default function ProgressIndicator({
  currentStep,
  steps,
  goToStep,
}: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="relative">
        {/* Background Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full hidden md:block">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              background: "var(--gradient-primary)",
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              boxShadow: "0 2px 8px rgba(139, 92, 246, 0.3)",
            }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Step Circle */}
              <div className="relative z-10">
                {currentStep > step.id ? (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                      goToStep ? "cursor-pointer hover:scale-110" : ""
                    }`}
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                    }}
                    onClick={() => goToStep?.(step.id)}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </div>
                ) : currentStep === step.id ? (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm animate-subtle-bounce"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "0 6px 16px rgba(139, 92, 246, 0.4)",
                      border: "2px solid white",
                    }}
                  >
                    {step.id}
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300"
                    style={{
                      background: "var(--background-soft)",
                      border: "2px solid var(--border)",
                      color: "var(--neutral)",
                    }}
                  >
                    {step.id}
                  </div>
                )}
              </div>

              {/* Step Label */}
              <div className="mt-3 text-center">
                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    currentStep >= step.id ? "gradient-text" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`text-xs mt-1 transition-colors duration-200 hidden md:block ${
                    currentStep >= step.id ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
