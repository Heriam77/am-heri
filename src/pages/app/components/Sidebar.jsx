import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiMessage, BiTask } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import SidebarLogo from "./SidebarLogo";
import { DashboardOutlined } from "@mui/icons-material";

const navigation_list = [
  {
    $_id: "01",
    $_link: "/",
    $_icon: <FiHome />,
    $_label: "Actuality",
  },
  {
    $_id: "02",
    $_link: "/r",
    $_icon: <DashboardOutlined />,
    $_label: "Dashboard",
  },
  {
    $_id: "02",
    $_link: "/r",
    $_icon: <CgProfile />,
    $_label: "Profile",
  },
  {
    $_id: "02",
    $_link: "/m",
    $_icon: <BiMessage />,
    $_label: "Message",
  },
  {
    $_id: "03",
    $_link: "/f",
    $_icon: <FaRegBell />,
    $_label: "Notifications",
  },
  {
    $_id: "04",
    $_link: "/a",
    $_icon: <BiTask />,
    $_label: "Tasks",
  },
];

const Sidebar = () => {
  return (
    <div className="  w-1/4 p-4 shadow shadow-zinc-100 font-semibold h-screen text-sm/6 ">
      <div className="Logo">
        <SidebarLogo />
      </div>
      <div className="grid items-center gap-2">
        {navigation_list.map((item) => (
          <NavLink
            key={item.$_id}
            to={item.$_link}
            className={(nav) =>
              nav.isActive
                ? " text-pink-500 p-2 flex border-l-8 border-pink-500 rounded bg-pink-500/5"
                : "cursor-pointer p-2 hover:text-pink-500 hover:bg-pink-500/5 flex rounded border-l-8 border-transparent"
            }
          >
            <div className="font-semibold flex items-center gap-2 ">
              <h1 className="text-xl -mt-1">{item.$_icon}</h1>
              <h1 className="first-letter:uppercase">{item.$_label}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
