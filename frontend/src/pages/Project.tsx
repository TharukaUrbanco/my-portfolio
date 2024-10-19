import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect } from "react";
import { Skill } from "../types";
import { skills } from "../data/skills";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((r) => r.id === parseInt(id!));

  let techSkills: Skill[] = [];
  if (project !== undefined) {
    techSkills = skills.filter((r) => project.techSkillIds.includes(r.id));
  }

  useEffect(() => {
    if (project === undefined) {
      return navigate("/not-found");
      //
    }
  }, [project, navigate]);

  return (
    <div className="flex flex-col mt-4 common-margin-x">
      <div className="flex flex-row">
        <div className="w-0 md:w-1/4"></div>
        <div className="flex flex-col">
          {/* Project Name */}
          <h4 className="text-2xl dark-white">{project?.title}</h4>
          <span className="text-[12px] dark-white">{project?.duration}</span>

          {/* Project Image */}
          <div className="flex max-w-[300px] rounded-xl p-2 bg-white mt-4">
            <img
              className="object-contain"
              src={`/images/projectCoverImages/${project?.id}.png`}
            />
          </div>

          {/* Description */}
          <h2 className="text-[18px] mt-6 text-white">Description : </h2>
          <p className="text-[14px] mt-2 dark-white whitespace-pre-line">
            {project?.description}
          </p>

          {/* Technologies */}
          <h2 className="text-[18px] mt-6 text-white">Technologies : </h2>
          <div className="flex flex-row flex-wrap text-[10px] mt-2 dark-white">
            {techSkills.map((r) => (
              <div
                className="max-w-[200px] border border-gray-300 px-2 py-1 m-1 rounded-xl"
                key={r.id}
              >
                {r.name}
              </div>
            ))}
          </div>

          {/* Roles and responsibilities */}
          {project?.responsibilities &&
            project?.responsibilities.length > 0 && (
              <>
                <h2 className="text-[18px] mt-6 text-white">
                  My role & responsibilities :{" "}
                </h2>
                <div className="text-[14px] mt-2 dark-white">
                  <ul className="list-disc ml-4">
                    {project?.responsibilities?.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
        </div>
        <div className="w-0 md:w-1/4"></div>
      </div>
    </div>
  );
};

export default Project;
