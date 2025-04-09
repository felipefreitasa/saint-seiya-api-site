import { GitHub, Linkedin } from "react-feather";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

export function Footer() {
  return (
    <footer className="flex items-center justify-center mt-20 pb-6 pt-6 space-x-3 border-t-1 border-[#333333]">
      <div className="space-x-2 flex">
        <SocialIcon
          icon={<GitHub size={18} />}
          href="https://github.com/felipefreitasa"
        />
        <SocialIcon
          icon={<Linkedin size={18} />}
          href="https://www.linkedin.com/in/felipefreitasa/"
        />
      </div>

      <div className="flex space-x-1">
        <p className="font-inter font-light text-sm">Created by</p>
        <p className="font-inter font-medium text-sm">Felipe Freitas</p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#999999] hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
