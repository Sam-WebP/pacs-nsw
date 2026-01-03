"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import HeadingLg from "@/components/shared/headings/HeadingLg";
import ParagraphHero from "@/components/shared/paragraphs/ParagraphHero";
import HeroName from "@/components/shared/section-names/HeroName";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { isFirefox } from "@/lib/browser";
import heroVideo from "@/assets/videos/hero_video.mp4";
import heroVideoThumbnail from "@/assets/images/thumbnail_hero_video.webp";
import herobanner2 from "@/assets/images/register__2.webp";
import herobanner7 from "@/assets/images/herobanner__7.webp";
import Link from "next/link";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";

const Hero1: React.FC = () => {
  const [isFirefoxBrowser, setIsFirefoxBrowser] = useState(false);

  useEffect(() => {
    // Check if browser is Firefox on client side
    setIsFirefoxBrowser(isFirefox());
  }, []);

  return (
    <section data-aos="fade-up">
      {/* banner section  */}
      <div className="container2-xl bg-darkdeep1 pt-50px md:pt-20 pb-50px rounded-2xl relative overflow-hidden shadow-brand">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12">
          {/* banner Left  */}
          <div data-aos="fade-up">
            <HeroName>Pacific & Australian Community Services (PACS)</HeroName>
            <TextAnimate
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight md:leading-tight lg:leading-tight 2xl:leading-tight tracking-tighter font-bold text-whiteColor mb-4"
              animation="blurInUp"
              by="character"
              once
            >
              Empowering Pasifika Futures - Through Culture, Connection & Care
            </TextAnimate>
            <ParagraphHero color="white">
              Supporting young people through mentorship, cultural identity and
              leadership development
            </ParagraphHero>
            {/* Buttons for smaller screens */}
            <div className="mt-30px md:mt-45px pb-25px md:pb-25px lg:hidden">
              <Link href="/contact">
                <ShimmerButton
                  className="mr-6px md:mr-30px shadow-hero-action"
                  shimmerColor="#ffffff"
                  background="var(--secondaryColor, #FE7200)"
                >
                  <span className="text-sm md:text-size-15 font-semibold text-darkdeep2 dark:text-darkdeep2">
                    Get Involved
                  </span>
                </ShimmerButton>
              </Link>
              <Link
                href="/about"
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
                poster={heroVideoThumbnail.src}
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Buttons for larger screens */}
            <div className="hidden lg:block mt-30px md:mt-45px">
              <Link href="/contact">
                <ShimmerButton
                  className="mr-6px md:mr-30px shadow-hero-action"
                  shimmerColor="#ffffff"
                  background="var(--secondaryColor, #FE7200)"
                >
                  <span className="text-sm md:text-size-15 font-semibold text-darkdeep2 dark:text-darkdeep2">
                    Get Involved
                  </span>
                </ShimmerButton>
              </Link>
              <Link
                href="/about"
                className="text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
              >
                Find out more <i className="icofont-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="absolute left-1/2 bottom-[15%] animate-spin-slow"
            src={herobanner2}
            alt=""
          />
          {!isFirefoxBrowser && (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero1;
