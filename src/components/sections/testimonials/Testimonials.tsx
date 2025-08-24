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
            From Our{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Pasifika
            </span>{" "}
            Youth
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <TestimonialCard
            name="Samu"
            image={SamuProfilePicture}
            text="“I’ve been coming to the Wednesday night program for over a year. I like coming because I like to see the boys. I’ve been going through hard things and sharing them with the boys—and letting them share with me. That way, we can help each other. It makes us feel safe.”"
            rating={5}
          />
          <TestimonialCard
            name="Seki"
            image={JPProfilePicture}
            text="“I love coming to PACS mentoring night. It makes me feel loved. It makes me feel safe. It lets me know that whatever I'm going through, I can speak up about it—and know that the boys in the group have my back. They can open up without feeling judged. You never know—maybe what they’re going through is something someone else is going through too. You can talk amongst each other, get to know each other, and feel safe to be yourself.”"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
