"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";

interface EducationProps {
    formData: ResumeFormData;
    setFormData: (data: ResumeFormData) => void;
}

export default function Education({ formData, setFormData }: EducationProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-12">
                <div className="aesthetic-icon mx-auto mb-6 animate-gentle-float">
                    🎓
                </div>
                <h2 className="section-title gradient-text mb-4">Education</h2>
                <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
                    Tell us about your academic background
                </p>
            </div>

            <div className="space-y-8">
                {/* College Education */}
                <div className="aesthetic-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="aesthetic-icon">🏫</div>
                        <div className="form-group">
                            <h3 className="text-2xl mt-5 font-bold gradient-text">
                                College/University
                            </h3>
                            <p className="text-gray-600">
                                Your higher education details
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="collegeName" className="form-label">
                                Institution Name *
                            </label>
                            <input
                                type="text"
                                id="collegeName"
                                name="collegeName"
                                value={formData.collegeName}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="Bennett University"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="degree" className="form-label">
                                Degree *
                            </label>
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="Bachelor of Technology in Computer Science"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gpa" className="form-label">
                                GPA/CGPA
                            </label>
                            <input
                                type="number"
                                id="gpa"
                                name="gpa"
                                value={formData.gpa}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                max="10"
                                className="aesthetic-input"
                                placeholder="8.5"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="collegeLocation"
                                className="form-label"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="collegeLocation"
                                name="collegeLocation"
                                value={formData.collegeLocation}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="Greater Noida, Uttar Pradesh"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="collegeStartDate"
                                className="form-label"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="collegeStartDate"
                                name="collegeStartDate"
                                value={formData.collegeStartDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="collegeEndDate"
                                className="form-label"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                id="collegeEndDate"
                                name="collegeEndDate"
                                value={formData.collegeEndDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* School Education */}
                <div className="aesthetic-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="aesthetic-icon">🎒</div>
                        <div>
                            <h3 className="text-2xl font-bold gradient-text">
                                School/High School
                            </h3>
                            <p className="text-gray-600">
                                Your secondary education background
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="schoolName" className="form-label">
                                School Name
                            </label>
                            <input
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="Jesus and Mary School"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="schoolLocation"
                                className="form-label"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="schoolLocation"
                                name="schoolLocation"
                                value={formData.schoolLocation}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="Delhi"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="class10" className="form-label">
                                Class/Grade
                            </label>
                            <input
                                type="text"
                                id="class10"
                                name="class10"
                                value={formData.class10}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="10th Grade / Class X"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="percentage10"
                                className="form-label"
                            >
                                Percentage/Grade
                            </label>
                            <input
                                type="number"
                                id="percentage10"
                                name="percentage10"
                                value={formData.percentage10}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                max="100"
                                className="aesthetic-input"
                                placeholder="80"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="schoolStartDate10"
                                className="form-label"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="schoolStartDate10"
                                name="schoolStartDate10"
                                value={formData.schoolStartDate10}
                                onChange={handleChange}
                                className="aesthetic-input"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="schoolEndDate10"
                                className="form-label"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                id="schoolEndDate10"
                                name="schoolEndDate10"
                                value={formData.schoolEndDate10}
                                onChange={handleChange}
                                className="aesthetic-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="class12" className="form-label">
                                Class/Grade
                            </label>
                            <input
                                type="text"
                                id="class12"
                                name="class12"
                                value={formData.class12}
                                onChange={handleChange}
                                className="aesthetic-input"
                                placeholder="12th Grade / Class XII"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="percentage12"
                                className="form-label"
                            >
                                Percentage/Grade
                            </label>
                            <input
                                type="number"
                                id="percentage12"
                                name="percentage12"
                                value={formData.percentage12}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                max="100"
                                className="aesthetic-input"
                                placeholder="85.5"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="schoolStartDate12"
                                className="form-label"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="schoolStartDate12"
                                name="schoolStartDate12"
                                value={formData.schoolStartDate12}
                                onChange={handleChange}
                                className="aesthetic-input"
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="schoolEndDate12"
                                className="form-label"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                id="schoolEndDate12"
                                name="schoolEndDate12"
                                value={formData.schoolEndDate12}
                                onChange={handleChange}
                                className="aesthetic-input"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
