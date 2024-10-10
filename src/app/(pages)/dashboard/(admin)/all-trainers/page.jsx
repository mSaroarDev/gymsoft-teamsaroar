import CommonTitle from "@/subcomponents/CommonTitle";
import MotionContainer from "@/components/MotionContainer";
import DataList from "./DataList";

const AllTrainers = () => {

  return (
    <MotionContainer>
      <CommonTitle text="Active Trainers" />

      <div className="mt-5">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Action</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <DataList />
          </tbody>
        </table>
      </div>
    </MotionContainer>
  );
};

export default AllTrainers;
