import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  const links = [
    {
      href: "https://github.com/angelDova",
      icon: <GitHubIcon className="h-8 w-8" />,
    },
    {
      href: "https://www.instagram.com/angeldova_/",
      icon: <InstagramIcon className="h-9 w-9" />,
    },
    {
      href: "https://www.youtube.com",
      icon: <YouTubeIcon className="h-10 w-10" />,
    },
    {
      href: "mailto:angeldova91@gmail.com",
      icon: <EmailIcon className="h-8 w-8" />,
    },
  ];
  return (
    <div className="pb-8 text-center">
      <div className="flex items-center justify-center space-x-4">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="transition duration-300 hover:opacity-45"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-100/50">angeldova91@gmail.com</p>
      <p className="text-sm text-slate-100/50">
        © Angel. All rights reserved.
      </p>
    </div>
  );
};
