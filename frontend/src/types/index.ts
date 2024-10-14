export type Skill = {
  id: number;
  name: string;
  rate: number;
  priority: number;
  type: "frontend" | "backend" | "databse" | "languages" | "devops";
  years: number;
};
