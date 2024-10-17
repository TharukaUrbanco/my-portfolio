import { Link } from "react-router-dom";
import { WorkExperience } from "../types";

type WorkExperienceDivProps = {
  experience: WorkExperience;
};

const WorkExperienceDiv = ({ experience }: WorkExperienceDivProps) => {
  return (
    <div
      className="
    flex flex-row  border border-[#ccc9dc] rounded-xl p-3  my-2 mx-2 cursor-pointer
    hover:bg-[#2b3145]
    "
    >
      <div className="flex h-[120px] w-[120px] rounded-xl p-2 items-center bg-white">
        <a href={experience.companyWebsiteURL} target="_blank">
          <img
            className="object-contain"
            src={`/images/companyLogos/${experience.id}.png`}
          />
        </a>
      </div>
      <div className="flex flex-col justify-center p-2 ml-3">
        <p className="text-[15px] dark-white">{experience.duration}</p>
        <h5 className="text-[15px] light-white text-left">
          {experience.companyName}
        </h5>
        <p className="text-[10px] dark-white">{experience.location}</p>
        <h5 className="text-[15px] dark-white text-left mt-2">
          {experience.designation}
        </h5>
        <Link
          to={`/experience/${experience.id}`}
          className="text-orange-600 text-[14px] mt-1"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default WorkExperienceDiv;
