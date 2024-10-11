import MotionContainer from "@/components/MotionContainer";
import CreateScheduleForm from "../../(admin)/create-new-schedule/Form";
import CommonTitle from "@/subcomponents/CommonTitle";
import { allUsers } from "@/libs/user";

const BookAClassPage = async () => {
   // filtered data
  const res = await allUsers();
  const usersData = await res.data.data;

  return (
    <>
      <MotionContainer>
        <CommonTitle text="Request For a Schedule" />

        <div className="mt-5">
          <CreateScheduleForm usersData={usersData}  />
        </div>
      </MotionContainer>
    </>
  );
};

export default BookAClassPage;