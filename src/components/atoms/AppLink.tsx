import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const AppLink = ({ to, children, className }: Props) => {
  if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    return (
      <a
        className={`${className || ""}`}
        href={to}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`${className || ""}`} to={to}>
      {children}
    </Link>
  );
};

export default AppLink;
