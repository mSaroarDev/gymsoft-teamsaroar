"use client";
import { H2 } from "@/subcomponents/Headings";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  // show menu
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((l) => !l);
  };

  return (
    <>
      <div className="py-5 fixed top-0 left-0 right-0 w-full">
        <main>
          <div className="flex items-center justify-between">
            <div>
              <H2 className="text-brand text-[24px]" text={"Fitnessia"} />
            </div>

            <div className="flex items-center gap-4">
              <ul className="hidden md:flex items-center gap-5 text-base">
                <li>
                  <Link href={"/"} className="navbar-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="navbar-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="navbar-link">
                    Contact
                  </Link>
                </li>
              </ul>

              <Link
                href={"/login"}
                className="bg-brand text-white px-4 py-2 rounded ml-3"
              >
                Login
              </Link>

              <button onClick={handleShowMenu} className="md:hidden">
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={
          showMenu
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: "100%" }
        }
        transition={{ duration: 0.7 }}
        className="fixed left-20 bottom-0 right-0 top-0 hero-section text-white"
      >
        <div className="w-full text-right p-5">
          <button onClick={handleShowMenu} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-5 w-full text-white">
          <ul className="flex flex-col items-center gap-5 text-base">
            <li>
              <Link href={"/"} className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link href={"/"} className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
