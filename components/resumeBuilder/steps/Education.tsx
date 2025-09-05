"use client";

import { ResumeFormData, SchoolClass } from "@/components/resumeBuilder/types";
import { Plus, Trash2 } from "lucide-react";

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

  const handleClassChange = (
    index: number,
    field: keyof SchoolClass,
    value: string
  ) => {
    const updatedClasses = [...formData.schoolClasses];
    updatedClasses[index] = {
      ...updatedClasses[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      schoolClasses: updatedClasses,
    });
  };

  const addNewClass = () => {
    const newClass: SchoolClass = {
      classType: "",
      schoolName: "",
      schoolLocation: "",
      percentage: "",
      startDate: "",
      endDate: "",
    };
    setFormData({
      ...formData,
      schoolClasses: [...formData.schoolClasses, newClass],
    });
  };

  const removeClass = (index: number) => {
    const updatedClasses = formData.schoolClasses.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      schoolClasses: updatedClasses,
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
              <p className="text-gray-600">Your higher education details</p>
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
              <label htmlFor="collegeLocation" className="form-label">
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
              <label htmlFor="collegeStartDate" className="form-label">
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
              <label htmlFor="collegeEndDate" className="form-label">
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
          {/* Dynamic Class Entries */}
          <div className="space-y-6">
            {formData.schoolClasses?.map((schoolClass, index) => (
              <div key={index} className="aesthetic-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <div className="aesthetic-icon">🎒</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text">
                        School/High School
                      </h3>
                      <p className="text-gray-600">
                        Your secondary education background
                      </p>
                    </div>
                  </div>
                  {formData.schoolClasses.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeClass(index)}
                      className="p-2 cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Class *</label>
                    <select
                      value={schoolClass.classType}
                      onChange={(e) =>
                        handleClassChange(index, "classType", e.target.value)
                      }
                      className="aesthetic-input"
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="X">Class X (10th)</option>
                      <option value="XII">Class XII (12th)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Percentage/Grade *</label>
                    <input
                      type="number"
                      value={schoolClass.percentage}
                      onChange={(e) =>
                        handleClassChange(index, "percentage", e.target.value)
                      }
                      step="0.01"
                      min="0"
                      max="100"
                      className="aesthetic-input"
                      placeholder="85.5"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">School Name *</label>
                    <input
                      type="text"
                      value={schoolClass.schoolName}
                      onChange={(e) =>
                        handleClassChange(index, "schoolName", e.target.value)
                      }
                      className="aesthetic-input"
                      placeholder="Jesus and Mary School"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">School Location</label>
                    <input
                      type="text"
                      value={schoolClass.schoolLocation}
                      onChange={(e) =>
                        handleClassChange(
                          index,
                          "schoolLocation",
                          e.target.value
                        )
                      }
                      className="aesthetic-input"
                      placeholder="Delhi"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      value={schoolClass.startDate}
                      onChange={(e) =>
                        handleClassChange(index, "startDate", e.target.value)
                      }
                      className="aesthetic-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      value={schoolClass.endDate}
                      onChange={(e) =>
                        handleClassChange(index, "endDate", e.target.value)
                      }
                      className="aesthetic-input"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Add Class Button */}
            <button
              type="button"
              onClick={addNewClass}
              className="aesthetic-button-secondary cursor-pointer w-full py-3 flex items-center justify-center gap-2"
            >
              <span className="text-lg">
                <Plus size={16} className="text-amber-800" />
              </span>
              Add Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
