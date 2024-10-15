import { Skill } from "../types";
import CircularProgressBar from "./CircularProgressBar";

type IndustrialSkillProps = {
  skill: Skill;
};

const IndustrialSkill = ({ skill }: IndustrialSkillProps) => {
  return (
    <div
      className="
        flex flex-row  border border-[#ccc9dc] p-3 rounded-2xl my-2 mx-2 cursor-pointer justify-between
        hover:bg-[#2b3145]
        "
    >
      <div>
        <h5 className="text-[13px] light-white text-left">{skill.name}</h5>
        <p className="text-[10px] dark-white">{skill.years} years +</p>
      </div>

      <div className="flex bottom-0 justify-end ml-2">
        <CircularProgressBar
          key={skill.id}
          sqSize={40}
          strokeWidth={3}
          percentage={skill.rate}
        />
      </div>
    </div>
  );
};

export default IndustrialSkill;
