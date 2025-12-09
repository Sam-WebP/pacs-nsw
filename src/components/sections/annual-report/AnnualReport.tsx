import React from "react";
import Image from "next/image";
import SectionName from "@/components/shared/section-names/SectionName";
import BrucePhoto from "@/assets/images/New Photos/Photo of Bruce - to go with his founder message.png";

const AnnualReport: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>Annual Report 2024–2025</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Year in{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Review
            </span>
          </h3>
          <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            The 2024–2025 year saw PACS continue to expand its influence and
            deepen its impact within the community. We strengthened partnerships
            with organisations like Cobham Youth Justice, POLEN, MCM, and the
            NRL community. Through mentoring, leadership programs, and cultural
            events, we’ve continued to advocate for young people, ensuring their
            voices are heard and valued in policy discussions.
          </p>
        </div>

        <div className="mt-12">
          <blockquote className="rounded-lg bg-white dark:bg-darkdeep2 p-6 shadow-lg sm:p-8">
            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
              <Image
                alt="Founder Bruce Pikula"
                src={BrucePhoto}
                className="size-16 rounded-full object-cover"
                width={64}
                height={64}
              />
              <div>
                <h4 className="text-lg font-bold text-blackColor dark:text-blackColor-dark">
                  Message from the Founder, Bruce Pikula
                </h4>
              </div>
            </div>
            <div className="mt-6 space-y-4 pl-4 border-l-2 border-primaryColor text-sm md:text-base text-contentColor dark:text-contentColor-dark">
              <p>
                At the heart of everything we do at PACS is connection.
                Connection to culture. Connection to community. Connection to
                one another.
              </p>
              <p>
                Over the past year, I’ve witnessed how powerful these
                connections can be—how a single conversation, a shared story, or
                a meaningful experience can spark change. And when these
                connections grow, they create something even more powerful:
                collaboration.
              </p>
              <p>
                Collaboration is how we’ve been able to grow our reach, deepen
                our impact, and continue to walk alongside our young people in
                ways that are real, relevant, and respectful. Whether it’s
                through our ongoing work with partners like Cobham Youth
                Justice, POLEN, MCM, or the NRL community, or in the day-to-day
                mentoring circles, cultural camps, or community forums—we’ve
                seen that genuine connection opens doors to lasting change.
              </p>
              <p>
                Young people are at the centre of this work. They’re not just
                participants; they’re leaders, storytellers, and system-shapers.
                When we invest in them—through mentoring, leadership
                development, and cultural identity work—we’re investing in a
                stronger, more united future.
              </p>
              <p>
                To our partners, collaborators, parents, volunteers, and young
                people: thank you. Thank you for trusting us, standing with us,
                and continuing to believe in what’s possible when community
                leads.
              </p>
              <p>
                As we look to the future, we’ll keep building with the same
                values we started with—culture, connection, and care. Because
                it’s through these relationships that real, lasting
                transformation takes place.
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AnnualReport;
