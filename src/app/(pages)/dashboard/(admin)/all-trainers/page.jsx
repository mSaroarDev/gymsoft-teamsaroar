import CommonTitle from "@/subcomponents/CommonTitle";
import { Trash2, UserRoundPen } from "lucide-react";
import UserRow from "./UserRow";
import MotionContainer from "@/components/MotionContainer";

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
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
          </tbody>
        </table>
      </div>
    </MotionContainer>
  );
};

export default AllTrainers;
