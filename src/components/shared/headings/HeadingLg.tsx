import React from "react";

interface HeadingLgProps {
  children: React.ReactNode;
  color?: "white" | "default";
}

const HeadingLg: React.FC<HeadingLgProps> = ({ children, color }) => {
  return (
    <div>
      <h1
        className={`text-4xl ${
          color === "white"
            ? "text-whiteColor"
            : "text-blackColor dark:text-blackColor-dark"
        } md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight md:leading-tight lg:leading-tight 2xl:leading-tight tracking-tighter font-bold mb-4`}
      >
        {children}
      </h1>
    </div>
  );
};

export default HeadingLg;
