"use client";

import axios from "axios";
import { useState } from "react";

export default function BasicInfo() {
  const [formData, setFormData] = useState({
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
    companyName: "",
    position: "",
    jobStartDate: "",
    jobEndDate: "",
    description: "",
    technologiesUsed: "",
    location: "",
    projectName: "",
    projectDescription: "",
    projectTechnologiesUsed: "",
    projectLink: "",
    projectGithubLink: "",
    projectStartDate: "",
    projectEndDate: "",
    skills: "",
  });

  const [latexCode, setLatexCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const res = await axios.post("/api/buildResume", formData);
      console.log(res.data);
      setLatexCode(res.data.data);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexCode);
    alert("LaTeX code copied to clipboard!");
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* Section 1 */}
        <h1>Personal Information</h1>
        <div>
          <div>
            <p>Name: </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email: </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Phone: </p>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Section 2 */}
        <h1>Education</h1>
        <div>
          {/* college */}
          <div>
            <p>College Name: </p>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
            <p>Degree: </p>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
            <p>GPA: </p>
            <input
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
            />
            <p>Start Date: </p>
            <input
              type="date"
              name="collegeStartDate"
              value={formData.collegeStartDate}
              onChange={handleChange}
            />
            <p>End Date: </p>
            <input
              type="date"
              name="collegeEndDate"
              value={formData.collegeEndDate}
              onChange={handleChange}
            />
            <p>College Location: </p>
            <input
              type="text"
              name="collegeLocation"
              value={formData.collegeLocation}
              onChange={handleChange}
            />
          </div>
          {/* school */}
          <div>
            <p>School Name: </p>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />
            <p>Class: </p>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
            />
            <p>Percentage: </p>
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
            />
            <p>Start Date: </p>
            <input
              type="date"
              name="schoolStartDate"
              value={formData.schoolStartDate}
              onChange={handleChange}
            />
            <p>End Date: </p>
            <input
              type="date"
              name="schoolEndDate"
              value={formData.schoolEndDate}
              onChange={handleChange}
            />
            <p>School Location: </p>
            <input
              type="text"
              name="schoolLocation"
              value={formData.schoolLocation}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Experience */}
        <h1>Experience</h1>
        <div>
          <div>
            <p>Company Name: </p>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Position: </p>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
            <p>Start Date: </p>
            <input
              type="date"
              name="jobStartDate"
              value={formData.jobStartDate}
              onChange={handleChange}
            />
            <p>End Date: </p>
            <input
              type="date"
              name="jobEndDate"
              value={formData.jobEndDate}
              onChange={handleChange}
            />
            <p>Description: </p>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <p>Technologies Used: </p>
            <input
              type="text"
              name="technologiesUsed"
              value={formData.technologiesUsed}
              onChange={handleChange}
            />
            <p>Location: </p>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Projects */}
        <h1>Projects</h1>
        <div>
          <div>
            <p>Project Name: </p>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
            />
            <p>Description: </p>
            <input
              type="text"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
            />
            <p>Technologies Used: </p>
            <input
              type="text"
              name="projectTechnologiesUsed"
              value={formData.projectTechnologiesUsed}
              onChange={handleChange}
            />
            <p>Link: </p>
            <input
              type="text"
              name="projectLink"
              value={formData.projectLink}
              onChange={handleChange}
            />
            <p>Github Link: </p>
            <input
              type="text"
              name="projectGithubLink"
              value={formData.projectGithubLink}
              onChange={handleChange}
            />
            <p>Start Date: </p>
            <input
              type="date"
              name="projectStartDate"
              value={formData.projectStartDate}
              onChange={handleChange}
            />
            <p>End Date: </p>
            <input
              type="date"
              name="projectEndDate"
              value={formData.projectEndDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Skills */}
        <h1>Skills</h1>
        <div>
          <div>
            <p>Skills: </p>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Create Resume"}
        </button>
      </form>

      {/* LaTeX Code Preview Section */}
      {latexCode && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <h2>Generated LaTeX Code</h2>
          <div style={{ marginBottom: "1rem" }}>
            <button onClick={copyToClipboard} style={{ marginRight: "0.5rem" }}>
              Copy to Clipboard
            </button>
          </div>
          <textarea
            value={latexCode}
            readOnly
            style={{
              width: "100%",
              height: "400px",
              fontFamily: "monospace",
              fontSize: "12px",
              border: "1px solid #ddd",
              padding: "0.5rem",
            }}
          />
        </div>
      )}
    </div>
  );
}
