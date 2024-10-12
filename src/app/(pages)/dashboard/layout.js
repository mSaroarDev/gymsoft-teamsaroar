"use client";
import AdminTopbar from "@/components/AdminTopbar";
import Navlink from "@/components/Navlink";
import { H1 } from "@/subcomponents/Headings";

export default function Layout({ children }) {
  return (
    <>
      {/* sidebar */}
      <div className="hidden md:block">
        <div className="fixed top-0 bottom-0 left-0 w-[250px] bg-black overflow-y-auto">
          <H1
            text={"Fitnessia"}
            className="text-lg text-brand m-5 tracking-wider"
          />

          {/* navlinks */}
          <div className="flex flex-col">
            <Navlink />
          </div>
        </div>
      </div>

      {/* topbar */}
      <AdminTopbar />

      {/* childrens */}
      <div className="ml-0 md:ml-[250px] mt-20 px-5 md:px-7 py-5">
        {children}
      </div>
    </>
  );
}
