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

        // Shared School Info
        schoolName: "",
        schoolLocation: "",

        // Class 10
        class10: "",
        percentage10: "",
        schoolStartDate10: "",
        schoolEndDate10: "",

        // Class 12
        class12: "",
        percentage12: "",
        schoolStartDate12: "",
        schoolEndDate12: "",

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

    const [latexCode, setLatexCode] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleExpChange = (
        i: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        /**
         * name comes from the <input name="companyName" /> etc.
         * value is whatever user typed.
         */

        const updated = [...formData.experiences];
        // @ts-expect-error: name matches keys of the object
        updated[i][name] = value;
        setFormData({
            ...formData,
            experiences: updated,
        });
    };

    const handleProjChange = (
        i: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const updated = [...formData.projects];
        // @ts-expect-error: name matches keys of the object
        updated[i][name] = value;
        setFormData({
            ...formData,
            projects: updated,
        });
    };

    const handleAchivementChange = (
        i: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const updated = [...formData.achivements];
        // @ts-expect-error: name matches keys of the object
        updated[i][name] = value;
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
        // @ts-expect-error: name matches keys of the object
        updated[i][name] = value;
        setFormData({
            ...formData,
            extraCurricular: updated,
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

    const addNewProject = () => {
        const newProj = {
            projectName: "",
            projectDescription: "",
            projectTechnologiesUsed: "",
            projectLink: "",
            projectGithubLink: "",
            projectStartDate: "",
            projectEndDate: "",
        };
        setFormData({
            ...formData,
            projects: [...formData.projects, newProj],
        });
    };

    const addNewAchivement = () => {
        const newAchivement = {
            achivement: "",
        };
        setFormData({
            ...formData,
            achivements: [...formData.achivements, newAchivement],
        });
    };

    const addNewExtraCurricular = () => {
        const newExtraCurricular = {
            extraCurricular: "",
        };
        setFormData({
            ...formData,
            extraCurricular: [...formData.extraCurricular, newExtraCurricular],
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
                {/* personal info */}
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

                {/* profiles */}
                <h1>profiles</h1>
                <div>
                    <div>
                        <p>Github Profile: </p>
                        <input
                            type="text"
                            name="githubProfile"
                            value={formData.githubProfile}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Linkedin Profile: </p>
                        <input
                            type="text"
                            name="linkedinProfile"
                            value={formData.linkedinProfile}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Leetcode Profile: </p>
                        <input
                            type="text"
                            name="leetcodeProfile"
                            value={formData.leetcodeProfile}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* education */}
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
                    {/* Schools (10th & 12th) */}
                    <div>
                        <p>School Name:</p>
                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                        />

                        <p>School Location:</p>
                        <input
                            type="text"
                            name="schoolLocation"
                            value={formData.schoolLocation}
                            onChange={handleChange}
                        />

                        {/* Class 10 */}
                        <h3>Class 10</h3>
                        <p>Percentage:</p>
                        <input
                            type="number"
                            name="percentage10"
                            value={formData.percentage10}
                            onChange={handleChange}
                        />
                        <p>Start Date:</p>
                        <input
                            type="date"
                            name="schoolStartDate10"
                            value={formData.schoolStartDate10}
                            onChange={handleChange}
                        />
                        <p>End Date:</p>
                        <input
                            type="date"
                            name="schoolEndDate10"
                            value={formData.schoolEndDate10}
                            onChange={handleChange}
                        />

                        {/* Class 12 */}
                        <h3>Class 12</h3>
                        <p>Percentage:</p>
                        <input
                            type="number"
                            name="percentage12"
                            value={formData.percentage12}
                            onChange={handleChange}
                        />
                        <p>Start Date:</p>
                        <input
                            type="date"
                            name="schoolStartDate12"
                            value={formData.schoolStartDate12}
                            onChange={handleChange}
                        />
                        <p>End Date:</p>
                        <input
                            type="date"
                            name="schoolEndDate12"
                            value={formData.schoolEndDate12}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Experience */}
                <h1>Experience</h1>
                {formData.experiences.map((exp, i) => (
                    <div key={i}>
                        <div>
                            <p>Company Name: </p>
                            <input
                                type="text"
                                name="companyName"
                                value={exp.companyName}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                        </div>
                        <div>
                            <p>Position: </p>
                            <input
                                type="text"
                                name="position"
                                value={exp.position}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                            <p>Start Date: </p>
                            <input
                                type="date"
                                name="jobStartDate"
                                value={exp.jobStartDate}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                            <p>End Date: </p>
                            <input
                                type="date"
                                name="jobEndDate"
                                value={exp.jobEndDate}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                            <p>Description: </p>
                            <input
                                type="text"
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                            <p>Technologies Used: </p>
                            <input
                                type="text"
                                name="technologiesUsed"
                                value={exp.technologiesUsed}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                            <p>Location: </p>
                            <input
                                type="text"
                                name="location"
                                value={exp.location}
                                onChange={(e) => handleExpChange(i, e)}
                            />
                        </div>
                    </div>
                ))}

                <button onClick={addNewExperience}>Add New Experience</button>

                {/* Projects */}
                <h1>Projects</h1>
                {formData.projects.map((proj, i) => (
                    <div key={i}>
                        <div>
                            <p>Project Name: </p>
                            <input
                                type="text"
                                name="projectName"
                                value={proj.projectName}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>Description: </p>
                            <input
                                type="text"
                                name="projectDescription"
                                value={proj.projectDescription}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>Technologies Used: </p>
                            <input
                                type="text"
                                name="projectTechnologiesUsed"
                                value={proj.projectTechnologiesUsed}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>Link: </p>
                            <input
                                type="text"
                                name="projectLink"
                                value={proj.projectLink}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>Github Link: </p>
                            <input
                                type="text"
                                name="projectGithubLink"
                                value={proj.projectGithubLink}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>Start Date: </p>
                            <input
                                type="date"
                                name="projectStartDate"
                                value={proj.projectStartDate}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                            <p>End Date: </p>
                            <input
                                type="date"
                                name="projectEndDate"
                                value={proj.projectEndDate}
                                onChange={(e) => handleProjChange(i, e)}
                            />
                        </div>
                    </div>
                ))}

                <button onClick={addNewProject}>Add New Project</button>

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

                {/* Achievements */}
                <h1>Achievements</h1>
                {formData.achivements.map((achivement, i) => (
                    <div key={i}>
                        <p>Achievements: </p>
                        <input
                            type="text"
                            name="achivement"
                            value={achivement.achivement}
                            onChange={(e) => handleAchivementChange(i, e)}
                        />
                    </div>
                ))}
                <button onClick={addNewAchivement}>Add New Achivement</button>

                {/* Extra Curricular */}
                <h1>Extra Curricular</h1>
                {formData.extraCurricular.map((extraCurricular, i) => (
                    <div key={i}>
                        <p>Extra Curricular: </p>
                        <input
                            type="text"
                            name="extraCurricular"
                            value={extraCurricular.extraCurricular}
                            onChange={(e) => handleExtraCurricularChange(i, e)}
                        />
                    </div>
                ))}
                <button onClick={addNewExtraCurricular}>
                    Add New Extra Curricular
                </button>

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
                        <button
                            onClick={copyToClipboard}
                            style={{ marginRight: "0.5rem" }}
                        >
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
