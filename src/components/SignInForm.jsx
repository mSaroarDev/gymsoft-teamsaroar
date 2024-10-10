"use client";
// import { setCurrUser } from "@/features/user/currUserSlice";
// import { setLogged } from "@/features/user/loginSlice";
// import { createNotification } from "@/libs/notification";
// import { myProfile, userLogin } from "@/libs/user";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { Form, Input } from "@/subcomponents/Forms";
import { showError, showSuccess } from "@/utils/toaster";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignInForm = () => {
  // utils
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // values
      const { password } = values;

      // check if password bellow than 6 character
      if (password.length < 6) {
        return showError("Password must be more than 6 character!");
      }

      // login function
      // try {
      //   setLoading(true);
      //   const res = await userLogin(values);
      //   if (res.status === 401) {
      //     showError("Wrong Email or Password");
      //   } else if (res.status === 200) {
      //     showSuccess("Logged in");
      //     router.refresh();
      //     router.replace("/dashboard/overview");

      //     // store user data in redux store
      //     const data = await res.json();

      //     const currUser = await myProfile(data?.data?.id);

      //     // dispatch(setLogged(true));
      //     // dispatch(setCurrUser(currUser.data));

      //     // update notifications
      //     await createNotification({
      //       type: "loggin",
      //       created_by: currUser?.data?.name,
      //       text: "logged in",
      //     });
      //   } else {
      //     showError("Something is wrong");
      //   }
      // } catch (error) {
      //   console.log("error", error);
      //   showError("Internal Server Error");
      // } finally {
      //   setLoading(false);
      // }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="w-full my-5 text-center">
        <Input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          placeholder="Enter Email"
        />
        <Input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          placeholder="******"
        />

        {loading ? (
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 flex items-center justify-center gap-2 pointer-events-none"
            >
              <ButtonSpinner />
              <span>Signing In</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5"
            >
              Sign In
            </button>
          </div>
        )}
      </Form>
    </>
  );
};

export default SignInForm;
