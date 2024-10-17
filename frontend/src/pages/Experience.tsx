import { Link, useNavigate, useParams } from "react-router-dom";
import { workExperiences } from "../data/workExperiences";
import { useEffect } from "react";
import { Project, Skill } from "../types";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const Experience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = workExperiences.find((r) => r.id === parseInt(id!));
  let projectsInfo: Project[] = [];
  let skillsInfo: Skill[] = [];

  if (experience !== undefined) {
    projectsInfo = projects.filter(
      (r) => r.relatedWorkExperienceId === experience.id
    );
    let skillIds: number[] = [];
    projectsInfo.forEach((r) => {
      if (r.techSkillIds) {
        r.techSkillIds.forEach((t) => {
          skillIds.push(t);
        });
      }
    });
    skillIds = [...new Set(skillIds)];
    skillsInfo = skills.filter((r) => skillIds.includes(r.id));
  }

  useEffect(() => {
    if (experience === undefined) {
      return navigate("/not-found");
    }
  }, [experience, navigate]);

  return (
    <div className="flex flex-col common-margin-x">
      <div className="flex flex-row">
        <div className="w-0 md:w-1/4"></div>
        <div className="flex flex-col">
          <h2 className="text-2xl mt-6 light-orange">Working Experience </h2>

          {/* Duration */}
          <h2 className="text-lg mt-8 text-white">Working duration : </h2>
          <p className="mt-1 dark-white whitespace-pre-line">
            {experience?.duration}
          </p>

          {/* Designation */}
          <h2 className="text-lg mt-7 text-white">Designation : </h2>
          <p className="mt-1 dark-white whitespace-pre-line">
            {experience?.designation}
          </p>

          {/* Company Info */}
          <h2 className="text-lg mt-7 text-white">Company Info : </h2>
          <div className="flex flex-row items-center max-h-[120px] max-w-[120px] bg-white p-2 mt-1">
            <a href={experience?.companyWebsiteURL} target="_blank">
              <img
                className="object-contain"
                src={`/images/companyLogos/${experience?.id}.png`}
              />
            </a>
          </div>
          <p className="mt-2 dark-white whitespace-pre-line">
            {experience?.companyName}
          </p>
          <p className="text-[12px] mt-1 dark-white whitespace-pre-line">
            {experience?.location}
          </p>
          <a
            href={experience?.companyWebsiteURL}
            target="_blank"
            className="mt-1 text-blue-300 whitespace-pre-line"
          >
            {experience?.companyWebsiteURL}
          </a>

          {/* Roles and responsibilities */}
          {experience?.responsibilities &&
            experience?.responsibilities.length > 0 && (
              <>
                <h2 className="text-lg mt-6 text-white">
                  Roles & responsibilities :
                </h2>
                <div className="mt-2 dark-white">
                  <ul className="list-disc ml-4">
                    {experience?.responsibilities?.map((r) => (
                      <li key={r} className="my-3">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

          {/* Contribution to Projects */}
          {projectsInfo.length > 0 && (
            <>
              <h2 className="text-lg mt-6 text-white">
                Contribution to Projects :
              </h2>
              <div className="mt-2 dark-white">
                <ul className="list-disc ml-4">
                  {projectsInfo.map((r) => (
                    <li
                      key={r.id}
                      className="my-2 hover:text-blue-300 cursor-pointer"
                    >
                      <Link to={`/projects/${r.id}`}>{r.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Technologies */}
          {skillsInfo.length > 0 && (
            <>
              <h2 className="text-lg mt-6 text-white">Technologies :</h2>
              <div className="mt-2 dark-white">
                <ul className="list-disc ml-4">
                  {skillsInfo.map((r) => (
                    <li key={r.id} className="my-2">
                      {r.name}
                    </li>
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

export default Experience;
