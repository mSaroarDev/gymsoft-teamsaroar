"use client";
import { useAppSelector } from "@/lib/hooks";
import ScheduleRow from "../recent-schedules/ScheduleRow";

const DataList = ({ data }) => {
  const { currUserData } = useAppSelector((state) => state.currUser);
 
  const requestsSchedules =
    data &&
    data.filter(
      (item) =>
        item?.approvalStatus === "Pending" &&
        item?.createdBy !== currUserData?._id
    );
  return (
    <>
      {requestsSchedules < 1 ? (
        <tr>
          <td colSpan="7">No pending schedule request found!</td>
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
