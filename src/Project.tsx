import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ProjectProps {
  handleReadMoreClick: () => void;
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  field: string;
}

const Project: React.FC<ProjectProps> = ({
  handleReadMoreClick,
  title,
  description,
  image,
  github,
  live,
  field,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <li className="scaleUp">
      <div
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure className="relative h-auto rounded-2xl overflow-clip">
          {isHovering && (
            <div
              className={`bg-transparent ${
                isHovering && "!bg-black !bg-opacity-50"
              }  absolute inset-0 z-10 flex gap-2 items-center justify-center rounded-2xl w-full h-full  `}
            >
              <a
                target="_blank"
                href={live}
                className="p-4 shadow-lg bg-neutral-800 rounded-2xl hover:bg-neutral-900"
              >
                <EyeIcon className="w-5 h-5 text-yellow-300" />
              </a>
              {github && (
                <a
                  target="_blank"
                  href={github}
                  className="p-4 shadow-lg bg-neutral-800 rounded-2xl hover:bg-neutral-900"
                >
                  <CodeBracketIcon className="w-5 h-5 text-yellow-300" />
                </a>
              )}
              <button
                onClick={handleReadMoreClick}
                className="p-4 text-sm font-medium text-yellow-300 shadow-lg bg-neutral-800 rounded-2xl hover:bg-neutral-900"
              >
                Read more
              </button>
            </div>
          )}
          <img
            src={image}
            alt="todo"
            loading="lazy"
            className={`${
              isHovering && "scale-125"
            } relative object-cover w-full h-64 mb-4 overflow-hidden transition-all duration-300 rounded-2xl`}
          />
        </figure>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-neutral-400">{field}</p>
      </div>
    </li>
  );
};

export default Project;
