"use client";
import axios from "axios";
import { useState } from "react";
import ResultComponent from "./resultComponent";
import FileUpload from "../forms/FileUpload";
import JobDescriptionInput from "../forms/JobDescriptionInput";

export default function UploadComp() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [jobDescriptionFile, setJobDescriptionFile] = useState<File | null>(
    null
  );
  const [jdInputType, setJdInputType] = useState<"file" | "text">("file");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

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
            <p className="text-gray-700 text-base">
              Upload your resume and job description to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Resume Upload */}
            <FileUpload
              file={resume}
              onFileChange={setResume}
              label="Resume"
              placeholder="Drop your resume here or click to browse"
              dragActive={dragActive}
              onDrag={handleDrag}
              onDrop={(e) => handleDrop(e, "resume")}
              required={true}
            />

            {/* Job Description */}
            <JobDescriptionInput
              inputType={jdInputType}
              onInputTypeChange={setJdInputType}
              textValue={jobDescriptionText}
              onTextChange={setJobDescriptionText}
              file={jobDescriptionFile}
              onFileChange={setJobDescriptionFile}
              dragActive={dragActive}
              onDrag={handleDrag}
              onDrop={(e) => handleDrop(e, "jd")}
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={
                  isLoading ||
                  !resume ||
                  (!jobDescriptionText && !jobDescriptionFile)
                }
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700  text-white font-semibold py-4 px-12 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
