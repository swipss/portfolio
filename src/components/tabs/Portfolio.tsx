import { useState } from "react";
import todo from "../../assets/todo.png";
import Divider from "../Divider";
import PortfolioModal from "../PortfolioModal";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import Project from "../../Project";
import readit from "../../assets/readit.png";
import FirebaseIcon from "../icons/FirebaseIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import triimon from "../../assets/triimon.png";
import WordPressIcon2 from "../icons/WordPressIcon-2";
import itelec from "../../assets/itelec.png";
import superturg from "../../assets/superturg.png";
import PrismaIcon from "../icons/PrismaIcon";
import NextJSIcon from "../icons/NextJSIcon";
import firelli from "../../assets/firelli.png";
import JavaScriptIcon from "../icons/JavaScriptIcon";

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  toolsUsed: any[];
  field: string;
}

const projects: Project[] = [
  {
    title: "Task Manager App",
    description: "A simple task manager app built with React and Tailwind CSS.",
    image: todo,
    github: "https://github.com/swipss/todo-vite-react",
    live: "https://swipss.github.io/todo-vite-react/",
    toolsUsed: [<ReactIcon />, <TailwindIcon />],
    field: "Web Development",
  },
  {
    title: "read.it",
    description: "A simple book review app built with React and Tailwind CSS.",
    image: readit,
    github: "https://github.com/swipss/read.it",
    live: "https://read-it-nine.vercel.app/",
    toolsUsed: [
      <ReactIcon />,
      <TypeScriptIcon />,
      <TailwindIcon />,
      <FirebaseIcon />,
    ],
    field: "Web Development",
  },
  {
    title: "SuperTurg",
    description: "A marketplace for buying and selling used items.",
    image: superturg,
    github: "https://github.com/swipss/portaal-super-turg",
    live: "https://portaal-super-turg.vercel.app/",
    toolsUsed: [
      <ReactIcon />,
      <TypeScriptIcon />,
      <TailwindIcon />,
      <NextJSIcon />,
      <PrismaIcon />,
    ],
    field: "Web Development",
  },
  {
    title: "Triimon",
    description: "A website built with WordPress.",
    image: triimon,
    github: "",
    live: "https://triimon.ee/",
    toolsUsed: [<WordPressIcon2 />],
    field: "WordPress Development",
  },
  {
    title: "Itelec",
    description: "A website built with WordPress.",
    image: itelec,
    github: "",
    live: "https://itelec.ee/",
    toolsUsed: [<WordPressIcon2 />],
    field: "WordPress Development",
  },
  {
    title: "Firelli",
    description: "A website built with WordPress.",
    image: firelli,
    github: "",
    live: "https://firelli.ee/",
    toolsUsed: [<WordPressIcon2 />, <JavaScriptIcon />],
    field: "WordPress Development",
  },
];

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };
  const handleProjectClickClose = () => {
    setActiveProject(null);
  };

  return (
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg xl:p-8 bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <Divider />
      <section>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Project
              key={project.title}
              handleReadMoreClick={() => handleProjectClick(project)}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              live={project.live}
              field={project.field}
            />
          ))}
        </ul>
      </section>
      {activeProject && (
        <PortfolioModal
          title={activeProject.title}
          description={activeProject.description}
          image={activeProject.image}
          github={activeProject.github}
          live={activeProject.live}
          toolsUsed={activeProject.toolsUsed}
          onClose={() => handleProjectClickClose()}
        />
      )}
    </article>
  );
};

export default Portfolio;
