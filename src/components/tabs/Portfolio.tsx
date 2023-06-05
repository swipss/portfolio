import { useState } from "react";
import Divider from "../Divider";
import PortfolioModal from "../PortfolioModal";
import Project from "../../Project";
import { Project as IProject, projects } from "../../projects";

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<IProject | null>(null);

  const handleProjectClick = (project: IProject) => {
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
