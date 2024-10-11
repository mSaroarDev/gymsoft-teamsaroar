"use client";
import { deleteUser } from "@/libs/user";
import { deleteUserAction } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { showError, showSuccess } from "@/utils/toaster";
import { Trash2, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const UserRow = ({ data, i }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

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
            showSuccess("User Deleted");
            dispatch(deleteUserAction(data?._id));
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
        <td>{data?.role}</td>
        <td>{data?.address}</td>
        <td className="flex items-center gap-2">
          <Link
            href={`/dashboard/all-trainers/edit?id=${data?._id}`}
            className="bg-[#F4A62A] text-white p-2"
          >
            <UserRoundPen className="w-4 h-4" />
          </Link>
          <button
            onClick={handleDelete}
            className="bg-[#FA3F19] text-white p-2"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </td>
        <td>{data?.email}</td>
      </tr>
    </>
  );
};

export default UserRow;
