import Divider from "../Divider";

const Resume: React.FC = () => {
  return (
    <article className="p-4 mt-4 overflow-hidden text-white transition-all border shadow-lg bg-neutral-900 border-neutral-800 rounded-2xl">
      <h2 className="text-2xl font-bold">Resume</h2>
      <Divider />

      <section>
        <div>
          <h3 className="text-xl font-bold">Education</h3>
        </div>
      </section>
    </article>
  );
};

export default Resume;
