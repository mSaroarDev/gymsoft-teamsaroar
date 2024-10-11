import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import ScheduleRow from "./ScheduleRow";
import { getSchedules } from "@/libs/schedule";

const RecentSchedulepage = async () => {
  // get schedules
  const res = await getSchedules();
 
  return (
    <>
      <MotionContainer>
        <CommonTitle text="Recent Schedules" />

        <div className="mt-5">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th>Sl</th>
                <th>Trainer Name</th>
                <th>Trainee Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {res && res?.data?.data?.map((item, i)=> <ScheduleRow key={item?._id} data={item} sl={i} />)}
            </tbody>
          </table>
        </div>
      </MotionContainer>
    </>
  );
};

export default RecentSchedulepage;
