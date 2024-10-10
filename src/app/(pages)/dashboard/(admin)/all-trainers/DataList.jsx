import UserRow from "./UserRow";
import { allUsers } from "@/libs/user";

const DataList = async () => {
  const res = await allUsers();
  const usersData = await res.data.data;

  return (
    <>
      {usersData &&
        usersData?.map((item) => <UserRow key={item?._id} data={item} />)}
    </>
  );
};

export default DataList;
