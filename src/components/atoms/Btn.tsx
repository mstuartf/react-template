import React from "react";

export type BtnRole = "cta" | "cancel" | "plain" | "delete" | "shadow";

export const styling = {
  cta: "bg-blue-500 hover:bg-blue-700 text-white",
  cancel: "",
  plain: "bg-white hover:bg-gray-100 text-gray-900 border border-gray-400",
  shadow: "bg-white hover:bg-gray-100 text-gray-900 shadow-md",
  delete: "bg-white hover:bg-red-100 text-red-800 border border-red-800",
};

export const disabledStyling = {
  cta: "bg-blue-300 text-white cursor-not-allowed",
  cancel: " cursor-not-allowed",
  plain: "bg-gray-200 text-gray-600 border border-gray-400 cursor-not-allowed",
  shadow:
    "bg-white hover:bg-gray-100 text-gray-900 shadow-md cursor-not-allowed",
  delete: "bg-red-100 text-red-400 border border-red-400 cursor-not-allowed",
};

interface Props {
  role?: BtnRole;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => any;
  block?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const Btn = ({
  type = "button",
  children,
  onClick,
  role = "cta",
  block,
  isDisabled,
  className,
}: Props) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${className || ""} py-1 px-3 rounded focus:outline-none ${
        (isDisabled ? disabledStyling : styling)[role]
      } ${block ? "w-full" : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Btn;
