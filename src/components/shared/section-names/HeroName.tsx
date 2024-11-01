import React from "react";

interface HeroNameProps {
  children: React.ReactNode;
  color?: "white" | "default";
}

const HeroName: React.FC<HeroNameProps> = ({ children }) => {
  return (
    <span className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px  tracking-5px font-semibold block">
      {children}
    </span>
  );
};

export default HeroName;