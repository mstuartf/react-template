import React from "react";
import AppLink from "./AppLink";

interface Props {
  to: string;
  children: React.ReactNode;
}

const PlainLink = ({ to, children }: Props) => (
  <AppLink to={to} className="text-blue-500 hover:text-blue-800">
    {children}
  </AppLink>
);

export default PlainLink;
