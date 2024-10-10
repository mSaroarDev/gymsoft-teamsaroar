"use client";
import { useDispatch, useSelector } from "react-redux";
import UserRow from "./UserRow";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/features/userSlice";

const DataList = () => {
  // redux store
  const { usersData } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {usersData &&
        usersData?.map((item) => <UserRow key={item?._id} data={item} />)}
    </>
  );
};

export default DataList;
