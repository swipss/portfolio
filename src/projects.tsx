import todo from "./assets/todo.png";
import readit from "./assets/readit.png";
import superturg from "./assets/superturg.png";
import triimon from "./assets/triimon.png";
import firelli from "./assets/firelli.png";
import itelec from "./assets/itelec.png";
import ReactIcon from "./components/icons/ReactIcon";
import TailwindIcon from "./components/icons/TailwindIcon";
import TypeScriptIcon from "./components/icons/TypeScriptIcon";
import FirebaseIcon from "./components/icons/FirebaseIcon";
import NextJSIcon from "./components/icons/NextJSIcon";
import PrismaIcon from "./components/icons/PrismaIcon";
import WordPressIcon2 from "./components/icons/WordPressIcon-2";
import JavaScriptIcon from "./components/icons/JavaScriptIcon";

export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  toolsUsed: any[];
  field: string;
}

export const projects: Project[] = [
  {
    title: "Modern Task Manager App",
    description:
      "The Modern Task Manager App is a stylish and efficient tool built with Vite, React Typescript, and Tailwind CSS. It allows users to create tasks with titles, descriptions, due dates, categories, and priorities. The app features tabs for task status, including inbox, active, and completed tasks. Users can easily manage tasks by marking them as complete or deleting them. User data is securely stored locally using local storage.",
    image: todo,
    github: "https://github.com/swipss/todo-vite-react",
    live: "https://todo-vite-react.vercel.app/",
    toolsUsed: [<ReactIcon />, <TailwindIcon />],
    field: "Web Development",
  },
  {
    title: "read.it",
    description:
      "A social media platform - dynamic web application built with Vite, React Typescript, and Tailwind CSS. Users can create posts with titles, descriptions, images, and tags. They can log in using email/password or Google, like posts, comment on them, and explore user profiles and also edit their own profile for their liking. Data is managed securely using Firebase, with Firestore for storing images. ",
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
    description:
      "A Marketplace Web Application, a dynamic platform for buying and selling products. Currently under development as a freelance project, this application is being built using React with TypeScript and styled with Tailwind CSS. Users can log in using Google or email authentication and create detailed posts with categories, conditions, ratings, prices, and locations using Google Autocomplete. Images can be uploaded using Cloudinary for efficient storage. The platform allows users to save posts, copy links, report posts, and engage through comments. Advanced search features enable users to find posts by title, category, address, price range, and post age. To ensure efficient data mutations, the project utilizes TRPC, offering a robust solution. Data storage is handled by Railway, ensuring secure content management.",
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
    description: "A modern website built with WordPress.",
    image: triimon,
    github: "",
    live: "https://triimon.ee/",
    toolsUsed: [<WordPressIcon2 />],
    field: "WordPress Development",
  },
  {
    title: "Itelec",
    description: "A modern website built with WordPress.",
    image: itelec,
    github: "",
    live: "https://itelec.ee/",
    toolsUsed: [<WordPressIcon2 />],
    field: "WordPress Development",
  },
  {
    title: "Firelli",
    description:
      "A website built with WordPress. Includes a custom calculator built with JavaScript.",
    image: firelli,
    github: "",
    live: "https://firelli.ee/",
    toolsUsed: [<WordPressIcon2 />, <JavaScriptIcon />],
    field: "WordPress Development",
  },
];
