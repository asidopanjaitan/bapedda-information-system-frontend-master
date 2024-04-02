/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  IoDocumentTextOutline,
  IoBookOutline,
  IoPeople,
  IoHelpCircleOutline,
} from "react-icons/io5";

export const DashboardGrid = () => {
  const BoxWrapper = ({ children }) => {
    return (
      <div className="rounded-3xl pt-4 pb-4 flex-1 border border-gray-200 flex items-center md:flex-col bg-gradient-to-b from-white to-blue-50 shadow-md">
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 m-3 ">
      <BoxWrapper className="text-center items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoDocumentTextOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Penelitian
          </span>
          <div className="flex items-center ml-4">
            <strong className="text-xl text-gray-700 font-semibold">700</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoBookOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Inovasi Daerah
          </span>
          <div className="flex items-center ml-8">
            <strong className="text-xl text-gray-700 font-semibold">123</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoHelpCircleOutline className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">
            Total Kuisioner
          </span>
          <div className="flex items-center ml-6">
            <strong className="text-xl text-gray-700 font-semibold">162</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">Total User</span>
          <div className="flex items-center ml-4">
            <strong className="text-xl text-gray-700 font-semibold">113</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGrid;
