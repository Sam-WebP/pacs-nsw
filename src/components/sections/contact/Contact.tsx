import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import { SignupFormDemo } from "@/components/shared/forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>CONTACT US</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Get in{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Touch
            </span>
          </h3>
          <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6">
            We’d love to hear from you! Whether you have questions about our
            programs, want to get involved, or simply need support, feel free to
            reach out to us using the form below:
          </p>
        </div>
        <div className="flex justify-center">
          <SignupFormDemo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
