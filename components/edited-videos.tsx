import YouTube from "react-youtube";
import { Separator } from "./ui/separator";

export const EditedVideos = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    width: "480",
    height: "270",
    className: "rounded-xl",
  };
  return (
    <div className="text-center">
      <h1 className="pb-4 text-5xl font-bold tracking-tight lg:text-6xl ">
        Videos I&apos;ve edited
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <YouTube videoId="Siexk0ZFKCw" opts={videoOptions} />
          <YouTube videoId="C0cbOOecml8" opts={videoOptions} />
          <YouTube videoId="SjqmjAq2YAE" opts={videoOptions} />
          <YouTube videoId="ofbDgjXAs5s" opts={videoOptions} />
        </div>
      </div>
    </div>
  );
};
