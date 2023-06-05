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
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
        <br />
        <br />
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
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
            <Icon />
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;
