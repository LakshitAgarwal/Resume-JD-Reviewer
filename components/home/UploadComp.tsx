"use client";
import axios from "axios";
import { useState } from "react";

export default function UploadComp() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [jobDescriptionFile, setJobDescriptionFile] = useState<File | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(resume, jobDescriptionText, jobDescriptionFile);

    const formData = new FormData();
    if (resume) formData.append("resume", resume);
    formData.append("jobDescriptionText", jobDescriptionText);
    if (jobDescriptionFile)
      formData.append("jobDescriptionFile", jobDescriptionFile);
    const res = await axios.post("http://localhost:3000/api/getData", formData);
    console.log(res);
  };

  return (
    <div className="ml-20">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Imput Resume */}
        <div className="mt-10">
          <h1>Upload Resume</h1>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="file"
            accept=".pdf, .docx, .doc"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
          />
        </div>

        {/* Input Job Description */}
        <div className="mt-10">
          <h1>Upload Job Description</h1>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Enter Job Description"
            name="jobDescriptionText"
            id="jobDescriptionText"
            value={jobDescriptionText}
            onChange={(e) => setJobDescriptionText(e.target.value)}
          />
          <h1>Or</h1>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="file"
            placeholder="Upload Job Description"
            accept=".pdf, .docx, .doc"
            name="jobDescriptionFile"
            id="jobDescriptionFile"
            onChange={(e) =>
              setJobDescriptionFile(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>

        {/* buttom */}
        <div className="mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
