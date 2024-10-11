import NewTrainerForm from "@/components/CreateForm";
import MotionContainer from "@/components/MotionContainer";
import { BackButton } from "@/subcomponents/Buttons";
import CommonTitle from "@/subcomponents/CommonTitle";

const UserEditForm = ({searchParams}) => {
    const id = searchParams.id;

  return (
    <>
      {id && <BackButton />}
      <MotionContainer>
        <CommonTitle text={"Edit User"} />

        <div className="mt-5">
          <NewTrainerForm />
        </div>
      </MotionContainer>
    </>
  );
};

export default UserEditForm;
