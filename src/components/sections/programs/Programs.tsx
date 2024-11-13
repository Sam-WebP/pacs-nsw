import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import ProgramCard from "./ProgramCard";
import YouthLeadership from "@/assets/images/youth-leadership.png";
import MentoringNight from "@/assets/images/mentoring-night.png";

const Programs: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>PROGRAMS & SERVICES</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Weekly Programs to{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Inspire
            </span>
            {" "}Our Youth
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <ProgramCard
            image={YouthLeadership}
            title="Youth Leadership Mentoring"
            description="Leadership workshops that assist with the quality of decision-making. It enhances direction, goal setting, and motivation to develop a better quality of life."
            details={{
              date: "Every Thursday, starting 2nd of May",
              time: "6:00 PM - 7:30 PM",
              location: "Campbelltown Catholic Club",
            }}
            buttonText="Sign Up"
          />
          <ProgramCard
            image={MentoringNight}
            title="Mentoring Night"
            description="This is a safe space for young men to learn various practical skills, including mental health. The program is designed to empower, strengthen, and motivate youth to reach a higher SELF."
            details={{
              date: "Every Wednesday",
              time: "6:00 PM - 7:30 PM",
              location: "Whitlam Leisure Centre, 90 Memorial Ave, Liverpool"
            }}
            buttonText="Sign Up"
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
