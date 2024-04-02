import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { FiGitPullRequest } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TbPower } from "react-icons/tb";

export const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Inovasi", link: "/", icon: FiGitPullRequest },
    { name: "Penelitian", link: "/", icon: TbReportAnalytics },
    {
      name: "Quisioner",
      link: "/kuesioner/kuesioner",
      icon: TbDeviceIpadQuestion,
    },
    { name: "Setting", link: "/", icon: RiSettings4Line },
    { name: "Log Out", link: "/", icon: TbPower },
  ];
  const [open, setOpen] = useState(true);
  const [activeMenuIndex] = useState(0); // Menambah state untuk menyimpan indeks menu aktif

  return (
    <div className="flex flex-col">
      <section className="flex gap-6">
        <div
          className={`bg-[#131313] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}>
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={30}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800  ${
                  activeMenuIndex === i && "bg-gray-800" // Menandai submenu yang aktif
                }`}>
                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}>
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-full bg-white font-semibold whitespace-pre text-gray-900  drop-shadow-xl px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-max `}>
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
