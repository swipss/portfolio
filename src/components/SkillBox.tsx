export default function SkillBox({
  skill,
  description,
  Icon,
}: {
  skill: string;
  description: string;
  Icon: any;
}) {
  return (
    <li className="flex flex-col items-center justify-center w-full h-full gap-2 p-6 text-center text-white border shadow-lg border-neutral-800 rounded-2xl">
      {Icon}
      <h4 className="text-base font-bold">{skill}</h4>
      <p className="text-sm ">{description}</p>
    </li>
  );
}
