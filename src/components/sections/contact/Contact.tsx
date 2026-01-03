import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import { ContactForm } from "@/components/shared/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Contact: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <SectionName>CONTACT US</SectionName>
            <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-4">
              Get in{" "}
              <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                Touch
              </span>
            </h2>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Have a question or want to learn more about our programs? Fill out
              the form below, and we&apos;ll get back to you as soon as
              possible.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-12">
          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
