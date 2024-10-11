"use client";
import UserRow from "../all-trainers/UserRow";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUsers } from "@/redux/features/users/userSlice";
import { useEffect } from "react";

const DataList = () => {
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
