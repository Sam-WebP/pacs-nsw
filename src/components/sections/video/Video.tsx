import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";

const Video: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-left">
          <SectionName>WATCH</SectionName>
          <h3 className="text-left text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Our Work in{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Action
            </span>
          </h3>
          <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6">
            To understand the broader context of our work, check out the
            following video:
          </p>
        </div>
        <div className="mt-8">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            {" "}
            {/* 16:9 aspect ratio */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
