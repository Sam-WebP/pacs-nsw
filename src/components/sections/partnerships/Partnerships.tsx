import React from "react";
import SectionName from "@/components/shared/section-names/SectionName";
import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";
import {
  ScrollReveal,
  ScrollRevealStagger,
} from "@/components/ui/ScrollReveal";
import CobhamLogo from "@/assets/images/Community Partners Logos/Cobham.jpeg";
import PolenLogo from "@/assets/images/Community Partners Logos/Polen.jpeg";
import MCMLogo from "@/assets/images/Community Partners Logos/MCM.jpeg";
import PowerEnclaveLogo from "@/assets/images/Community Partners Logos/Power Enclave.jpeg";
import LupeokoLogo from "@/assets/images/Community Partners Logos/Lupeoko.jpeg";
import ReibyLogo from "@/assets/images/Community Partners Logos/reiby.jpeg";

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
    case "Reiby Juvenile Justice":
      logo = ReibyLogo;
      break;
    default:
      logo = CobhamLogo; // fallback
  }
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative aspect-video w-full max-w-[200px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} Logo`}
          fill
          className="object-contain p-2"
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
    "Reiby Juvenile Justice",
  ];

  return (
    <section>
      <div className="container">
        <div className="max-w-[800px]">
          <ScrollReveal>
            <SectionName>PARTNERSHIPS & COLLABORATIONS</SectionName>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              Our Community{" "}
              <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                Partners
              </span>
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10">
              At PACS, collaboration is at the heart of everything we do. We
              work closely with a range of community groups, government
              agencies, and private sector partners to broaden our impact and
              ensure our programs meet the diverse needs of Pasifika youth and
              men.
            </p>
          </ScrollReveal>
        </div>

        {/* Partner Logos */}
        <ScrollRevealStagger staggerChildren={0.1} delayChildren={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 mt-8">
            {partners.map((partner) => (
              <PartnerLogo key={partner} name={partner} />
            ))}
          </div>
        </ScrollRevealStagger>

        <div className="mt-12">
          <ScrollReveal delay={0.3}>
            <Link href="/partnerships">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Learn More About Our Partners
                </span>
              </ShimmerButton>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
