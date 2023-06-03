const FirebaseIcon: React.FC = () => {
  return (
    <svg
      className="w-16 h-16 text-neutral-400 hover:text-neutral-300"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      height="64"
      viewBox="0 0 32 32"
      width="64"
    >
      <path
        d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
        fill="#ddd"
      />
      <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#ddd" />
      <path
        d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
        fill="#aaa"
      />
      <path
        d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
        fill="#bbb"
      />
    </svg>
  );
};

export default FirebaseIcon;
