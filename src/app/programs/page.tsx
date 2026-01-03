import React from "react";
import Image from "next/image";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import SectionName from "@/components/shared/section-names/SectionName";
import YouthOutreachImage from "@/assets/images/New Photos/Youth Outreach Engagement & Steps to Success Program - 1.png";
import PasifikaLeadershipImage from "@/assets/images/New Photos/Pasifika Leadership Pathways Program - 1.png";
import PACSMenGroupImage from "@/assets/images/New Photos/PACS Men_s Group - 1.png";
import {
  ScrollReveal,
  ScrollRevealRight,
  ScrollRevealLeft,
} from "@/components/ui/ScrollReveal";

const ProgramsPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-22">
        {/* Section 1: Page Header */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark">
                Our Programs
              </h1>
              <p className="mt-4 text-lg text-contentColor dark:text-contentColor-dark max-w-2xl mx-auto">
                Individual Focused & Community Supported: Creating safe spaces
                for people to grow, connect and succeed.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Youth Outreach Engagement & Steps to Success Program */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Text content */}
              <ScrollReveal>
                <SectionName>YOUTH & MENTORSHIP</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  Youth Outreach Engagement & Steps to Success Program
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  <p>
                    The <strong>Youth Outreach Engagement Program</strong>,
                    operating in Liverpool and Oran Park, is designed to support
                    disengaged Pacific Islander youth who face complex social,
                    emotional, and cultural challenges-particularly those at
                    risk of involvement with the justice system. Through
                    interactive workshops and one-on-one support, we provide
                    practical tools to help participants manage anger, build
                    emotional resilience, and reconnect with their cultural
                    identity.
                  </p>
                  <p>
                    A core component of this initiative is the{" "}
                    <strong>Steps to Success Program</strong>, which offers
                    personalised mentorship to young men navigating significant
                    life challenges. Participants are matched with mentors from
                    the local community-many of whom have overcome similar
                    struggles-allowing for authentic, relatable guidance and
                    support.
                  </p>
                  <p>
                    Our approach recognises that these youth are not just at
                    risk-they are full of potential. Through this program, they
                    are empowered to become leaders, storytellers, and
                    system-shapers, equipped to challenge stereotypes and
                    contribute meaningfully to their communities.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right side: Image */}
              <ScrollReveal delay={0.2} className="flex justify-center">
                <Image
                  src={YouthOutreachImage}
                  alt="Youth mentorship session"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Pasifika Leadership Pathways Program */}
        <section className="bg-gray-50 dark:bg-darkdeep1 py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Image */}
              <ScrollReveal className="flex justify-center order-1 lg:order-1">
                <Image
                  src={PasifikaLeadershipImage}
                  alt="Leadership and personal development"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]"
                />
              </ScrollReveal>

              {/* Right side: Text content */}
              <ScrollReveal className="order-2 lg:order-2">
                <SectionName>LEADERSHIP & REINTEGRATION</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  Pasifika Leadership Pathways Program
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  <p>
                    The <strong>Pasifika Leadership Pathways Program</strong> is
                    a culturally grounded initiative designed to reduce
                    reoffending and support long-term behavioural change among
                    Pasifika youth. Rooted in core Pasifika values, the program
                    delivers leadership and personal development sessions in
                    collaboration with correctional facilities.
                  </p>
                  <p>
                    Primarily delivered within correctional settings, the
                    program focuses on building resilience, addressing anger
                    management, and strengthening cultural identity. These
                    sessions provide young people with the opportunity to
                    reflect on past choices, reconnect with their cultural
                    heritage, and set meaningful goals for a positive future.
                  </p>
                  <p>
                    By empowering individuals to lead with purpose and pride in
                    their identity, the program lays the foundation for
                    long-term change, personal accountability, and successful
                    reintegration into society.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: The PACS Men&apos;s Group */}
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-8 items-center">
              {/* Left side: Text content */}
              <ScrollReveal>
                <SectionName>MEN&apos;S WELLBEING</SectionName>
                <h2 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  The PACS Men&apos;s Group
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  <p>
                    The <strong>PACS Men&apos;s Group</strong> is a supportive
                    initiative dedicated to promoting the mental health and
                    wellbeing of mature men within the Pasifika community.
                    Recognising the unique challenges men face, the program
                    integrates cultural values and practices to create a safe,
                    respectful environment where participants feel comfortable
                    discussing their struggles without fear of stigma.
                  </p>
                  <p>
                    By blending cultural elements with mental health support,
                    the group actively works to break down barriers and
                    challenge negative perceptions surrounding mental health.
                    This encourages open, honest conversations and helps men
                    build resilience through shared experiences.
                  </p>
                  <p>
                    This holistic approach honours the importance of mental
                    health while respecting the cultural context-empowering
                    mature men to grow, heal, and thrive together.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right side: Image */}
              <ScrollReveal delay={0.2} className="flex justify-center">
                <Image
                  src={PACSMenGroupImage}
                  alt="A supportive group discussion"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default ProgramsPage;
