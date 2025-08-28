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
    <div className="w-full max-w-6xl mx-auto mb-12">
      <div className="relative">
        {/* Background Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 rounded-full hidden md:block">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700 ease-out shadow-lg"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center relative group"
            >
              {/* Step Circle */}
              <div className="relative z-10">
                {currentStep > step.id ? (
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 ${
                      goToStep ? "cursor-pointer" : ""
                    }`}
                    onClick={() => goToStep?.(step.id)}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                ) : currentStep === step.id ? (
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl ring-4 ring-blue-100 transform transition-all duration-300 group-hover:scale-110 animate-pulse">
                    {step.id}
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-bold text-lg border-2 border-slate-300 transform transition-all duration-300 group-hover:scale-105">
                    {step.id}
                  </div>
                )}
              </div>

              {/* Step Label */}
              <div className="mt-3 text-center">
                <p
                  className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
                    currentStep >= step.id ? "text-slate-800" : "text-slate-400"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`text-xs hidden sm:block mt-1 transition-colors duration-300 ${
                    currentStep >= step.id ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Hover Effect */}
              {currentStep === step.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
