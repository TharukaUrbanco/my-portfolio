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
};

export type Project = {
  id: number;
  title: string;
  description: string;
};
