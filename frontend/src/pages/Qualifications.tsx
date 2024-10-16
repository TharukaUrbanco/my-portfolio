import EducationQualification, {
  EducationQualificationProps,
} from "../components/EducationQualification";
import IndustrialSkill from "../components/IndustrialSkill";
import { skills } from "../data/skills";

const Qualifications = () => {
  const educationQualifications: EducationQualificationProps[] = [
    {
      yearInfo: "2013-2016",
      collegeName: "University of Colombo School of Computing",
      qualificationName: "BSc. Computer Science [ GPA – 2.5313 ]",
    },
    {
      yearInfo: "2009-2012",
      collegeName: "Gurukula College, Kelaniya",
      qualificationName:
        "A/L – Mathematics ( Physics -A | Chemistry -B | C.Maths -C )",
    },
  ];

  return (
    <div className="flex flex-col mt-4 common-margin-x">
      <div className="">
        {/* Industrial Experience */}
        <div className="flex flex-col  justify-center items-center mt-10 md:mt-0">
          <h2 className="text-3xl text-center">
            <span className="light-orange">Industrial</span>
            <span className="dark-white ml-2">Skills</span>
            <span className="text-xl light-orange ml-2">( 7 years + )</span>
          </h2>

          <p className="max-w-[650px] mt-3 dark-white">
            This collection highlights my commitment to evolving as a software
            developer. Here, you will find a range of software development
            skills, showcasing my proficiency in modern technologies.
          </p>

          <div className="flex flex-row text-xl text-white mt-10">
            Backend Development
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
            {skills
              .filter((r) => r.type == "backend")
              .map((r) => (
                <IndustrialSkill key={r.id} skill={r} />
              ))}
          </div>

          <div className="flex flex-row text-xl text-white mt-12">
            Frontend Development
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
            {skills
              .filter((r) => r.type == "frontend")
              .map((r) => (
                <IndustrialSkill key={r.id} skill={r} />
              ))}
          </div>

          <div className="flex flex-row text-xl text-white mt-12">
            Database Management
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
            {skills
              .filter((r) => r.type == "databse")
              .map((r) => (
                <IndustrialSkill key={r.id} skill={r} />
              ))}
          </div>

          <div className="flex flex-row text-xl text-white mt-12">
            Programming Languages
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
            {skills
              .filter((r) => r.type == "languages")
              .map((r) => (
                <IndustrialSkill key={r.id} skill={r} />
              ))}
          </div>

          <div className="flex flex-row text-xl text-white mt-12">DevOps</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 ">
            {skills
              .filter((r) => r.type == "devops")
              .map((r) => (
                <IndustrialSkill key={r.id} skill={r} />
              ))}
          </div>
        </div>

        {/* Education Qualifications */}
        <div className="flex flex-col justify-center items-center mt-16 mb-5">
          <h2 className="text-3xl text-center mb-6">
            <span className="light-orange">Education</span>
            <span className="dark-white ml-2">Qualifications</span>
          </h2>

          {educationQualifications.map((r) => (
            <EducationQualification
              key={r.yearInfo}
              yearInfo={r.yearInfo}
              collegeName={r.collegeName}
              qualificationName={r.qualificationName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
