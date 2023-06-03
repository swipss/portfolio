import { BookOpenIcon } from "@heroicons/react/24/outline";
import Divider from "../Divider";
import TimelineItem from "../TimelineItem";

const timeline = [
  {
    title: "Tartu Ülikool, Computer Science",
    year: "Starting Fall 2023",
  },
  {
    title: "Tartu Tamme Gümnaasium",
    year: "2020 — 2023",
  },

  {
    title: "Tartu Forseliuse Kool",
    year: "2012 — 2020",
  },
];

const Resume: React.FC = () => {
  return (
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Resume</h2>
      <Divider />

      <section>
        <div className="flex items-center gap-4 mb-[25px] mt-6">
          <BookOpenIcon className="w-8 h-8 p-2 text-yellow-400 rounded-lg shadow-lg bg-neutral-800" />
          <h3 className="text-xl font-bold ">Education</h3>
        </div>
        <ul className="timeline-list">
          {timeline.map(({ title, year }) => (
            <TimelineItem
              title={title}
              year={year}
              description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
