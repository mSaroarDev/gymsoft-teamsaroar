"use client";
import { useAppSelector } from "@/redux/hooks";
import ScheduleRow from "../recent-schedules/ScheduleRow";

const DataList = () => {
  const { currUserData } = useAppSelector((state) => state.currUser);
  const { schedulesData } = useAppSelector((state) => state.schedule);
 
  const requestsSchedules =
  schedulesData &&
  schedulesData.filter(
      (item) =>
        item?.approvalStatus === "Pending" &&
        item?.createdBy !== currUserData?._id
    );

  return (
    <>
      {requestsSchedules < 1 ? (
        <tr>
          <td colSpan="8">No pending schedule request found!</td>
        </tr>
      ) : (
        requestsSchedules &&
        requestsSchedules?.map((item, i) => (
          <ScheduleRow key={i} data={item} sl={i} />
        ))
      )}
    </>
  );
};

export default DataList;
