import NewTrainerForm from "@/components/CreateForm";
import MotionContainer from "@/components/MotionContainer";
import { allUsers } from "@/libs/user";
import CommonTitle from "@/subcomponents/CommonTitle";

const page = async () => {

  return (
    <MotionContainer>
      <CommonTitle text={"Add New Trainer"} />

      <div className="mt-5">
        <NewTrainerForm />
      </div>
    </MotionContainer>
  );
};

export default page;
