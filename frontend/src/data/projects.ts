import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "ERP System",
    duration: "2022 November to Now",
    description:
      "Web Based System which manages all HDC Companies internal operations. This system consists with several \n" +
      "modules such as Payroll, Finance, Procurement, Project Management and Customer Service.",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 11, 15, 17, 18],
    relatedWorkExperienceId: 4,
    responsibilities: [
      "Collaborating with the software team to deliver the feartures on time.",
      "Coding and tesing",
      "Bugs fixing.",
    ],
  },
  {
    id: 2,
    title: "HR Management System ( HDC )",
    duration: "2023 November to Now",
    description:
      "Web Based System which manages all HDC Companies HR related functionalities. Such as \n" +
      "- Manage Employee Infomations ( Personal info, Job related info...) \n" +
      "- Manage Employee Attendance \n" +
      "- OT related functionalities \n" +
      "- Leave related functionalities",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 11, 15, 17, 18],
    relatedWorkExperienceId: 4,
    responsibilities: [
      "Collaborating with HR team and gather requirements.",
      "Collaborating with the software team to deliver the feartures on time.",
      "Coding and tesing.",
      "Publishing to production.",
      "Bugs fixing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 3,
    title: "HR and Payroll Management System ( Alaris )",
    duration: "2019 to 2022 November",
    description:
      "Web Based System that helps to manage all Alaris Employee’s [ more than 500 ] HR related operations and payment related operations \n" +
      "Employees can view Attendance, request leaves, request OTs from their mobile phones. HR peoples can operate payroll related things.",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 15, 17],
    relatedWorkExperienceId: 3,
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 4,
    title: "Expenses and DCR Management System",
    duration: "2019 to 2022 November",
    description:
      "Alaris Lanka is a distribution company and more than 100 medical representatives and more than 100 sales representatives working, and they did not have proper system to manage daily expenses and their day-to-day visits until I joined. \n" +
      "I implemented a web based mobile friendly system so representatives can upload their expenses bills and day to day works as well. \n" +
      "Sales & admin team can monitor expenses and approve their claims to Account team for bank transfer",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 15, 17],
    relatedWorkExperienceId: 3,
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 5,
    title: "Student Management System",
    duration: "2019 to now",
    description:
      "Web based mobile friendly application implemented as my freelancer project. \n" +
      "Currently more than 3000 students and 5 teachers using the system.\n" +
      "Maintaining central student databse and teacher wise their sucbjects are different. Teachers can maintain students attendance and Feed questions to system and generate automatic question papers. Students can login to system and answer the papers online and check the progress.",
    type: "Free Lancing",
    techSkillIds: [3, 24, 8, 9, 15, 16, 19],
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Coding.",
      "Testing and final publishing.",
      "Bugs fixing and adding new features.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 6,
    title: "Hospital Management System",
    duration: "2021 to now",
    description:
      "Freelancer project for private hospital. This is Web based System for manage all operations in hospital such as \n" +
      "- Manage Drugs stock. [ Hospital maintains drugs stock and all operation related to stock manage done with system ]\n" +
      "- Maintain Patient History. [ All patient histories are managed through the system and Doctor can view patient histories by his mobile ]\n" +
      "- Generate Bills. [ All Medical Bills Issued through the system ] \n" +
      "- Generate Lab Repots. [ Feed input data and generate related lab report and easily send to customer ]",
    type: "Free Lancing",
    techSkillIds: [3, 24, 8, 9, 15, 16, 19],
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Coding.",
      "Testing and final publishing.",
      "Bugs fixing and adding new features.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 7,
    title: "Stock Management System",
    duration: "2020 to 2022 November",
    description:
      "This is a web based system and issue stock items according to expiry date. Generate dispatch note when stock move out from stores based on invoice. Managers can easily check stock availability using their mobile phones through the system. \n",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 15, 17],
    relatedWorkExperienceId: 3,
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 8,
    title: "Vehicle Management System",
    duration: "2019 to 2022 November",
    description:
      "Web Based System that helps to manage all Alaris employee’s [ more than 500 ] payment related transactions like monthly salary, expenses advances of employees, incentives, insurance and expenses claims. \n" +
      "This system fully interconnected with HRM System. Such as HR people can hold employee’s money transactions then payroll system detect those transactions and hold them.",
    type: "Work Related",
    techSkillIds: [1, 4, 8, 9, 15, 17],
    relatedWorkExperienceId: 3,
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 9,
    title: "My portfolio website",
    duration: "2024 October to now",
    description:
      "The goal of this portfolio website is to showcase my work, skills, and achievements in a professional and visually appealing manner. \n" +
      "This is fully responsive mobile friendly website built on react.\n",
    type: "Education Purpose",
    techSkillIds: [7, 19, 15],
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
  {
    id: 10,
    title: "Passmrcpch website",
    duration: "2024 January to now",
    description:
      "The client of this system is a consultant who is doing online courses for medical students. So he wanted a website to market his courses and give students to freely access some course materials also. \n" +
      "Website is customizable and has given admin panel to update its content. \n" +
      "This is fully responsive mobile friendly system built with .Net MVC Core.\n" +
      "You can visit this site on http://passmrcpch.com",
    type: "Free Lancing",
    techSkillIds: [1, 4, 8, 9, 11, 15, 17, 18],
    responsibilities: [
      "Requirement gathering.",
      "Designing.",
      "Managing the software team.",
      "Coding.",
      "Testing and final publishing.",
      "Preforming training, demonstration to present features of software to end users.",
    ],
  },
];
