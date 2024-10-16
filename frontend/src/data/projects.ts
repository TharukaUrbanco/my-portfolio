import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "ERP System",
    duration: "2022 November to Now",
    description:
      "Web Based System which manages all HDC Companies internal operations. This system consists with several \n" +
      "modules such as HR, Payroll, Finance, Procurement, Project Management and Customer Service",
    type: "Work Related",
    techSkillIds: [1, 2, 3],
    relatedWorkExperienceId: 4,
  },
  {
    id: 2,
    title: "HR and Payroll Management System",
    duration: "2019 to 2022 November",
    description:
      "Web Based System that helps to manage all Alaris Employee’s [ more than 500 ] HR related operations and payment related operations \n" +
      "Employees can view Attendance, request leaves, request OTs from their mobile phones. HR peoples can operate payroll related things.",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 11, 15, 17],
    relatedWorkExperienceId: 4,
    responsibilities: [
      "Requirement gathering",
      "Designing",
      "Managing the software team",
      "Coding",
      "Testing and final publishing",
    ],
  },
  {
    id: 3,
    title: "Expenses and DCR Management System",
    duration: "2019 to 2022 November",
    description:
      "Alaris Lanka is a distribution company and more than 100 medical representatives and more than 100 sales representatives working, and they did not have proper system to manage daily expenses and their day-to-day visits until I joined. \n" +
      "I implemented a web based mobile friendly system so representatives can upload their expenses bills and day to day works as well. \n" +
      "Sales & admin team can monitor expenses and approve their claims to Account team for bank transfer",
    type: "Work Related",
    techSkillIds: [1, 2, 3],
    relatedWorkExperienceId: 3,
  },
  {
    id: 4,
    title: "Student Management System",
    duration: "2019 to now",
    description:
      "Web based mobile friendly application implemented as my freelancer project. \n" +
      "Currently more than 3000 students and 5 teachers using the system.\n" +
      "Maintaining central student databse and teacher wise their sucbjects are different. Teachers can maintain students attendance and Feed questions to system and generate automatic question papers. Students can login to system and answer the papers online and check the progress.",
    type: "Free Lancing",
    techSkillIds: [1, 2, 3],
  },
];
