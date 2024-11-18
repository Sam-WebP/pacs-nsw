import React from "react";
import Contact from "@/components/sections/contact/Contact";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <Contact />
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
