import React from "react";
import Image from "next/image";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import SectionName from "@/components/shared/section-names/SectionName";
import CommunityDrivenImage1 from "@/assets/images/New Photos/A Community-Driven Organisation - 1.png";
import CommunityDrivenImage2 from "@/assets/images/New Photos/A Community-Driven Organisation - 2.png";
import { cn } from "@/lib/utils";

// A simple card component for this page, styled like others in the project.
const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => (
  <div
    className={cn(
      "overflow-hidden rounded-lg bg-gray-50 p-6 shadow-sm flex flex-col h-full",
      className
    )}
  >
    <div className="p-4 sm:p-6 md:p-5 xl:p-7 flex-grow">
      <h3 className="mb-4 text-xl font-semibold text-primaryColor sm:text-[22px] md:text-xl lg:text-[22px]">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-contentColor">{children}</p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-22">
        {/* Section 1: Page Header */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark mt-4">
              About Pacific & Australian Community Services
            </h1>
          </div>
        </section>

        {/* Section 2: Who We Are */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Text content */}
              <div data-aos="fade-up">
                <SectionName>WHO WE ARE</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  A{" "}
                  <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                    Community-Driven
                  </span>
                  ‎ Organisation
                </h2>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-4">
                  Pacific & Australian Community Services Inc. (PACS) is a
                  community-driven organisation dedicated to empowering Pasifika
                  youth and men across the Liverpool and Campbelltown regions.
                  We deliver tailored workshops, programs, and support services
                  that address issues such as mental health, anger management,
                  and reintegration challenges.
                </p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  We focus on leadership development, cultural identity, and
                  meaningful community engagement-empowering young people from
                  Pacific Islander and multicultural backgrounds to become
                  leaders, storytellers, and agents of change.
                </p>
              </div>

              {/* Right side: Image */}
              <div data-aos="fade-up" className="flex justify-center">
                <Image
                  src={CommunityDrivenImage1}
                  alt="PACS Community Engagement"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Vision & Mission */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Image */}
              <div
                data-aos="fade-up"
                className="flex justify-center order-1 lg:order-1"
              >
                <Image
                  src={CommunityDrivenImage2}
                  alt="Our Vision for the Future"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[450px]"
                />
              </div>

              {/* Right side: Text content */}
              <div data-aos="fade-up" className="space-y-10 order-2 lg:order-2">
                <div>
                  <h3 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark pb-4">
                    Our Vision
                  </h3>
                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark pl-3 border-l-2 border-primaryColor">
                    We envision a future where Australian Pasifika individuals
                    and families thrive-equipped with the tools, support, and
                    opportunities to break barriers and build meaningful lives
                    within their communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark pb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark pl-3 border-l-2 border-secondaryColor">
                    To empower Pasifika youth and men by building strong
                    connections, nurturing identity, and supporting personal
                    transformation through a culturally responsive, whole-person
                    service model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Initiatives */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container">
            <div className="max-w-[800px]">
              <SectionName>WHAT WE DO</SectionName>
              <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                Our Key{" "}
                <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                  Initiatives
                </span>
              </h2>
            </div>
            <div className="max-w-[800px]">
              <ul className="space-y-5 mt-4">
                <li className="flex items-center group">
                  <i className="icofont-check text-primaryColor mr-15px border border-primaryColor rounded-full"></i>
                  <p className="text-sm md:text-base text-blackColor dark:text-blackColor-dark">
                    Youth Outreach Engagement & Steps to Success Program
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check text-primaryColor mr-15px border border-primaryColor rounded-full"></i>
                  <p className="text-sm md:text-base text-blackColor dark:text-blackColor-dark">
                    Pasifika Leadership Pathways Program
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check text-primaryColor mr-15px border border-primaryColor rounded-full"></i>
                  <p className="text-sm md:text-base text-blackColor dark:text-blackColor-dark">
                    PACS Mens Group
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                These programs support individuals in building resilience,
                avoiding incarceration, and making positive life choices through
                a whole-person approach to healing and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Our Values */}
        <section>
          <div className="container">
            <div className="max-w-[800px]">
              <SectionName>OUR VALUES</SectionName>
              <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                The Principles That{" "}
                <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                  Guide Us
                </span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mt-8">
              <InfoCard title="Service">
                We are driven by a deep commitment to serving and uplifting our
                community.
              </InfoCard>
              <InfoCard title="Trust">
                We cultivate trust through collaboration, transparency, and
                respect.
              </InfoCard>
              <InfoCard title="Equity">
                We ensure all young people, regardless of background, have
                access to the support and opportunities they deserve.
              </InfoCard>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default AboutPage;
