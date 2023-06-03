import { useState } from "react";
import profile from "../assets/profile.png";
import {
  ChevronDownIcon,
  DocumentIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactRow from "./ContactRow";
import SocialMediaLink from "./SocialMediaLink";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const contactList = [
  { label: "EMAIL", value: "vassiljevsten1@gmail.com", Icon: EnvelopeIcon },
  { label: "PHONE", value: "+ (372) 5689 3703", Icon: PhoneIcon },
];

const socialMediaLinks = [
  {
    link: "https://www.linkedin.com/in/stenvassiljev/",
    Icon: <LinkedInIcon />,
  },
  { link: "https://github.com/swipss", Icon: <GitHubIcon /> },
  {
    link: "#",
    Icon: (
      <DocumentIcon className="w-5 h-5 text-neutral-400 hover:text-neutral-300" />
    ),
  },
];

const Sidebar: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={`${
        !isSidebarExpanded ? "max-h-28" : "max-h-[900px]"
      } shadow-lg relative border px-4 pt-4  overflow-hidden  divide-y divide-neutral-800  transition-all  bg-neutral-900 border-neutral-800 rounded-2xl`}
    >
      <div className="flex items-center w-full gap-4 mb-4">
        <img
          src={profile}
          alt="profile"
          className="w-20 h-20 p-2 bg-neutral-800 rounded-2xl"
        />

        <div className="font-bold text-white">
          <h1 className="text-lg">Sten Vassiljev</h1>
          <div className="px-2.5 pb-0.5 mt-2 rounded-lg bg-neutral-800">
            <span className="text-xs font-light">Front-End Developer</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        {contactList.map((contact) => (
          <ContactRow
            key={contact.label}
            label={contact.label}
            value={contact.value}
            Icon={contact.Icon}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 pl-1 ">
        {socialMediaLinks.map((linkData, index) => (
          <SocialMediaLink
            key={index}
            link={linkData.link}
            Icon={linkData.Icon}
          />
        ))}
      </div>

      <button onClick={toggleSidebar}>
        <ChevronDownIcon
          className={`${
            isSidebarExpanded && "bg-neutral-800"
          } absolute top-0 right-0 w-8 h-8 p-2 text-white transition-all duration-100 shadow-lg  hover:bg-neutral-800 stroke-yellow-400 rounded-bl-2xl rounded-tr-2xl`}
        />
      </button>
    </div>
  );
};

export default Sidebar;
