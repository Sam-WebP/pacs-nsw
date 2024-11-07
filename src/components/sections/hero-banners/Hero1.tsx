"use client";

import HeadingLg from "@/components/shared/headings/HeadingLg";
import ParagraphHero from "@/components/shared/paragraphs/ParagraphHero";
import HeroName from "@/components/shared/section-names/HeroName";
import Image from "next/image";
import React, { useEffect } from "react";
import heroVideo from "@/assets/videos/hero_video.mp4";
import herobanner2 from "@/assets/images/register__2.png";
import herobanner6 from "@/assets/images/herobanner__6.png";
import herobanner7 from "@/assets/images/herobanner__7.png";
import Link from "next/link";

const Hero1: React.FC = () => {
  return (
    <section data-aos="fade-up">
      {/* banner section  */}
      <div className="container2-xl bg-darkdeep1 pt-50px md:pt-20 pb-60px rounded-2xl relative overflow-hidden shadow-brand">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* banner Left  */}
          <div data-aos="fade-up">
            <HeroName>PACIFIC & AUSTRALIAN COMMUNITY SERVICES</HeroName>
            <HeadingLg color="white">
              Individual Focused & 
              Community Supported
            </HeadingLg>
            <ParagraphHero color="white">
              Creating Safe Spaces for Young People to Grow, Connect, and Succeed.
            </ParagraphHero>
            <div className="mt-30px md:mt-45px pb-25px md:pb-25px">
              <Link
                href="/courses"
                className="text-sm md:text-size-15 font-semibold text-darkdeep2 bg-secondaryColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none"
              >
                Get Involved
              </Link>
              <Link
                href="/courses"
                className="text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
              >
                Find out more <i className="icofont-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          {/* banner right  */}
          <div data-aos="fade-up"> 
            <div className="tilt relative">
              <video
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="absolute left-1/2 bottom-[15%] animate-spin-slow"
            src={herobanner2}
            alt=""
          />
          <Image
            className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
            src={herobanner6}
            alt=""
          />
          <Image
            className="absolute right-[5%] bottom-[15%]"
            src={herobanner7}
            alt=""
          />
          <Image
            className="absolute top-[5%] left-[45%]"
            src={herobanner7}
            alt=""
          /> 
        </div>
      </div>
    </section>
  );
};

export default Hero1;
