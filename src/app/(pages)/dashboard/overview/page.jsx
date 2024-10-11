import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import DataList from "./DataList";

const OverViewPage = () => {
    return (
        <>
            <MotionContainer>
                <CommonTitle text={"Overview"} />
                <DataList />
            </MotionContainer>
        </>
    );
};

export default OverViewPage;