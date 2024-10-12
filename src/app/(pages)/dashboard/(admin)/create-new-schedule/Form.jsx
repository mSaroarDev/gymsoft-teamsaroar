"use client";
import { createSchedule } from "@/libs/schedule";
import { addSchedule } from "@/redux/features/schedules/schedulesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { PrimaryButton } from "@/subcomponents/Buttons";
import { Form, Input, Label, Select } from "@/subcomponents/Forms";
import { showError, showSuccess } from "@/utils/toaster";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateScheduleForm = ({ usersData }) => {
  // filtered data
  const trainers = usersData?.filter((item) => item?.role === "Trainer") || [];
  const trainee = usersData?.filter((item) => item?.role === "Trainee") || [];
  const { currUserData } = useAppSelector((state) => state.currUser);
  const dispatch = useAppDispatch();

  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // formik
  const formik = useFormik({
    initialValues: {
      trainerName: "",
      traineeName: "",
      date: "",
      startTime: "",
      approvalStatus:
        currUserData?.role === "Admin"
          ? "Appointed"
          : currUserData?.role === "Trainee"
          ? "Pending"
          : "",
      createdBy: currUserData?._id,
    },
    onSubmit: async (values) => {
      const { trainerName, traineeName, date, startTime } = values;
      if (!trainerName || !traineeName || !date || !startTime) {
        return showError("All Fields Must be Filled");
      }

      try {
        setLoading(true);
        const res = await createSchedule(values);

        if (res.status === 200) {
          showSuccess("Success to Book a Schedule");
          dispatch(addSchedule(res.data.data));
          router.push(
            currUserData?.role === "Admin"
              ? "/dashboard/recent-schedules"
              : "/dashboard/all-classes"
          );
        } else if (res.status === 404) {
          showError("Trainer Not Available with conditions");
        } else {
          showError("Failed");
        }
      } catch (error) {
        console.log("error", error);

        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <div className="w-[150px] h-[150px] border-2 border-dashed border-brand/40 flex flex-col items-center justify-center rounded-md overflow-hidden relative">
              <Image
                src="/gym.jpg"
                alt="Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-5">
            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Trainer Name"} />
              <Select
                id="trainerName"
                name="trainerName"
                onChange={formik.handleChange}
                value={formik.values.trainerName}
              >
                <option value="">Select a Trainer</option>
                {trainers &&
                  trainers?.map((item, i) => (
                    <option key={i} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
              </Select>
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Trainee Name"} />
              <Select
                id="traineeName"
                name="traineeName"
                onChange={formik.handleChange}
                value={formik.values.traineeName}
              >
                <option value="">Select a Trainee</option>
                {currUserData?.role !== "Admin" ? (
                  <option value={currUserData?.name}>
                    {currUserData?.name}
                  </option>
                ) : (
                  trainee &&
                  trainee?.map((item, i) => (
                    <option key={i} value={item?.name}>
                      {item?.name}
                    </option>
                  ))
                )}
              </Select>
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Date"} />
              <Input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                placeholder="Enter address"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Start Time"} />
              <Input
                id="startTime"
                name="startTime"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.startTime}
                placeholder="Enter address"
              />
            </div>
          </div>
        </div>

        <div align="right" className="mt-5">
          {loading ? (
            <PrimaryButton
              text={
                <>
                  <ButtonSpinner />
                  <span>Please wait</span>
                </>
              }
              type="submit"
              className="flex items-center justify-center gap-2 pointer-events-none"
            />
          ) : (
            <PrimaryButton
              text={
                currUserData?.role !== "Admin" ? "Submit Request" : "Assign"
              }
              type="submit"
              className="w-fit button-dark me-auto"
            />
          )}
        </div>
      </Form>
    </>
  );
};

export default CreateScheduleForm;
