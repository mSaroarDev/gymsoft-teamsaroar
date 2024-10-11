"use client";
import { Form, Input, Label, Select } from "@/subcomponents/Forms";
import { ImageUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import { showError, showSuccess } from "@/utils/toaster";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { PrimaryButton } from "@/subcomponents/Buttons";
import { editProfile, myProfile, register } from "@/libs/user";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addUser, addUserThunk } from "@/lib/features/users/userSlice";

const NewTrainerForm = () => {
  // get query id
  const id = useSearchParams().get("id");
  const pathname = usePathname();
  const { currUserData } = useAppSelector((state) => state.currUser);
  const dispatch = useAppDispatch()

  // get existing values if have
  const [existingData, setExistingData] = useState({});
  const fetchExistingData = async () => {
    const res = await myProfile(id);

    if (res.status === 200) {
      setExistingData(res.data.data);
    } else {
      setExistingData({});
    }
  };

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
           
        const res = id ? await editProfile(id, values) : await register(values);

        if (res.status === 200) {
          dispatch(addUser(res?.data?.data))
          showSuccess(id ? `Profile Updated` : `Profile Created`)
          router.push(!id ? `/dashboard/all-trainers` : `${pathname}?id=${id}`);
        } else {
          showError(id ? "Profile Updated" : "Trainer Create Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (id) {
      fetchExistingData();
    }
  }, [id]);

  useEffect(() => {
    if (existingData) {
      formik.setValues({
        name: existingData.name || "",
        designation: existingData.designation || "",
        address: existingData.address || "",
        mobile: existingData.mobile || "",
        email: existingData.email || "",
        image: existingData.image || "",
        role: existingData.role || "",
      });
    }
    setImage(existingData?.image);
  }, [existingData]);
  

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

            {currUserData?.role === "Admin" && (
              <div className="w-full col-span-12 md:col-span-6">
                <Label text={"Role"} />
                <Select
                  id="role"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Trainee">Trainee</option>
                </Select>
              </div>
            )}
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
