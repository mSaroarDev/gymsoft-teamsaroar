"use client";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { PrimaryButton } from "@/subcomponents/Buttons";
import { Form, Input, Label } from "@/subcomponents/Forms";
import { useFormik } from "formik";
import { ImageUp } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

const CreateScheduleForm = () => {
  // utils
  const [loading, setLoading] = useState(true);

  // fill with existing data
  //   useEffect(() => {
  //     formik.setValues({
  //       name: userData?.name,
  //       designation: userData?.designation,
  //       address: userData?.address,
  //       mobile: userData?.mobile,
  //       email: userData?.email,
  //       image: userData?.image,
  //     });

  //     setImage(userData?.image);
  //   }, [userData]);

  // cloudinary
  const [image, setImage] = useState(null);
  const handleImageUpload = function (result) {
    const info = result?.info;

    if ("secure_url" in info && "public_id" in info) {
      const public_id = info.public_id;
      const imgUrl = info.secure_url;
      // setPublicId(public_id);
      setImage(imgUrl);
      formik.setFieldValue("image", imgUrl);
      // formik.setFieldValue("image_public_id", public_id);
    }
  };

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      address: "",
      mobile: "",
      email: "",
      image: "",
    },
    onSubmit: async (values) => {
      const { name, designation, address, mobile, email, image } = values;
      if (!name || !designation || !address || !mobile || !email || !image) {
        return showError("All Fields Must be Filled");
      }

      //   try {
      //     setLoading(true);
      //     const res = await updateProfile(userData?.id, values);

      //     if (res.ok) {
      //       showSuccess("Profile Updated");

      //       const data = await res.json();
      //       // update store
      //       dispatch(setCurrUser(data?.data));
      //     } else {
      //       showError("Profile Update Failed");
      //     }
      //   } catch (error) {
      //     showError("Internal Server Error");
      //   } finally {
      //     setLoading(false);
      //   }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <div className="w-[150px] h-[150px] border-2 border-dashed border-brand/40 flex flex-col items-center justify-center rounded-md overflow-hidden">
              <img
                src={"/gym.jpg"}
                className="w-full h-full object-cover"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-5">
            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Trainer Name"} />
              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter name"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Trainee Name"} />
              <Input
                id="designation"
                name="designation"
                onChange={formik.handleChange}
                value={formik.values.designation}
                placeholder="Enter designation"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Time"} />
              <Input
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
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
                  <span>Updating! Please wait</span>
                </>
              }
              type="submit"
              className="flex items-center justify-center gap-2 pointer-events-none"
            />
          ) : (
            <PrimaryButton
              text={"Update"}
              type="submit"
              className="w-fit button-dark me-auto"
            >
              Update
            </PrimaryButton>
          )}
        </div>
      </Form>
    </>
  );
};

export default CreateScheduleForm;
