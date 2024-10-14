import { Link, useLocation } from "react-router-dom";

export type NavItemProps = {
  name: string;
  url: string;
  isExternal?: boolean;
  onClick?: () => void;
};

const NavItem = ({ name, url, isExternal, onClick }: NavItemProps) => {
  const { pathname } = useLocation();
  const className =
    pathname === url
      ? "light-orange rounded md:bg-transparent md:light-orange md:p-0 md:underline md:decoration-orange-600 md:underline-offset-[6px]"
      : "rounded hover:bg-orange-600 md:hover:bg-transparent md:border-0 md:hover:light-orange md:p-0";
  return (
    <li
      className={`${className} text-xl block cursor-pointer dark-white py-3 px-3 text-center`}
    >
      {isExternal ? (
        <Link to={{ pathname: url }} target="_blank" />
      ) : (
        <Link onClick={onClick} to={url}>
          {name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;
