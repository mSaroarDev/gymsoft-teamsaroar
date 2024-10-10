import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import NewTrainerForm from "./CreateForm";

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