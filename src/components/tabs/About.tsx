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
        As a passionate{" "}
        <strong className="text-yellow-400">Front-End Developer</strong>, I
        specialize in creating{" "}
        <strong className="text-yellow-400">beautiful</strong> and{" "}
        <strong className="text-yellow-400">user-friendly</strong>{" "}
        <strong className="text-yellow-400">websites</strong> that leave a
        lasting impression. With a strong focus on front-end development, I have
        honed my skills in crafting visually appealing interfaces and intuitive
        user experiences.
        <br />
        <br />
        Driven by my passion for design and technology, I bring creativity and
        attention to detail to every project I undertake. From conceptualization
        to implementation, I strive to deliver websites that not only meet
        client requirements but exceed expectations.
        <br />
        <br />
        In addition to my expertise in front-end development, I am also
        well-versed in{" "}
        <strong className="text-yellow-400">
          full-stack application development
        </strong>
        . This broader skill set allows me to seamlessly integrate front-end
        components with back-end functionalities, resulting in robust and
        scalable applications.
        <br />
        <br />
        Beyond coding, I find inspiration and relaxation through various
        hobbies. I enjoy immersing myself in books, expanding my knowledge
        across different subjects. To maintain a healthy lifestyle, I frequent
        the gym, where I find the perfect balance between physical fitness and
        mental well-being. Additionally, photography is one of my creative
        outlets, allowing me to capture unique moments and perspectives through
        the lens.
        <br />
        <br />
        With a deep passion for creating visually stunning and user-friendly
        websites, I am committed to delivering exceptional results and
        continuously pushing the boundaries of what is possible in the digital
        realm. I welcome opportunities to collaborate on exciting projects that
        allow me to utilize my skills and create impactful experiences for
        users.
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
