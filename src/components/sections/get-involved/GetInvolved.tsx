import React from "react";
import Link from "next/link";
import SectionName from "@/components/shared/section-names/SectionName";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";

// Simple item for the list
const InvolvementItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <li className="flex items-center group">
    <i className="icofont-check text-primaryColor mr-15px border border-primaryColor rounded-full"></i>
    <p className="text-sm md:text-base text-blackColor dark:text-blackColor-dark">
      {children}
    </p>
  </li>
);

const GetInvolved: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-10 items-center">
          {/* Left Column: Text Content */}
          <div data-aos="fade-up">
            <SectionName>GET INVOLVED</SectionName>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              Support PACS & Make a Lasting{" "}
              <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                Impact
              </span>
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-8">
              Your support is crucial in helping us empower Pasifika youth and
              men. Whether through donations, volunteering, or partnerships,
              your involvement helps us create culturally safe spaces and
              deliver life-changing programs.
            </p>

            {/* Ways to help */}
            <ul className="space-y-5 inline-block text-left mb-10">
              <InvolvementItem>Donate to support our programs</InvolvementItem>
              <InvolvementItem>Volunteer your time and skills</InvolvementItem>
              <InvolvementItem>
                Partner with us to expand our reach
              </InvolvementItem>
            </ul>

            <div>
              <Link href="/contribute">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Find Out How You Can Help
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>

          {/* Right Column: Video */}
          <div data-aos="fade-up">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
