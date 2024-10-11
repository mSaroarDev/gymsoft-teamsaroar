import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import CreateScheduleForm from "./Form";
import { allUsers } from "@/libs/user";

const page = async () => {
  // filtered data
  const res = await allUsers();
  const usersData = await res.data.data;

  return (
    <>
      <MotionContainer>
        <CommonTitle text="Create New Schedule" />

        <div className="mt-5">
          <CreateScheduleForm usersData={usersData}  />
        </div>
      </MotionContainer>
    </>
  );
};

export default page;
