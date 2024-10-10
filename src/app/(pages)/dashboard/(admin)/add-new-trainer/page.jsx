import NewTrainerForm from "@/components/CreateForm";
import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";

const page = () => {
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
