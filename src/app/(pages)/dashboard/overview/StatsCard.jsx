import { H3 } from "@/subcomponents/Headings";
import { Atom } from "lucide-react";

const StatsCard = ({title, number, percent, icon}) => {
  return (
    <>
      <div className="bg-white col-span-12 md:col-span-6 lg:col-span-3 box-shadow rounded-lg p-7 border-s-[3px] border-brand">
        <div className="w-full flex items-start justify-between">
          <div>
            <p className="text-sm">{title}</p>
            <H3 className="my-2" text={number} />
            <span className="bg-green-600/20 text-black px-1 rounded-sm">
              {percent}
            </span>{" "}
            <span>This Week</span>
          </div>
          <div className="min-w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
