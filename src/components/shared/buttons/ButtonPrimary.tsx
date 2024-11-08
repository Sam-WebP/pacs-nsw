"use client";
import Link from "next/link";
import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  path?: string;
  arrow?: boolean;
  width?: "full" | "auto";
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  color,
  type,
  path,
  arrow,
  width,
  onClick,
}) => {
  return type === "button" || type === "submit" ? (
    <button
      {...{ type: type === "submit" ? "submit" : "" }}
      onClick={onClick ? onClick : () => {}}
      className={`text-size-15 text-whiteColor  px-25px py-10px border  hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor ${
        width === "full" ? "w-full" : ""
      } ${
        color === "secondary"
          ? "bg-secondaryColor border-secondaryColor hover:text-secondaryColor"
          : "bg-primaryColor border-primaryColor hover:text-primaryColor"
      }`}
    >
      {children} {arrow && <i className="icofont-long-arrow-right"></i>}
    </button>
  ) : (
    <Link
      className={`text-size-15 text-whiteColor  px-25px py-10px border  hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor ${
        color === "secondary"
          ? "bg-secondaryColor border-secondaryColor hover:text-secondaryColor"
          : "bg-primaryColor border-primaryColor hover:text-primaryColor"
      }`}
      href={path}
    >
      {children} {arrow && <i className="icofont-long-arrow-right"></i>}
    </Link>
  );
};

export default ButtonPrimary;
