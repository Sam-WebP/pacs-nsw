import React from "react";

interface HeadingLgProps {
  children: React.ReactNode;
  color?: "white" | "default";
}

const HeadingLg: React.FC<HeadingLgProps> = ({ children, color }) => {
  return (
    <div>
      <h1
        className={`text-3xl ${
          color === "white"
            ? "text-whiteColor"
            : "text-blackColor dark:text-blackColor-dark"
        } md:text-5xl lg:text-size-50 2xl:text-5xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px`}
      >
        {children}
      </h1>
    </div>
  );
};

export default HeadingLg;
