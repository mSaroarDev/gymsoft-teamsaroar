import { Trash2, UserRoundPen } from "lucide-react";

const UserRow = ({data}) => {
  return (
    <>
      <tr>
        <td>01</td>
        <td>{data?.name}</td>
        <td>{data?.designation}</td>
        <td>{data?.address}</td>
        <td className="flex items-center gap-2">
          <button className="bg-[#F4A62A] text-white p-2">
            <UserRoundPen className="w-4 h-4" />
          </button>
          <button className="bg-[#FA3F19] text-white p-2">
            <Trash2 className="w-4 h-4" />
          </button>
        </td>
        <td>{data?.email}</td>
      </tr>
    </>
  );
};

export default UserRow;
