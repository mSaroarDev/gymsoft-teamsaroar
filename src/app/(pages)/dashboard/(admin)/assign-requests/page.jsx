import MotionContainer from "@/components/MotionContainer";
import CommonTitle from "@/subcomponents/CommonTitle";
import DataList from "./DataList";

const page = async () => {

  return (
    <>
      <MotionContainer>
        <CommonTitle text="Class Assign Requests" />

        <div className="mt-5">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th>Sl</th>
                <th>Trainer Name</th>
                <th>Trainee Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <DataList />
            </tbody>
          </table>
        </div>
      </MotionContainer>
    </>
  );
};

export default page;
