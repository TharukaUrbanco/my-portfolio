import { Link } from "react-router-dom";
import { Project } from "../types";

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <div
      className="
    flex flex-row  border border-[#ccc9dc] rounded-xl p-3  my-2 mx-2 cursor-pointer
    hover:bg-[#2b3145]
    "
    >
      <div className="hidden md:block max-h-[150px] max-w-[200px] rounded-xl p-2 my-auto bg-white">
        <img
          className="object-contain max-w-[180px]"
          src={`/images/projectCoverImages/${project.id}.png`}
        />
      </div>
      <div className="flex flex-col justify-center p-2 ml-3">
        <h5 className="text-[18px] light-white text-left">{project.title}</h5>
        <p className="text-[13px] -mt-1 dark-white">{project.duration}</p>

        <div className="flex md:hidden max-h-[150px] max-w-[150px] rounded-xl p-2 mt-3 items-center bg-white">
          <img
            className="object-contain max-h-[150px] mx-auto"
            src={`/images/projectCoverImages/${project.id}.png`}
          />
        </div>

        <p className="text-[12px] mt-3 dark-white line-clamp-3">
          {project.description}
        </p>
        <div className="flex justify-start mt-2">
          <Link
            to={`/projects/${project.id}`}
            className="light-orange hover:text-orange-700"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
