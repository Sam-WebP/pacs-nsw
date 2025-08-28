import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import SectionName from "@/components/shared/section-names/SectionName";
import PlaceholderImage from "@/assets/images/placeholder-image.png";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";
import Video from "@/components/sections/video/Video";
import { cn } from "@/lib/utils";

// Reusable card for different ways to get involved
const InvolvementCard: React.FC<{
  title: string;
  buttonText: string;
  buttonLink: string;
  children: React.ReactNode;
}> = ({ title, buttonText, buttonLink, children }) => (
  <div className="overflow-hidden rounded-lg bg-white dark:bg-darkdeep2 p-6 shadow-lg flex flex-col h-full">
    <div className="flex-grow">
      <h3 className="mb-4 text-xl font-semibold text-primaryColor sm:text-[22px] md:text-xl lg:text-[22px]">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-contentColor dark:text-contentColor-dark">
        {children}
      </p>
    </div>
  </div>
);

const GetInvolvedPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-22">
        {/* Section 1: Page Header */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark">
              Get Involved
            </h1>
          </div>
        </section>

        {/* Section 2: Introduction */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Text content */}
              <div data-aos="fade-up">
                <SectionName>SUPPORT PACS</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  Make a Lasting{" "}
                  <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                    Impact
                  </span>
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  <p>
                    Your support plays a crucial role in helping PACS continue
                    its mission to empower Pasifika youth and men across Western
                    Sydney.
                  </p>
                  <p>
                    With your involvement—whether through donations,
                    volunteering, or strategic partnerships—we can continue to
                    create culturally safe spaces, deliver life-changing
                    programs, and build stronger futures for our communities.
                  </p>
                </div>
              </div>

              {/* Right side: Image */}
              <div data-aos="fade-up" className="flex justify-center">
                <Image
                  src={PlaceholderImage}
                  alt="Community members working together"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How You Can Help */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                How You Can{" "}
                <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                  Help
                </span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <InvolvementCard
                title="Donate"
                buttonText="Donate Now"
                buttonLink="/contact" // Update this link to a donation page when available
              >
                Every dollar makes a difference. Your contributions directly
                support our grassroots programs, including mentoring, cultural
                leadership initiatives, youth justice outreach, and mental
                health support.
              </InvolvementCard>
              <InvolvementCard
                title="Volunteer"
                buttonText="Become a Volunteer"
                buttonLink="/contact"
              >
                Share your time and skills to make a hands-on difference.
                Whether it’s mentoring a young person, helping run workshops, or
                assisting with events, volunteers are vital to our work.
              </InvolvementCard>
              <InvolvementCard
                title="Partner with Us"
                buttonText="Enquire About Partnership"
                buttonLink="/contact"
              >
                We welcome collaborations with businesses, government agencies,
                schools, and community organisations who share our vision. Your
                partnership can help us expand our reach.
              </InvolvementCard>
            </div>
          </div>
        </section>

        {/* Section 4: Concluding Message */}
        <section>
          <div className="container text-center">
            <h3 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
              Join Us on the Journey
            </h3>
            <p className="mt-4 text-lg text-contentColor dark:text-contentColor-dark max-w-3xl mx-auto">
              By getting involved with PACS, you&rsquo;re not just supporting a
              cause—you’re becoming part of a movement to break cycles of
              disadvantage, celebrate culture, and nurture future leaders.
              Together, we can create opportunities, build resilience, and
              support Pasifika youth in reaching their full potential.
            </p>
          </div>
        </section>
        <div>
          <Video />
        </div>
      </main>
    </PageWrapper>
  );
};

export default GetInvolvedPage;
