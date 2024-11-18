import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";
import SectionName from "@/components/shared/section-names/SectionName";
import AboutListItem from "@/components/shared/abouts/AboutListItem";
import marquee1 from "@/assets/images/marquee_1.webp";
import marquee2 from "@/assets/images/marquee_2.webp";
import marquee3 from "@/assets/images/marquee_3.webp";
import marquee4 from "@/assets/images/marquee_4.webp";
import marquee5 from "@/assets/images/marquee_5.webp";
import marquee6 from "@/assets/images/marquee_6.webp";
import marquee7 from "@/assets/images/marquee_7.webp";
import marquee8 from "@/assets/images/marquee_8.webp";
import marquee9 from "@/assets/images/marquee_9.webp";
import marquee10 from "@/assets/images/marquee_10.webp";
import marquee11 from "@/assets/images/marquee_11.webp";
import marquee12 from "@/assets/images/marquee_12.webp";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";

interface AboutItem {
  id: number;
  title: string;
}

const ImageCard = ({ img }: { img: StaticImageData }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border"
      )}
    >
      <Image className="object-cover" alt="" src={img} />
    </figure>
  );
};

const About: React.FC = () => {
  const marqueeImages = [
    { img: marquee1 },
    { img: marquee2 },
    { img: marquee3 },
    { img: marquee4 },
    { img: marquee5 },
    { img: marquee6 },
    { img: marquee7 },
    { img: marquee8 },
    { img: marquee9 },
    { img: marquee10 },
    { img: marquee11 },
    { img: marquee12 },
  ];
  const firstRow = marqueeImages.slice(0, marqueeImages.length / 2);
  const secondRow = marqueeImages.slice(marqueeImages.length / 2);

  const items: AboutItem[] = [
    {
      id: 1,
      title:
        "Weekly mentoring sessions, including Mentoring Night and Youth Leadership Mentoring",
    },
    {
      id: 2,
      title:
        "Opportunities to develop life skills, such as mental health awareness, conflict resolution, and career planning",
    },
    {
      id: 3,
      title:
        "Collaboration with community leaders, including current and former NRL players and members of parliament",
    },
    {
      id: 4,
      title:
        "A network of supportive sponsors and partners, ensuring our programs are impactful and sustainable",
    },
    {
      id: 5,
      title:
        "A safe space for young people to share their experiences and find support.",
    },
  ];
  return (
    <section>
      <div className="container">
        {/* about section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px">
          {/* about right */}
          <div
            data-aos="fade-up"
            className="pl-0 lg:pl-35px order-1 lg:order-2 pb-25px md:-pb-0"
          >
            <SectionName>OUR MISSION</SectionName>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              Helping Young People Realise Their{" "}
              <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                Potential
              </span>{" "}
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              PACS NSW is a not-for-profit organisation dedicated to empowering
              young people through mentorship, guidance, and support. We focus
              on creating a safe and inclusive space for youth to express
              themselves, build skills, and forge a brighter future. Our
              programs are designed to address real-life challenges while
              fostering personal growth and community connections.
            </p>
            <ul className="space-y-5">
              {items.map((item, idx) => (
                <AboutListItem key={idx} item={item} />
              ))}
            </ul>

            <div className="mt-25px">
              <Link href="/about">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    More About
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
          {/* about left */}
          <div data-aos="fade-up" className="order-2 lg:order-1">
            <div className="relative flex h-[300px] lg:h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
              <Marquee pauseOnHover vertical className="[--duration:60s]">
                {firstRow.map((pic, index) => (
                  <ImageCard key={`first-${index}`} {...pic} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:60s]"
              >
                {secondRow.map((pic, index) => (
                  <ImageCard key={`second-${index}`} {...pic} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
