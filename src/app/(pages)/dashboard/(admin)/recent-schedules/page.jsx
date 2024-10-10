import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import UserRow from "../all-trainers/UserRow";
import ScheduleRow from "./ScheduleRow";

const page = () => {
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
                <th>Time</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <ScheduleRow />
              <ScheduleRow />
              <ScheduleRow />
              <ScheduleRow />
              <ScheduleRow />
              <ScheduleRow />
              <ScheduleRow />
            </tbody>
          </table>
        </div>
      </MotionContainer>
    </>
  );
};

export default page;
