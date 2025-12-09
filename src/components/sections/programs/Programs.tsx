import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import ProgramCard from "./ProgramCard";
import YouthOutreachImage from "@/assets/images/New Photos/Youth Outreach Engagement & Steps to Success Program - 1.png";
import PasifikaLeadershipImage from "@/assets/images/New Photos/Pasifika Leadership Pathways Program - 1.png";
import PACSMenGroupImage from "@/assets/images/New Photos/PACS Men_s Group - 1.png";
import Link from "next/link";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";

const Programs: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>PROGRAMS & SERVICES</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Our{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Programs
            </span>{" "}
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <ProgramCard
            image={YouthOutreachImage}
            title="Youth Outreach Engagement & Steps to Success Program"
            description="Supports disengaged youth with mentorship and life skills including workshops on anger management, cultural identity, and resilience. Steps to Success provides one-on-one mentorship and promotes positive decision-making through culturally grounded leadership development."
          />
          <ProgramCard
            image={PasifikaLeadershipImage}
            title="Pasifika Leadership Pathways Program"
            description="In partnership with correctional facilities, this program addresses reoffending and promotes reintegration through culturally rich leadership training. Youth reconnect with their identity, learn goal-setting, and build resilience in a safe, supportive environment."
          />
          <ProgramCard
            image={PACSMenGroupImage}
            title="PACS Men's Group"
            description="This initiative supports the mental health of mature men, offering a culturally sensitive space to break stigmas and promote emotional well-being through shared stories and healing conversations."
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
