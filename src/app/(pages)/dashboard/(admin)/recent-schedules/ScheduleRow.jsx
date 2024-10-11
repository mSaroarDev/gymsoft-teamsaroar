"use client";
import { deniedSchedule, editSchedule } from "@/libs/schedule";
import {
  editScheduleDispatch,
  removeSchedule,
} from "@/redux/features/schedules/schedulesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showError, showSuccess } from "@/utils/toaster";
import { Check, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

const ScheduleRow = ({ data, sl }) => {
  const { currUserData } = useAppSelector((state) => state.currUser);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  // handle action
  const handleConfirm = () => {
    Swal.fire({
      title: "Sure to Appoint?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await editSchedule(data?._id);

          if (res.status === 200) {
            showSuccess("Trainer Appointed to this Trainee");
            dispatch(
              editScheduleDispatch({
                id: data?._id,
                data: res.data.data,
              })
            );
            dispatch(removeSchedule(data?._id));
          } else if (res.status === 404) {
            showError("Trainer is unavailable in this period");
          } else {
            showError("Something is wrong");
          }
        } catch (error) {
          showError("Internal server error");
        }
      }
    });
  };

  // handle action
  const handleReject = () => {
    Swal.fire({
      title: "Sure to Reject?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deniedSchedule(data?._id);

          if (res.status === 200) {
            showSuccess("Denied");
            dispatch(
              editScheduleDispatch({
                id: data?._id,
                data: res.data.data,
              })
            );
            dispatch(removeSchedule(data?._id));
          } else {
            showError("Something is wrong");
          }
        } catch (error) {
          showError("Internal server error");
        }
      }
    });
  };

  return (
    <>
      <tr>
        <td>{sl + 1}</td>
        <td>{data?.trainerName}</td>
        <td>{data?.traineeName}</td>
        <td>{data?.date}</td>
        <td>{data?.startTime} </td>
        <td>{data?.endTime}</td>
        {(currUserData?.role === "Admin" && pathname !== "/dashboard/recent-schedules") && (
          <td className="flex items-center gap-2">
            <button
              onClick={handleConfirm}
              title="Accept & Assign"
              className="bg-green-500 text-white p-2"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleReject}
              title="Denied"
              className="bg-[#FA3F19] text-white p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </td>
        )}
        <td>
          <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs">
            {data?.approvalStatus}
          </span>
        </td>
      </tr>
    </>
  );
};

export default ScheduleRow;
