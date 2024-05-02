import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar } from "@mui/material";

export const Channels = () => {
  const channels = [
    {
      logo: "/alpha.jpeg",
      name: "Alpha",
      subs: "200,000",
      link: "https://www.youtube.com/@AlphaCentralOfficial",
    },
    {
      logo: "/frazer.jpeg",
      name: "Brookes",
      subs: "70,000",
      link: "https://www.youtube.com/@FrazerBrookesChannel",
    },
    {
      logo: "/dan.jpg",
      name: "Dan Kieft",
      subs: "14,000",
      link: "https://www.youtube.com/@Dankieft",
    },
    {
      logo: "/joe.jpeg",
      name: "Joe Leech",
      subs: "30,000",
      link: "https://www.youtube.com/@Joe_Leech",
    },
  ];
  // Avatar Styles
  const style = {
    width: {
      xs: 50, // width on extra-small devices
      sm: 100, // width on small devices
      md: 150, // default width
    },
    height: {
      xs: 50, // height on extra-small devices
      sm: 100, // height on small devices
      md: 150, // default height
    },
    // You can add more responsive keys (lg, xl) as needed
  };
  return (
    <div className="text-center">
      <h1 className="pb-4 text-5xl font-bold tracking-tight lg:text-6xl ">
        Channels I&apos;ve Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="mx-auto flex items-center justify-center sm:space-x-2 md:space-x-4 lg:space-x-8">
        {channels.map((channel, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link href={`${channel.link}`}>
                <Avatar src={channel.logo} alt={channel.name} sx={style} />
              </Link>
              <h1 className="mt-4 text-xl font-semibold">{channel.name}</h1>
              <p className="mt-2 text-lg">{channel.subs} subs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
