import React from "react";
import Image, { StaticImageData } from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

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
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 border border-primaryColor/20"> {/* Added border style */}
      <div className="relative h-[240px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <h3 className="mb-4 text-xl font-semibold text-primaryColor dark:text-blackColor-dark hover:text-primaryColor sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
          {title}
        </h3>
        <p className="mb-7 text-base leading-relaxed text-contentColor dark:text-contentColor-dark">
          {description}
        </p>
        <div className="mb-7 space-y-2 text-contentColor dark:text-contentColor-dark">
          <p><strong>Date:</strong> {details.date}</p>
          <p><strong>Time:</strong> {details.time}</p>
          <p><strong>Location:</strong> {details.location}</p>
        </div>
        <div className="mt-25px">
          <ButtonPrimary path="#" arrow={true}>
            {buttonText}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
