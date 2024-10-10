import { Trash2, UserRoundPen, X } from "lucide-react";

const ScheduleRow = () => {
  return (
    <>
      <tr>
        <td>01</td>
        <td>Saroar Jahan</td>
        <td>Amit Kumar</td>
        <td>10.00 am - 12.00 pm</td>
        <td className="flex items-center gap-2">
          <button className="bg-[#F4A62A] text-white p-2">
            <UserRoundPen className="w-4 h-4" />
          </button>
          <button className="bg-[#FA3F19] text-white p-2">
            <X className="w-4 h-4" />
          </button>
        </td>
        <td>
          <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs">Completed</span>
        </td>
      </tr>
    </>
  );
};

export default ScheduleRow;
