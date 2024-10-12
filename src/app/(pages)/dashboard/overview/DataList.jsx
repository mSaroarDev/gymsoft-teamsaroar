"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import StatsCard from "./StatsCard";
import { useEffect } from "react";
import { fetchStatistics } from "@/redux/features/stats/statsSlice";
import {
  ClipboardPlus,
  ContactRound,
  FileText,
  FileUser,
  OctagonAlert,
  ShieldAlert,
  UserCog,
  UsersRound,
} from "lucide-react";

const DataList = () => {
  const dispatch = useAppDispatch();
  const { statistics } = useAppSelector((state) => state.statistics);
  const { currUserData } = useAppSelector((state) => state.currUser);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {currUserData?.role === "Admin" && (
          <>
            <StatsCard
              title={"Total Users"}
              number={statistics?.totalUsers}
              percent={"+50%"}
              icon={<UsersRound className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"Total Trainers"}
              number={statistics?.totalTrainers}
              percent={"+0%"}
              icon={<UserCog className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"Total Trainees"}
              number={statistics?.totalTrainees}
              percent={"+10%"}
              icon={<FileUser className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"Total Admins"}
              number={statistics?.totalAdmins}
              percent={"+0%"}
              icon={<ContactRound className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"Book Requests"}
              number={statistics?.bookRequests}
              percent={"+90%"}
              icon={<ClipboardPlus className="w-7 h-7 text-brand" />}
            />
          </>
        )}

        {currUserData?.role === "Trainee" && (
          <>
            <StatsCard
              title={"Pending Requests"}
              number={statistics?.myPendingRequests}
              percent={"+20%"}
              icon={<ShieldAlert className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"All Rquests"}
              number={statistics?.myAllRquests}
              percent={"+0%"}
              icon={<OctagonAlert className="w-7 h-7 text-brand" />}
            />
          </>
        )}

        {currUserData?.role === "Trainer" && (
          <>
            <StatsCard
              title={"Total Schedules"}
              number={statistics?.totalSchedules}
              percent={"+75%"}
              icon={<ShieldAlert className="w-7 h-7 text-brand" />}
            />

            <StatsCard
              title={"All AssignedRequest"}
              number={statistics?.allAssignedRequest}
              percent={"+56%"}
              icon={<OctagonAlert className="w-7 h-7 text-brand" />}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DataList;
