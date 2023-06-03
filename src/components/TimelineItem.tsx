interface TimelineItemProps {
  title: string;
  year: string;
  description?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  year,
  description,
}) => {
  return (
    <li className="timeline-item">
      <h4 className="font-bold ">{title}</h4>
      <span className="text-sm text-yellow-400">{year}</span>
      <p className="text-sm font-light leading-6 text-neutral-100">
        {description}
      </p>
    </li>
  );
};

export default TimelineItem;
