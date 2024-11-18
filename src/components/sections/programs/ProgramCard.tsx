import React from "react";
import Image, { StaticImageData } from "next/image";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";

interface ProgramDetails {
  date: string;
  time: string;
  location: string;
}

interface ProgramCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  details: ProgramDetails;
  buttonText: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  title,
  description,
  details,
  buttonText,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-gray-50 p-6 shadow-sm">
      {" "}
      {/* Added border style */}
      <div className="relative h-[240px] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <h3 className="mb-4 text-xl font-semibold text-primaryColor dark:text-blackColor-dark hover:text-primaryColor sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
          {title}
        </h3>
        <p className="mb-7 text-base leading-relaxed text-contentColor dark:text-contentColor-dark">
          {description}
        </p>
        <div className="mb-7 space-y-2 text-contentColor dark:text-contentColor-dark">
          <p>
            <strong>Date:</strong> {details.date}
          </p>
          <p>
            <strong>Time:</strong> {details.time}
          </p>
          <p>
            <strong>Location:</strong> {details.location}
          </p>
        </div>
        <div className="mt-25px">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Sign Up
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
