import { AlignJustify, X } from "lucide-react";
import Logo from "../Logo";
import NavItem, { NavItemProps } from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItemProps[] = [
    { name: "About", url: "/" },
    { name: "Qualifications", url: "/qualifications" },
    { name: "Experience", url: "/experience" },
    { name: "Projects", url: "/projects" },
    //{ name: "Blogs", url: "https://www.linkedin.com/feed", isExternal: true },
  ];

  return (
    <nav className="bg-[#1c2541]">
      <div className=" flex flex-row justify-between common-margin-x py-5 items-center">
        <Logo />
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4">
            {navItems.map((r) => (
              <NavItem key={r.name} name={r.name} url={r.url} />
            ))}
          </ul>
        </div>
        <div className="block md:hidden">
          <AlignJustify
            onClick={() => setIsOpen(true)}
            className="h-[35px] w-[35px] -mt-[8px] text-white cursor-pointer"
          />
        </div>
        {isOpen && (
          <div className="block md:hidden absolute left-0 top-0 w-full px-4 bg-[#2b3145] h-[350px]">
            <div className="flex justify-end pt-4 cursor-pointer">
              <X
                onClick={() => setIsOpen(false)}
                className="h-[35px] w-[35px] text-white"
              />
            </div>
            {navItems.map((r) => (
              <NavItem
                onClick={() => setIsOpen(false)}
                key={r.name}
                name={r.name}
                url={r.url}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
