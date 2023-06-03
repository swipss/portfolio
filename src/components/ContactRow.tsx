interface ContactRowProps {
  label: string;
  value: string;
  Icon: React.ElementType;
}

const ContactRow: React.FC<ContactRowProps> = ({ label, value, Icon }) => {
  const isEmail = value.includes("@");
  const isPhoneNumber =
    /^(\+\s?)?(\(\d{1,4}\)\s?|\d{1,4}\s?[-.]?\s?){1,5}\d{1,4}$/.test(value);

  const handleClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${value}`;
    } else if (isPhoneNumber) {
      window.location.href = `tel:${value.replace(/[\s()-]/g, "")}`;
    }
  };

  return (
    <div className="flex items-center gap-4" onClick={handleClick}>
      <Icon className="w-8 h-8 p-2 text-yellow-400 rounded-lg shadow-lg bg-neutral-800" />
      <div>
        <h1 className="text-xs font-medium leading-3 text-neutral-400">
          {label}
        </h1>
        {isEmail || isPhoneNumber ? (
          <a
            href={
              isPhoneNumber
                ? `tel:${value.replace(/[\s()-]/g, "")}`
                : `mailto:${value}`
            }
            className="text-xs font-bold hover:underline text-neutral-400 hover:text-neutral-300"
          >
            {value}
          </a>
        ) : (
          <span className="text-xs font-bold text-neutral-400">{value}</span>
        )}
      </div>
    </div>
  );
};

export default ContactRow;
