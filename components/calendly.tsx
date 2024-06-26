import { InlineWidget } from "react-calendly";
import { Separator } from "./ui/separator";

export const Calendly = () => {
  return (
    <div className="text-center" id="calendly">
      <h1 className="pb-4 text-4xl font-bold tracking-tight lg:text-4xl">
        Ready to Transform Your Content? <br /> Book a Free Editing Consultation
        Below!
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>
      <InlineWidget
        url="https://calendly.com/angelfcb001/30min"
        styles={{
          height: "1000px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};
