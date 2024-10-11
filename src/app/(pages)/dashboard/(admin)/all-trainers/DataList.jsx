import UserRow from "./UserRow";
import { allUsers } from "@/libs/user";

const DataList = async () => {
  const res = await allUsers();
  const usersData = await res.data.data;

  return (
    <>
      {usersData &&
        usersData?.map((item, i) => <UserRow key={item?._id} data={item} i={i} />)}
    </>
  );
};

export default DataList;
