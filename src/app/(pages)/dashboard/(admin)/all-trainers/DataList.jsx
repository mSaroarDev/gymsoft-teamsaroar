'use client';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import UserRow from "./UserRow";
import { allUsers } from "@/libs/user";
import { fetchUsers } from "@/lib/features/users/userSlice";
import { useEffect } from "react";

const DataList = () => {
  // const res = await allUsers();
  // const usersData = await res.data.data;
  // const tainers = usersData?.filter((item)=> item?.role === "Trainer")
  const dispatch = useAppDispatch();

  const { usersData } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {usersData &&
        usersData?.map((item, i) => (
          <UserRow key={item?._id} data={item} i={i} />
        ))}
    </>
  );
};

export default DataList;
