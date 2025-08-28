import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionName from "@/components/shared/section-names/SectionName";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";
import PlaceholderImage from "@/assets/images/placeholder-image.png";

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center p-2">
      {/* In a real scenario, you'd use partner logo images here */}
      <Image
        src={PlaceholderImage}
        alt={`${name} Logo`}
        className="object-contain max-h-full max-w-full"
      />
    </div>
    <p className="mt-2 text-sm font-medium text-contentColor">{name}</p>
  </div>
);

const Partnerships: React.FC = () => {
  const partners = [
    "Cobham Youth Justice",
    "POLEN",
    "MCM",
    "Power Enclave",
    "Lupeoko Tongan Arts",
  ];

  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <SectionName>PARTNERSHIPS & COLLABORATIONS</SectionName>
          <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
            Our Community{" "}
            <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
              Partners
            </span>
          </h3>
          <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10">
            At PACS, collaboration is at the heart of everything we do. We work
            closely with a range of community groups, government agencies, and
            private sector partners to broaden our impact and ensure our
            programs meet the diverse needs of Pasifika youth and men.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 mt-8">
          {partners.map((partner) => (
            <PartnerLogo key={partner} name={partner} />
          ))}
        </div>

        <div className="mt-12">
          <Link href="/partnerships">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Learn More About Our Partners
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
