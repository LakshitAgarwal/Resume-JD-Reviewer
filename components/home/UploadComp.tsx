"use client";
import axios from "axios";
import { useState, useRef } from "react";
import ResultComponent from "./resultComponent";

export default function UploadComp() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [jobDescriptionFile, setJobDescriptionFile] = useState<File | null>(
    null
  );
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const resumeInputRef = useRef<HTMLInputElement>(null);
  const jdInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resume || (!jobDescriptionText && !jobDescriptionFile)) {
      alert("Please upload a resume and provide a job description");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      if (resume) formData.append("resume", resume);
      formData.append("jobDescriptionText", jobDescriptionText);
      if (jobDescriptionFile)
        formData.append("jobDescriptionFile", jobDescriptionFile);

      const res = await axios.post(
        "http://localhost:3000/api/getData",
        formData
      );
      setResult(res.data.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent, type: "resume" | "jd") => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      if (type === "resume") {
        setResume(files[0]);
      } else {
        setJobDescriptionFile(files[0]);
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Form */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Upload Your Documents
            </h3>
            <p className="text-gray-600">
              Upload your resume and job description to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Resume Upload */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900">
                Resume <span className="text-red-500">*</span>
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : resume
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={(e) => handleDrop(e, "resume")}
              >
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  {resume ? (
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-green-700 font-medium">
                        {resume.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        File uploaded successfully
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Drop your resume here or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        Supports PDF, DOC, DOCX files
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900">
                Job Description <span className="text-red-500">*</span>
              </label>

              {/* Tabs */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => {
                    setJobDescriptionFile(null);
                    setJobDescriptionText("");
                  }}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    !jobDescriptionFile && !jobDescriptionText
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Paste Text
                </button>
                <button
                  type="button"
                  onClick={() => setJobDescriptionText("")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    jobDescriptionFile
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Upload File
                </button>
              </div>

              {/* Text Input */}
              <textarea
                value={jobDescriptionText}
                onChange={(e) => {
                  setJobDescriptionText(e.target.value);
                  setJobDescriptionFile(null);
                }}
                placeholder="Paste the job description here..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />

              {/* File Upload */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-200 ${
                  jobDescriptionFile
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={(e) => handleDrop(e, "jd")}
              >
                <input
                  ref={jdInputRef}
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={(e) => {
                    setJobDescriptionFile(e.target.files?.[0] || null);
                    setJobDescriptionText("");
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  {jobDescriptionFile ? (
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-green-700 font-medium text-sm">
                        {jobDescriptionFile.name}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Or drop job description file here
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={
                  isLoading ||
                  !resume ||
                  (!jobDescriptionText && !jobDescriptionFile)
                }
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-12 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  "Analyze Resume"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results */}
      {result && <ResultComponent data={result} />}
    </div>
  );
}
