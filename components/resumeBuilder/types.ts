export interface Experience {
  companyName: string;
  position: string;
  jobStartDate: string;
  jobEndDate: string;
  description: string;
  technologiesUsed: string;
  location: string;
}

export interface Project {
  projectName: string;
  projectDescription: string;
  projectTechnologiesUsed: string;
  projectLink: string;
  projectGithubLink: string;
  projectStartDate: string;
  projectEndDate: string;
}

export interface Achievement {
  achivement: string;
}

export interface ExtraCurricular {
  extraCurricular: string;
}

export interface SchoolClass {
  classType: string; // "X" or "XII"
  schoolName: string;
  schoolLocation: string;
  percentage: string;
  startDate: string;
  endDate: string;
}

export interface ResumeFormData {
  name: string;
  email: string;
  phone: string;
  collegeName: string;
  degree: string;
  gpa: string;
  collegeStartDate: string;
  collegeEndDate: string;
  collegeLocation: string;

  // School Info
  schoolName: string;
  schoolLocation: string;
  schoolClasses: SchoolClass[];

  experiences: Experience[];
  projects: Project[];
  skills: string;
  githubProfile: string;
  linkedinProfile: string;
  leetcodeProfile: string;
  achivements: Achievement[];
  extraCurricular: ExtraCurricular[];
  isFirstJobSeeker: boolean;
}

export interface StepProps {
  formData: ResumeFormData;
  setFormData: (data: ResumeFormData) => void;
}
