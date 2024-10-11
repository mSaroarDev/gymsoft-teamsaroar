import { plusTwoHours } from "@/utils/PlusTwoHour";
import { UserRoundPen, X } from "lucide-react";

const ScheduleRow = ({data, sl}) => {
  return (
    <>
      <tr>
        <td>{sl + 1}</td>
        <td>{data?.trainerName}</td>
        <td>{data?.traineeName}</td>
        <td>{data?.date}</td>
        <td>{data?.time} - {plusTwoHours(data?.time)}</td>
        <td className="flex items-center gap-2">
          <button className="bg-[#F4A62A] text-white p-2">
            <UserRoundPen className="w-4 h-4" />
          </button>
          <button className="bg-[#FA3F19] text-white p-2">
            <X className="w-4 h-4" />
          </button>
        </td>
        <td>
          <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs">{data?.approvalStatus}</span>
        </td>
      </tr>
    </>
  );
};

export default ScheduleRow;
