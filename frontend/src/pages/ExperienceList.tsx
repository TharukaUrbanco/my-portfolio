import WorkExperienceDiv from "../components/WorkExperienceDiv";
import { workExperiences } from "../data/workExperiences";

const ExperienceList = () => {
  return (
    <div className="flex flex-col mt-4 common-margin-x">
      <div className="flex flex-col  justify-center items-center mt-10 md:mt-0">
        <h2 className="text-3xl text-center">
          <span className="light-orange">Work</span>
          <span className="dark-white ml-2">Experience</span>
          <span className="text-xl light-orange ml-2">( 7 years + )</span>
        </h2>

        <p className="max-w-[650px] mt-3 dark-white">
          With over 7 years + in software development, I have contributed to
          various projects in the tech industry, focusing on full-stack
          development
        </p>

        <div className="flex flex-col mt-6 gap-1">
          {workExperiences
            .sort((a, b) => b.id - a.id)
            .map((r) => (
              <WorkExperienceDiv key={r.id} experience={r} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
