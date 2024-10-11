'use client';
import UserRow from "./UserRow";
import { allUsers } from "@/libs/user";
import { fetchUsers } from "@/redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const DataList = () => {
  // const res = await allUsers();
  // const usersData = await res.data.data;
  const dispatch = useAppDispatch();
  
  const { usersData } = useAppSelector((state) => state.users);
  // const tainers = usersData?.filter((item)=> item?.role === "Trainer")

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
