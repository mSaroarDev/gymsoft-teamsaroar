import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import CreateScheduleForm from "./Form";

const page = () => {
  return (
    <>
      <MotionContainer>
        <CommonTitle text="Create New Schedule" />

        <div className="mt-5">
          <CreateScheduleForm />
        </div>
      </MotionContainer>
    </>
  );
};

export default page;
