import { icons } from "../../icons";
import Divider from "../Divider";
import SkillBox from "../SkillBox";
import WebDevelopmentIcon from "../icons/WebDevelopmentIcon";
import WordPressIcon from "../icons/WordPressIcon";

const About: React.FC = () => {
  return (
    <article className="relative p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg xl:p-8 xl:w-auto bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">About Me</h2>
      <Divider />
      <p className="text-sm font-light leading-6 text-neutral-100">
        I’m a{" "}
        <strong className="text-yellow-400">
          third-year Computer Science student
        </strong>{" "}
        and a <strong className="text-yellow-400">full-stack developer</strong>{" "}
        with over{" "}
        <strong className="text-yellow-400">
          two years of hands-on experience
        </strong>{" "}
        building modern web applications. My strongest focus is creating clean
        and{" "}
        <strong className="text-yellow-400">user-friendly front ends</strong>{" "}
        that feel intuitive and look polished and work smoothly across devices.
        At the same time I’m comfortable working across the full stack so I can
        take a feature from idea to implementation and connect the UI with
        reliable back-end functionality.
        <br />
        <br />
        Alongside my IT job experience I have also done{" "}
        <strong className="text-yellow-400">
          freelance website development
        </strong>{" "}
        and worked with clients to turn their goals into real and working
        websites. I enjoy translating ideas into a clear structure and strong
        visual design and thoughtful details that make the experience feel
        effortless for the user. I care about both the end result and how it’s
        built and I aim to write maintainable code and keep things scalable and
        deliver quality that lasts.
        <br />
        <br />
        As a person I’m <strong className="text-yellow-400">
          open-minded
        </strong>{" "}
        and <strong className="text-yellow-400">communicative</strong> and a{" "}
        <strong className="text-yellow-400">team player</strong>. I genuinely
        enjoy collaborating and sharing ideas and building strong working
        relationships. I’m also passionate about{" "}
        <strong className="text-yellow-400">travelling</strong> and connecting
        with people from different cultures and I’m especially motivated by
        opportunities that involve{" "}
        <strong className="text-yellow-400">international collaboration</strong>{" "}
        and long-term relationships.
        <br />
        <br />
        Outside of coding I like to stay active at the gym and unwind with books
        and do photography.
      </p>

      <div className="flex items-center gap-2 mt-2">
        <div className="px-2 py-0.5 rounded-md bg-sky-100 w-max text-sky-800">
          🇪🇪 Native
        </div>
        <div className="px-2 py-0.5 rounded-md bg-red-100 w-max text-red-800">
          🇬🇧 C1
        </div>
        <div className="px-2 py-0.5 rounded-md bg-white w-max text-gray-800">
          🇷🇺 Speaking proficiency
        </div>
        <div className="px-2 py-0.5 rounded-md  bg-green-100 w-max text-green-800">
          🇧🇷 Conversational
        </div>
      </div>

      <section>
        <h3 className="my-4 text-xl font-bold">What I'm Doing</h3>
        <ul className="grid items-start grid-cols-1 gap-4 md:grid-cols-2">
          <SkillBox
            skill="Web Development"
            description="High-quality development of sites at the professional level."
            Icon={<WebDevelopmentIcon />}
          />
          <SkillBox
            skill="WordPress Development"
            description="Custom WordPress websites, tailored to your unique needs and delivering exceptional user experiences."
            Icon={<WordPressIcon />}
          />
        </ul>
      </section>
      <section>
        <h3 className="my-4 text-xl font-bold ">Tools</h3>
        <div className="grid grid-cols-5 gap-4">
          {icons.map(({ Icon }) => (
            <div className="flex items-center justify-center ">
              <Icon />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;
