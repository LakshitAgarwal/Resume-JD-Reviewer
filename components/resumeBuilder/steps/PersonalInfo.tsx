"use client";

import { ResumeFormData } from "@/components/resumeBuilder/types";
import { User } from "lucide-react";

interface PersonalInfoProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}

export default function PersonalInfo({
  formData,
  setFormData,
}: PersonalInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <div className="aesthetic-icon mx-auto mb-6 animate-gentle-float">
          <User />
        </div>
        <h2 className="section-title gradient-text mb-4">About You</h2>
        <p className="section-subtitle text-gray-600">
          Let us get to know the amazing person behind the resume! ⭐
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Information */}
        <div className="aesthetic-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="aesthetic-icon">📱</div>
            <div>
              <h3 className="text-2xl font-bold gradient-text">
                Contact Magic
              </h3>
              <p className="text-gray-600">How people can reach you!</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="Your name here!"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="+91 9876543210"
                required
              />
            </div>
          </div>
        </div>

        {/* Profile Links */}
        <div className="aesthetic-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="aesthetic-icon">🔗</div>
            <div>
              <h3 className="text-2xl font-bold gradient-text">
                Professional Profiles
              </h3>
              <p className="text-gray-600">Show off your online presence</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="form-group">
              <label htmlFor="linkedinProfile" className="form-label">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedinProfile"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="form-group">
              <label htmlFor="githubProfile" className="form-label">
                GitHub Profile
              </label>
              <input
                type="url"
                id="githubProfile"
                name="githubProfile"
                value={formData.githubProfile}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="form-group">
              <label htmlFor="leetcodeProfile" className="form-label">
                LeetCode Profile
              </label>
              <input
                type="url"
                id="leetcodeProfile"
                name="leetcodeProfile"
                value={formData.leetcodeProfile}
                onChange={handleChange}
                className="aesthetic-input"
                placeholder="https://leetcode.com/yourusername"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
