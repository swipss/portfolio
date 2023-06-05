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
        !isSidebarExpanded
          ? "max-h-28 sm:max-h-48"
          : "max-h-[900px] sm:max-h-[1000px] xl:max-h-[580px]"
      } shadow-lg xl:sticky xl:top-12 xl:max-h-[490px] xl:w-auto  xl:overflow-visible    relative border p-4 sm:p-8  overflow-hidden  divide-y divide-neutral-800  transition-all  bg-neutral-900 border-neutral-800 rounded-2xl`}
    >
      <div className="flex items-center w-full gap-4 mb-4 xl:flex-col sm:mb-8">
        <img
          src={profile}
          alt="profile"
          className="w-20 h-20 p-2 sm:h-32 sm:w-32 bg-neutral-800 rounded-2xl"
        />

        <div className="flex-col items-center justify-center font-bold text-white xl:flex">
          <h1 className="text-lg sm:text-2xl">Sten Vassiljev</h1>
          <div className="px-2.5 pb-0.5 mt-2 rounded-lg bg-neutral-800 w-max">
            <span className="text-xs font-light sm:text-sm">
              Front-End Developer
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4 sm:py-8">
        {contactList.map((contact) => (
          <ContactRow
            key={contact.label}
            label={contact.label}
            value={contact.value}
            Icon={contact.Icon}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 pl-1 xl:justify-center">
        {socialMediaLinks.map((linkData, index) => (
          <SocialMediaLink
            key={index}
            link={linkData.link}
            Icon={linkData.Icon}
          />
        ))}
      </div>

      <button
        onClick={toggleSidebar}
        className={`${
          isSidebarExpanded && "bg-neutral-800"
        } absolute top-0 p-2 right-0 text-white xl:hidden  transition-all duration-100 shadow-lg rounded-bl-2xl rounded-tr-2xl hover:bg-neutral-800`}
      >
        <ChevronDownIcon className="w-6 h-6 sm:hidden stroke-yellow-400" />
        <span className="hidden mx-2 text-sm text-yellow-400 sm:block">
          Show Contacts
        </span>
      </button>
    </div>
  );
};

export default Sidebar;
