/* eslint-disable no-unused-vars */
import { Menu } from "@headlessui/react";
import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import logo from "./image/logos2.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-white text-black h-16 px-4 flex justify-between items-center border-b ">
      <div className="relative flex justify-between">
        <img src={logo} className="h-10 w-10" alt="Logo" />
        <strong className=" font-serif text-xl pt-2 pl-3">SEU BAGOA</strong>
      </div>
      <Menu as="div" className="relative">
        <span className="sr-only">Open user menu</span>
        <div>
          <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral">
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url("https://source.unsplash.com/80x80?face")`,
              }}>
              <span className=" sr-only">Sopian Manurung</span>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className=" origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active && " bg-gray-100",
                    "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                  )}
                  onClick={() => navigate("/profile")}>
                  Profile
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active && " bg-gray-100",
                    "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                  )}
                  onClick={() => navigate("/settings")}>
                  Settings
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active && " bg-gray-100",
                    "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                  )}
                  onClick={() => navigate("/Logout")}>
                  Logout
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
