import UserRow from "./UserRow";
import { allUsers } from "@/libs/user";

const DataList = async () => {
  const res = await allUsers();
  const usersData = await res.data.data;
  const tainers = usersData?.filter((item)=> item?.role === "Trainer")

  return (
    <>
      {tainers &&
        tainers?.map((item, i) => <UserRow key={item?._id} data={item} i={i} />)}
    </>
  );
};

export default DataList;
