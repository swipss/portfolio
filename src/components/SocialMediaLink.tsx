interface SocialMediaLinkProps {
  link: string;
  Icon: React.ReactNode;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ link, Icon }) => {
  return (
    <a target="_blank" href={link}>
      {Icon}
    </a>
  );
};

export default SocialMediaLink;
