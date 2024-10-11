"use client";
import ScheduleRow from "../../(admin)/recent-schedules/ScheduleRow";
import { getSchedules } from "@/libs/schedule";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const Datalist = () => {
  const { currUserData } = useAppSelector((state) => state.currUser);

  const [thisTrainerData, setThisTrainerData] = useState([]);
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await getSchedules();

        const filteredData = res.data.data.filter(
          (item) => item?.traineeName === currUserData?.name
        );
        setThisTrainerData(filteredData);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    if (currUserData?.name) {
      fetchSchedules();
    }
  }, [currUserData]);

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
            {currUserData?.role === "Admin" && <th>Action</th>}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {thisTrainerData.length > 0 ? (
            thisTrainerData?.map((item, i) => (
              <ScheduleRow
                key={item?._id}
                data={item}
                sl={i}
                currUserData={currUserData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="8">You have no assigned schedule</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Datalist;
