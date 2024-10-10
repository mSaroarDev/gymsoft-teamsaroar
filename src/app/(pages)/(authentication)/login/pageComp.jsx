"use client";
import SignInForm from "@/components/SignInForm";
import { H1, H3, P } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import Link from "next/link";

const PageComp = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <div className="h-full w-full grid grid-cols-12">
          {/* design */}
          <motion.div
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-10 hidden col-span-12 lg:col-span-6 bg-brand/40 md:flex md:flex-col items-start justify-center"
          >
            <H1 className="text-[40px]" text="Sign in Admin" />
            <P text="Sign in with your credential. To create, read, update and delete news or blogs." />
          </motion.div>

          {/* form */}
          <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="col-span-12 md:col-span-6">
            <div className="h-full flex items-center justify-center rounded-lg overflow-hidden">
              <div className="w-full md:w-[450px] box-shadow p-10">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <img src="/sign.svg" className="w-24 h-24 mb-5" />
                  <H3 text="Sign in" />
                </div>

                <SignInForm />

                <div className="text-center">
                  <Link href="/login">Forgot Password?</Link> <br />
                  <Link href="/register">Register Now</Link> <br />

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PageComp;
