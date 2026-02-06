import Hero1 from "@/components/sections/hero-banners/Hero1";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";
import AnnualReport from "@/components/sections/annual-report/AnnualReport";
import Partnerships from "@/components/sections/partnerships/Partnerships";
import GetInvolved from "@/components/sections/get-involved/GetInvolved";
import {
  ScrollReveal,
  ScrollRevealLeft,
  ScrollRevealRight,
} from "@/components/ui/ScrollReveal";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <main className="flex flex-col">
      <div className="py-5 bg-bodyBg">
        <ScrollReveal>
          <Hero1 />
        </ScrollReveal>
      </div>
      <div className="py-6 md:py-16 bg-bodyBg">
        {/* Pass immediate=true directly to About so its inner content loads immediately */}
        <About immediate={true} />
      </div>
      <div className="py-16 bg-white">
        <ScrollReveal>
          <Programs />
        </ScrollReveal>
      </div>
      <div className="py-16 bg-bodyBg">
        <ScrollReveal>
          <GetInvolved />
        </ScrollReveal>
      </div>
      <div className="py-16 bg-white">
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
      </div>
      <div className="py-16 bg-bodyBg">
        <ScrollReveal>
          <AnnualReport />
        </ScrollReveal>
      </div>
      <div className="py-16 bg-white">
        <ScrollReveal>
          <Partnerships />
        </ScrollReveal>
      </div>
      <div className="py-16 bg-bodyBg">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Homepage;
