import {
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface PortfolioModalProps {
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  toolsUsed: React.ReactNode[];
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  onClose,
  title,
  description,
  image,
  github,
  live,
  toolsUsed,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative max-w-sm p-4 border shadow scaleUp border-neutral-800 rounded-2xl bg-neutral-900">
        <button
          onClick={onClose}
          className="absolute z-10 p-1 rounded-full -right-3 -top-3 bg-neutral-800"
        >
          <XMarkIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300" />
        </button>
        <img
          src={image}
          alt=""
          className="object-cover w-full shadow-2xl h-52 rounded-2xl shadow-neutral-700"
        />
        <div>
          <div className="flex items-center justify-between">
            <h5 className="my-2 text-lg font-bold tracking-tight text-neutral-200">
              {title}
            </h5>
            <div className="flex items-center float-right gap-2">
              <a href={live} target="_blank">
                <EyeIcon className="w-4 h-4 text-neutral-400 hover:text-neutral-300" />
              </a>
              {github && (
                <a href={github} target="_blank">
                  <CodeBracketIcon className="w-4 h-4 text-neutral-400 hover:text-neutral-300" />
                </a>
              )}
            </div>
          </div>
          <p className="mb-3 text-sm font-normal text-neutral-400">
            {description}
          </p>
          <h6 className="my-2 text-lg font-bold tracking-tight text-neutral-200">
            Tools used
          </h6>
          <div className="grid grid-cols-4">
            {toolsUsed.map((tool) => (
              <>{tool}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
