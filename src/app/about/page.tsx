import React from "react";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About PACS</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-xl">More information about PACS to go here</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
