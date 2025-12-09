import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionName from "@/components/shared/section-names/SectionName";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";
import CobhamLogo from "@/assets/images/New Photos/Cobham Youth Justice.png";
import PolenLogo from "@/assets/images/New Photos/POLEN - 1.png";
import MCMLogo from "@/assets/images/New Photos/MCM - 1.png";
import PowerEnclaveLogo from "@/assets/images/New Photos/Power Enclave.png";
import LupeokoLogo from "@/assets/images/New Photos/Lupeoko Tongan Arts - 1.png";

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => {
  let logo;
  switch (name) {
    case "Cobham Youth Justice":
      logo = CobhamLogo;
      break;
    case "POLEN":
      logo = PolenLogo;
      break;
    case "MCM":
      logo = MCMLogo;
      break;
    case "Power Enclave":
      logo = PowerEnclaveLogo;
      break;
    case "Lupeoko Tongan Arts":
      logo = LupeokoLogo;
      break;
    default:
      logo = CobhamLogo; // fallback
  }
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative aspect-square w-full max-w-[180px] bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={logo}
          alt={`${name} Logo`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-contentColor">{name}</p>
    </div>
  );
};

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
