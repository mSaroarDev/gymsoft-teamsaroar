import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import { getSchedules } from "@/libs/schedule";
import Datalist from "./Datalist";

const TraineeSchedulePage = async () => {
  return (
    <>
      <MotionContainer>
        <CommonTitle text="My Recent Schedules" />

        <div className="mt-5">
          <Datalist />
        </div>
      </MotionContainer>
    </>
  );
};

export default TraineeSchedulePage;
