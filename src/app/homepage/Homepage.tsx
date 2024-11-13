import Hero1 from "@/components/sections/hero-banners/Hero1";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <main className="flex flex-col space-y-22">
      <div className="pt-8">
        <Hero1 />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Programs />
      </div>
    </main>
  );
};

export default Homepage;
