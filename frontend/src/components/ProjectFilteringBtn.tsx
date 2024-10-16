type ProjectFilteringBtn = {
  name: string;
  selectedType: string;
  onClick: () => void;
};
const ProjectFilteringBtn = ({
  name,
  selectedType,
  onClick,
}: ProjectFilteringBtn) => {
  let className =
    "border-[2px] border-orange-600 px-4 py-2 rounded-xl text-orange-600";
  if (name === selectedType) {
    className =
      "border-[2px] bg-orange-600 text-white border-orange-600 px-4 py-2 rounded-xl";
  }

  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
};

export default ProjectFilteringBtn;
