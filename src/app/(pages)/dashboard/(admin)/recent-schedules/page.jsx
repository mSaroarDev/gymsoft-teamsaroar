import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import Datalist from "./Datalist";

const RecentSchedulepage = async () => {
  
  return (
    <>
      <MotionContainer>
        <CommonTitle text="Recent Schedules" />

        <div className="mt-5">
          <Datalist />
        </div>
      </MotionContainer>
    </>
  );
};

export default RecentSchedulepage;
