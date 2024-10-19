import { useEffect, useState } from "react";
import ProjectFilteringBtn from "../components/ProjectFilteringBtn";
import { Project } from "../types";
import { projects } from "../data/projects";
import ProjectListItem from "../components/ProjectListItem";

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string>("Work Related");

  const [projectList, setProjectList] = useState<Project[]>([]);

  const changeProjectType = (type: string) => {
    setSelectedType(type);
    setProjectList(projects.filter((r) => r.type == type));
  };

  useEffect(() => {
    changeProjectType("Work Related");
  }, []);

  return (
    <div className="flex flex-col mt-4 common-margin-x justify-items-start">
      <div className="flex flex-col items-center mt-10 md:mt-0">
        <h2 className="text-3xl text-center">
          <span className="light-orange">Projects</span>
          <span className="dark-white ml-2">Details</span>
        </h2>

        <p className="max-w-[650px] mt-6 dark-white">
          In here you’ll see a collection of my projects that are related to
          work and also free lancing.
        </p>

        <div className="flex flex-row gap-2 mt-6 flex-wrap justify-center">
          <ProjectFilteringBtn
            name="Work Related"
            selectedType={selectedType}
            onClick={() => changeProjectType("Work Related")}
          />
          <ProjectFilteringBtn
            name="Free Lancing"
            selectedType={selectedType}
            onClick={() => changeProjectType("Free Lancing")}
          />
          <ProjectFilteringBtn
            name="Education Purpose"
            selectedType={selectedType}
            onClick={() => changeProjectType("Education Purpose")}
          />
        </div>

        <div className="grid lg:grid-cols-2 mt-6 gap-1">
          {projectList.map((r) => (
            <ProjectListItem key={r.id} project={r} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
