import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
// import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";
import SectionName from "@/components/shared/section-names/SectionName";
import AboutListItem from "@/components/shared/abouts/AboutListItem";

interface AboutItem {
  id: number;
  title: string;
}

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

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
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
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
