import React from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const base = "block flex items-center border-b py-4";

interface Props {
  path: string;
  label: string;
  params?: {
    [key: string]: string | number;
  };
}

const NavLink = ({ path, label, params }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center">
      <Link
        to={`${path}${params ? `?${queryString.stringify(params)}` : ""}`}
        className={
          pathname === path
            ? `${base} border-gray-700`
            : `${base} border-transparent hover:border-gray-400 transition duration-300 ease-in-out`
        }
      >
        {label}
      </Link>
    </div>
  );
};

export default NavLink;
