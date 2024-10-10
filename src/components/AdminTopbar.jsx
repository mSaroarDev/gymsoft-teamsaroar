import { H1, H3, P } from "@/subcomponents/Headings";
import { AlignJustify, LogOut, X } from "lucide-react";
import { useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import { showError, showSuccess } from "@/utils/toaster";
import { useRouter } from "next/navigation";
import { logout } from "@/libs/user";

const AdminTopbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // show logout button
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  // logout
  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res.status === 200) {
        showSuccess("Loggged out");
        router.push("/login");
      } else {
        showError("Log out failed");
      }
    } catch (error) {
      showError("Internal Serer Error");
    }
  };

  return (
    <>
      <div className="bg-white ml-0 md:ml-[250px] w-full md:w-auto shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between md:justify-end p-3">
          <H1 className="text-lg md:hidden" text={"NextNews"} />
          <div className="flex items-center justify-center gap-4">
            <div className="text-right">
              <H3 className="text-base font-semibold" text={"userData.name"} />
              <P className="-mt-2" text={"userData.designation"} />
            </div>
            <div
              onClick={() => setShowLogout((l) => !l)}
              className="w-10 h-10 rounded-full ring overflow-hidden cursor-pointer"
            >
              <img
                src={"userData.image"}
                className="w-full h-full object-cover"
                alt={"userData.nam"}
              />

              {showLogout && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="fixed w-fit h-auto bg-white top-16 right-5 border border-brand/30 p-1 rounded-md box-shadow"
                >
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1 hover:bg-brand hover:text-black transition-all duration-200 rounded-md"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </div>
            <button
              onClick={() => setShowMobileMenu((l) => !l)}
              className="md:hidden ml-4"
            >
              {showMobileMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <AlignJustify className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={
          showMobileMenu ? { opacity: 1, x: 0 } : { x: "100%", display: "none" }
        }
        transition={{ duration: 0.5, stiffness: { x: 60 } }}
        className="mt-16 h-[90vh] md:hidden items-center justify-center bg-black overflow-hidden fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="md:hidden w-full flex flex-col pt-14">
          <Navlink />
        </div>
      </motion.div>
    </>
  );
};

export default AdminTopbar;
