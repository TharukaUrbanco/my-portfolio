export type EducationQualificationProps = {
  yearInfo: string;
  collegeName: string;
  qualificationName: string;
};

const EducationQualification = ({
  yearInfo,
  collegeName,
  qualificationName,
}: EducationQualificationProps) => {
  return (
    <div className="flex flex-col w-[350px] border border-[#ccc9dc] p-4 rounded-2xl my-2  hover:bg-[#2b3145]">
      <h5 className="text-xl light-white">{yearInfo}</h5>
      <p className="text-base dark-white">{collegeName}</p>
      <p className="text-base dark-white italic">{qualificationName}</p>
    </div>
  );
};

export default EducationQualification;
