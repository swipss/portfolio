import { BookOpenIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Divider from "../Divider";
import TimelineItem from "../TimelineItem";

const education = [
  {
    title: "Tartu Ülikool, Computer Science, BSc",
    year: "2023 - 2026",
  },
  {
    title:
      "Federal University of the State of Rio de Janeiro (Exchange Program)",
    year: "2025 Aug - 2026 Feb",
  },
  {
    title: "Tartu Tamme Gümnaasium (IT field)",
    year: "2020 — 2023",
  },

  {
    title: "Tartu Forseliuse Kool",
    year: "2012 — 2020",
  },
];

const experience = [
  {
    title: "Junior Fullstack Developer at Bauhub",
    year: "2023 Aug - 2025 Aug",
  },
  {
    title: "WordPress Developer at Must Uba",
    year: "2021 Aug - 2023",
  },
];

const Resume: React.FC = () => {
  return (
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg xl:p-8 xl:w-auto bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Resume</h2>
      <Divider />

      <section>
        <div className="flex items-center gap-4 mb-[25px] mt-6">
          <BookOpenIcon className="w-8 h-8 p-2 text-yellow-400 rounded-lg shadow-lg bg-neutral-800" />
          <h3 className="text-xl font-bold ">Education</h3>
        </div>
        <ul className="timeline-list">
          {education.map(({ title, year }) => (
            <TimelineItem title={title} year={year} />
          ))}
        </ul>
      </section>
      <section>
        <div className="flex items-center gap-4 mb-[25px] mt-6">
          <BriefcaseIcon className="w-8 h-8 p-2 text-yellow-400 rounded-lg shadow-lg bg-neutral-800" />
          <h3 className="text-xl font-bold ">Experience</h3>
        </div>
        <ul className="timeline-list">
          {experience.map(({ title, year }) => (
            <TimelineItem title={title} year={year} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
