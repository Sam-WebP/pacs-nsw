import Hero1 from "@/components/sections/hero-banners/Hero1";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero1 />
      <About />
      <Programs />
    </>
  );
};

export default Homepage;
