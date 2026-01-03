import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import SectionName from "@/components/shared/section-names/SectionName";
import CollaborationImage from "@/assets/images/New Photos/Collaboration is at the Heart of What We Do.png";
import CobhamLogo from "@/assets/images/New Photos/Cobham Youth Justice.png";
import PolenLogo from "@/assets/images/New Photos/POLEN - 1.png";
import MCMLogo from "@/assets/images/New Photos/MCM - 1.png";
import PowerEnclaveLogo from "@/assets/images/New Photos/Power Enclave.png";
import LupeokoLogo from "@/assets/images/New Photos/Lupeoko Tongan Arts - 1.png";
import ReibyLogo from "@/assets/images/New Photos/Reiby Juvenile Justice Centre.png";
import ShimmerButton from "@/components/shared/buttons/ShimmerButton";
import { cn } from "@/lib/utils";
import {
  ScrollReveal,
  ScrollRevealStagger,
} from "@/components/ui/ScrollReveal";

// Updated card component to include a logo
const PartnerCard: React.FC<{
  title: string;
  logo: StaticImageData;
  children: React.ReactNode;
}> = ({ title, logo, children }) => (
  <div className="overflow-hidden rounded-lg bg-white dark:bg-darkdeep2 p-6 shadow-lg flex flex-col h-full text-center items-center">
    {/* Logo Area */}
    <div className="relative aspect-square w-full max-w-[180px] bg-gray-50 rounded-lg overflow-hidden mb-4">
      <Image
        src={logo}
        alt={`${title} Logo`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </div>
    {/* Content Area */}
    <div className="flex-grow">
      <h3 className="mb-4 text-xl font-semibold text-primaryColor sm:text-[22px] md:text-xl lg:text-[22px]">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-contentColor dark:text-contentColor-dark">
        {children}
      </p>
    </div>
  </div>
);

const PartnershipsPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-22">
        {/* Section 1: Page Header */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark">
                Partnerships & Collaborations
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Introduction to Partnerships */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Text content */}
              <ScrollReveal>
                <SectionName>KEY PARTNERSHIPS</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  Collaboration is at the{" "}
                  <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                    Heart
                  </span>{" "}
                  of What We Do
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  <p>
                    We work closely with a range of community groups, government
                    agencies, and private sector partners to broaden our impact
                    and ensure our programs meet the diverse needs of Pasifika
                    youth and men. These partnerships enable us to deliver
                    culturally safe, community-driven solutions that create
                    real, lasting change.
                  </p>
                  <p>
                    Whether it&apos;s through justice reform, cultural
                    preservation, or mentorship and leadership development, our
                    partners help us amplify our efforts and connect with those
                    who need support the most.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right side: Image */}
              <ScrollReveal delay={0.2} className="flex justify-center">
                <Image
                  src={CollaborationImage}
                  alt="Community collaboration meeting"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[450px]"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Partner List */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container">
            <ScrollReveal>
              <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                Our Key{" "}
                <span className="relative z-0 after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:-z-1">
                  Partners
                </span>
              </h2>
            </ScrollReveal>
            <ScrollRevealStagger staggerChildren={0.1} delayChildren={0.1}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <PartnerCard
                  title="Cobham Youth Justice Centre"
                  logo={CobhamLogo}
                >
                  We work in partnership to support young people within the
                  justice system, promoting strong leadership, cultural
                  reconnection, and life skills that help break the cycle of
                  recidivism.
                </PartnerCard>
                <PartnerCard
                  title="POLEN (Pacific Islands Liaison and Engagement Network)"
                  logo={PolenLogo}
                >
                  Through structured dialogues and relationship-building
                  initiatives, POLEN helps build trust and understanding between
                  youth and law enforcement, creating safer and more supportive
                  community interactions.
                </PartnerCard>
                <PartnerCard
                  title="Multicultural Community Mentors (MCM)"
                  logo={MCMLogo}
                >
                  MCM supports our culturally rich workshops that focus on
                  leadership development, critical thinking, and
                  Pacific-specific issues. Together, we empower youth with the
                  tools to become confident, informed change-makers.
                </PartnerCard>
                <PartnerCard
                  title="Power Enclave Support Services"
                  logo={PowerEnclaveLogo}
                >
                  In 2025, PACS partnered with Power Enclave Support Services
                  for a special screening of Tinā, a film celebrating resilience
                  and cultural identity. All ticket proceeds supported PACS
                  programs.
                </PartnerCard>
                <PartnerCard
                  title="Lupeoko Tongan Performing Arts"
                  logo={LupeokoLogo}
                >
                  This partnership offers a dedicated cultural space for Tongan
                  youth to express themselves through traditional performing
                  arts, connect with their heritage, and develop confidence.
                </PartnerCard>
                <PartnerCard
                  title="Reiby Juvenile Justice Centre"
                  logo={ReibyLogo}
                >
                  We partner with Reiby to deliver mentoring and cultural
                  programs that empower young people in custody, building
                  resilience, positive identity, and pathways for growth. Our
                  focus on leadership, connection, and practical life skills
                  supports them to make positive choices and reduce reoffending.
                </PartnerCard>
              </div>
            </ScrollRevealStagger>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section>
          <div className="container text-center">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                Together, we are building a stronger, more inclusive future.
              </h3>
              <p className="mt-4 text-lg text-contentColor dark:text-contentColor-dark max-w-2xl mx-auto">
                Want to partner with us and make a difference in the community?
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Contact Us
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default PartnershipsPage;
