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
    <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-22">
      <div>
        <Hero1 />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Programs />
      </div>
      <div>
        <GetInvolved />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <AnnualReport />
      </div>
      <div>
        <Partnerships />
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
};

export default Homepage;
