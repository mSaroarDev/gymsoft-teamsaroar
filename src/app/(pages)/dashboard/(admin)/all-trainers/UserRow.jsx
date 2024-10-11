"use client";
import { deleteUser } from "@/libs/user";
import { showError, showSuccess } from "@/utils/toaster";
import { Trash2, UserRoundPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UserRow = ({ data, i }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // delete user
  const handleDelete = () => {
    Swal.fire({
      title: "Delete?",
      icon: "question",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await deleteUser(data?._id);
          if (res.status === 200) {
            router.refresh();
            showSuccess("User Deleted");
          } else {
            showError("User Delete Failed");
          }
        } catch (error) {
          showError("Internal Server Error");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{data?.name}</td>
        <td>{data?.designation}</td>
        <td>{data?.address}</td>
        <td className="flex items-center gap-2">
          <button className="bg-[#F4A62A] text-white p-2">
            <UserRoundPen className="w-4 h-4" />
          </button>
          <button onClick={handleDelete} className="bg-[#FA3F19] text-white p-2">
            <Trash2 className="w-4 h-4" />
          </button>
        </td>
        <td>{data?.email}</td>
      </tr>
    </>
  );
};

export default UserRow;
