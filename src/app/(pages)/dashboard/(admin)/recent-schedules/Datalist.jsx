"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ScheduleRow from "./ScheduleRow";
import { useEffect } from "react";
import { fetchSchedules } from "@/redux/features/schedules/schedulesSlice";
import { usePathname } from "next/navigation";

const Datalist = () => {
  const pathname = usePathname()
  // redux store
  const dispatch = useAppDispatch();
  const { currUserData } = useAppSelector((state) => state.currUser);
  const { schedulesData } = useAppSelector((state) => state.schedule);
  const recentSchedules =
    schedulesData &&
    schedulesData.filter((item) => item?.approvalStatus === "Appointed");

  // get recent data
  useEffect(() => {
    dispatch(fetchSchedules());
  }, []);

  return (
    <>
      <table className="w-full table-auto border-collapse">
        <thead className="bg-slate-100">
          <tr>
            <th>Sl</th>
            <th>Trainer Name</th>
            <th>Trainee Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            {(currUserData?.role === "Admin" &&
              pathname !== "/dashboard/recent-schedules") && <th>Action</th>}
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {recentSchedules?.length > 0 ? (
            recentSchedules?.map((item, i) => (
              <ScheduleRow key={item?._id} data={item} sl={i} />
            ))
          ) : (
            <tr>
              <td colSpan="8">No assigned currently</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Datalist;
