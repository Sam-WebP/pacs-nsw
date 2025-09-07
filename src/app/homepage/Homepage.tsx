import Hero1 from "@/components/sections/hero-banners/Hero1";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";
import AnnualReport from "@/components/sections/annual-report/AnnualReport";
import Partnerships from "@/components/sections/partnerships/Partnerships";
import GetInvolved from "@/components/sections/get-involved/GetInvolved";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <main className="flex flex-col">
      <div className="py-16 bg-bodyBg">
        <Hero1 />
      </div>
      <div className="py-16 bg-bodyBg">
        <About />
      </div>
      <div className="py-16 bg-white">
        <Programs />
      </div>
      <div className="py-16 bg-bodyBg">
        <GetInvolved />
      </div>
      <div className="py-16 bg-white">
        <Testimonials />
      </div>
      <div className="py-16 bg-bodyBg">
        <AnnualReport />
      </div>
      <div className="py-16 bg-white">
        <Partnerships />
      </div>
      <div className="py-16 bg-bodyBg">
        <Contact />
      </div>
    </main>
  );
};

export default Homepage;
