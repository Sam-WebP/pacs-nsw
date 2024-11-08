import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import React from "react";
import group_picture from "@/assets/images/group_picture.png";
import aboutImage8 from "@/assets/images/about_8.png";

import SectionName from "@/components/shared/section-names/SectionName";
import AboutListItem from "@/components/shared/abouts/AboutListItem";

interface AboutItem {
  id: number;
  title: string;
}

const About: React.FC = () => {
  const items: AboutItem[] = [
    { id: 1, title: "Weekly mentoring sessions, including Mentoring Night and Youth Leadership Mentoring" },
    { id: 2, title: "Opportunities to develop life skills, such as mental health awareness, conflict resolution, and career planning" },
    { id: 3, title: "Collaboration with community leaders, including current and former NRL players and members of parliament" },
    { id: 4, title: "A network of supportive sponsors and partners, ensuring our programs are impactful and sustainable" },
    { id: 5, title: "A safe space for young people to share their experiences and find support." },
  ];
  return (
    <section>
      <div className="container">
        {/* about section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px pt-20">
          {/* about left */}
          <div data-aos="fade-up">
            <div className="tilt relative">
              <Image
                className="w-full"
                src={aboutImage8}
                alt=""
                placeholder="blur"
              />
              <Image
                className="absolute left-0 top-0 lg:top-4 w-full"
                src={group_picture}
                alt=""
                placeholder="blur"
              />
            </div>
          </div>

          {/* about right */}
          <div data-aos="fade-up" className="pl-0 lg:pl-35px">
            <SectionName>What do we do?</SectionName>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              Helping Young People Realise Their {" "}
              <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Potential
              </span>{" "}
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
            PACS NSW is a not-for-profit organisation dedicated to empowering young people through mentorship, guidance, and support. We focus on creating a safe and inclusive space for youth to express themselves, build skills, and forge a brighter future. Our programs are designed to address real-life challenges while fostering personal growth and community connections.
            </p>
            <ul className="space-y-5">
              {items.map((item, idx) => (
                <AboutListItem key={idx} item={item} />
              ))}
            </ul>

            <div className="mt-10">
              <ButtonPrimary path="#" arrow={true}>
                More About
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
