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
          (item) => item?.trainerName === currUserData?.name
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
      {thisTrainerData.length > 0 ?
        thisTrainerData?.map((item, i) => (
          <ScheduleRow key={item?._id} data={item} sl={i} />
        )) : (
          <tr>
            <td colspan="6">You have no assigned schedule</td>
          </tr>
        )}
    </>
  );
};

export default Datalist;
