import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import TestimonialCard from "./TestimonialCard";
import JPProfilePicture from "@/assets/images/jp_profile_picture.webp";
import HarlemProfilePicture from "@/assets/images/harlem_profile_picture.webp";
import SamuProfilePicture from "@/assets/images/samu_profile_picture.webp";

const Testimonials: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>TESTIMONIALS</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Real{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Experiences
            </span>{" "}
            , Real{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Connections
            </span>
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <TestimonialCard
            name="JP"
            image={JPProfilePicture}
            text="I love going to PACS mentoring nights because it makes me feel loved and safe. It lets me know that whatever I’m going through, I can speak up about it and know that the boys in the group have my back."
            rating={5}
          />
          <TestimonialCard
            name="Harlem"
            image={HarlemProfilePicture}
            text="We get to learn from other people’s experiences, their lives, and their backstories. I’ve learned how to build boundaries and when to say no to things that aren't in my best interest."
            rating={5}
          />
          <TestimonialCard
            name="Samu"
            image={SamuProfilePicture}
            text="I enjoy seeing the boys, their smiles, and their laughter. When I’m going through hard times, sharing it with the boys and letting them share with me helps us support each other, which makes us feel safe."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
