import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import { getSchedules } from "@/libs/schedule";
import Datalist from "./Datalist";

const TrainerSchedulePage = async () => {
  return (
    <>
      <MotionContainer>
        <CommonTitle text="My Recent Schedules" />

        <div className="mt-5">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th>Sl</th>
                <th>Trainer Name</th>
                <th>Trainee Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <Datalist />
            </tbody>
          </table>
        </div>
      </MotionContainer>
    </>
  );
};

export default TrainerSchedulePage;
