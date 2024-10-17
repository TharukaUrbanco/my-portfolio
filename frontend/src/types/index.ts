export type Skill = {
  id: number;
  name: string;
  rate: number;
  priority: number;
  type: "frontend" | "backend" | "databse" | "languages" | "devops";
  years: number;
};

export type WorkExperience = {
  id: number;
  companyName: string;
  designation: string;
  duration: string;
  location: string;
  companyWebsiteURL: string;
  responsibilities?: string[];
};

export type Project = {
  id: number;
  title: string;
  duration: string;
  description: string;
  type: "Work Related" | "Free Lancing" | "Education Purpose";
  techSkillIds: number[];
  relatedWorkExperienceId?: number;
  responsibilities?: string[];
};
