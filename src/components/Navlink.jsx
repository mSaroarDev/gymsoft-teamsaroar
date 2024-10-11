
import { useAppSelector } from "@/redux/hooks";
import {
  ChevronDown,
  ChevronUp,
  Circle,
  ContactRound,
  FileText,
  Layers3,
  LayoutPanelLeft
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navlink = () => {
  // currUser
  const { currUserData } = useAppSelector((state) => state.currUser);
  const currUserRole = currUserData?.role
  // the currUserData holding the roles Admin, Trainer or Trainee

  const navLinks = [
    {
      id: 1,
      name: "overview",
      role: ["Admin", "Trainer", "Trainee"],
      icon: <LayoutPanelLeft className="w-4 h-4 text-brand" />,
    },
    {
      id: 2,
      name: "profile",
      role: ["Admin", "Trainer", "Trainee"],
      icon: <ContactRound className="w-4 h-4 text-brand" />,
    },
    {
      id: 3,
      name: "users",
      role: ["Admin"],
      icon: <ContactRound className="w-4 h-4 text-brand" />,
    },
    {
      id: 4,
      name: "trainer",
      role: ["Admin"],
      icon: <Layers3 className="w-4 h-4 text-brand" />,
      childrens: ["All Trainers", "Add New Trainer"],
    },
    {
      id: 5,
      name: "class schedule",
      role: ["Admin"],
      icon: <FileText className="w-4 h-4 text-brand" />,
      childrens: ["Recent Schedules", "Assign Requests", "Create New Schedule"],
    },
    {
      id: 6,
      name: "classes",
      role: ["Trainer"],
      icon: <FileText className="w-4 h-4 text-brand" />,
    },
    {
      id: 7,
      name: "classes",
      role: ["Trainee"],
      childrens: ["All Classes", "Book a Class"],
      icon: <FileText className="w-4 h-4 text-brand" />,
    },

    // trainee
  ];

  const [showSubMenu, setShowSubmenu] = useState(null);

  const handleToggleSubMenu = (id) => {
    setShowSubmenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      {navLinks?.filter((link)=> link?.role?.includes(currUserRole))?.map((item, i) => (
        <div key={item.id}>
          <Link
            onClick={
              item?.childrens ? () => handleToggleSubMenu(item.id) : null
            }
            href={`${item?.childrens ? "#" : `/dashboard/${item?.name}`}`}
            className={`nav-link`}
          >
            {item?.icon}
            <span>{item?.name}</span>
            {item?.childrens && (
              <span className="ms-auto">
                {showSubMenu === item.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            )}
          </Link>

          <div
            className={`pl-2 submenu ${
              showSubMenu === item.id ? "submenu-open" : ""
            }`}
          >
            {item.childrens?.map((submenu, idx) => (
              <Link
                key={idx}
                href={
                  "/dashboard/" + submenu.split(" ").join("-").toLowerCase()
                }
                className="nav-link"
              >
                <Circle className="w-2 h-2" />
                <span>{submenu}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlink;
