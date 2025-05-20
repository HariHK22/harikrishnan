import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience." dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Freelancer",
    position: "IoT and Embedded",
    time: "Mar 2019 - Pre final year",
    location: "Puducherry, India",
    description:
      "Elevated IoT & Embedded project performance by 100% through expertise gained from developing over 100+ projects as a freelancer.",
    tech: [
     
    ],
  },
  {
    title: "IOT INTERNSHIP",
    position: "Intern",
    time: "Jan 20th ,2025 - Present ",
    location: "Hosur",
    description:
      "Achieved significant skill enhancement and in-depth IoT knowledge through hands-on experience during a internship at Innovate Engineering product.",
    tech: [
    ],
  },

  {
    title: "WORKSHOP FOR STUDENTS",
    position: "Workshop Leader",
    time: "Jan 2022 - Mar 2025 ",
    location: "Karaikal, Puducherry",
    description:
      "Better project outcomes by 80% via an interactive IoT and embedded systems workshop for students, offering hands-on experience and practical insights",
    tech: [
    ],
  },
];
