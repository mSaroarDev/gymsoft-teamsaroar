"use client";
import { Form, Input, Label } from "@/subcomponents/Forms";
import { ImageUp } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import { showError } from "@/utils/toaster";
import { useDispatch, useSelector } from "react-redux";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { PrimaryButton } from "@/subcomponents/Buttons";
import { register } from "@/libs/user";
import { addUserThunk } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

const NewTrainerForm = () => {
  // redux store
  const dispatch = useDispatch();
  const { usersData, isLoading, error } = useSelector((state) => state.users);

  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      role: "Trainer",
      password: "123456",
    },
    onSubmit: async (values) => {
      const { name, designation, address, mobile, email, image } = values;
      if (!name || !designation || !address || !mobile || !email || !image) {
        return showError("All Fields Must be Filled");
      }

      try {
        setLoading(true);
        const res = await dispatch(addUserThunk(values));

        if (res.type === "users/addUser/fulfilled") {
          router.push("/dashboard/all-trainers");
        } else {
          showError("Trainer Create Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {/* profile update */}
      <Form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <CldUploadButton
              className="col-span-12 md:col-span-2"
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              options={{
                sources: ["local", "google_drive"],
              }}
              onSuccess={handleImageUpload}
            >
              <div className="w-[150px] h-[150px] border-2 border-dashed border-brand/40 flex flex-col items-center justify-center rounded-md overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Image"
                  />
                ) : (
                  <>
                    <ImageUp className="w-5 h-5" />
                    <p className="text-sm mt-2">Upload Photo</p>
                  </>
                )}
              </div>
            </CldUploadButton>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-5">
            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Name"} />
              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter name"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Designation"} />
              <Input
                id="designation"
                name="designation"
                onChange={formik.handleChange}
                value={formik.values.designation}
                placeholder="Enter designation"
              />
            </div>

            <div className="w-full col-span-12">
              <Label text={"Address"} />
              <Input
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                placeholder="Enter address"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Mobile"} />
              <Input
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                placeholder="Enter mobile"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Email"} />
              <Input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter email"
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

export default NewTrainerForm;
