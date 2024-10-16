const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2541] flex flex-row justify-center px-8 pb-5 pt-10 items-center">
      <span className="text-sm dark-white">
        Copyright © {year} Tharuka Deshan All right reserved.
      </span>
    </footer>
  );
};

export default Footer;
