/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getKuesionerApi } from "../../api/kuesionerApi.js";
import { Nav } from "../Nav.jsx";
import DetailKuesionerModal from "./detailkuesionermodal.jsx";
import TambahKuesioner from "./component/tambahkuesioner.jsx";

function Kuesioner() {
  return (
    <>
      <Nav />
      <TableKuesioner />
    </>
  );
}

function TableKuesioner() {
  const [kuesionerData, setKuesionerData] = useState([]);

  useEffect(() => {
    getKuesionerApi((data) => {
      setKuesionerData(data);
    });
  });

  return (
    <>
      <div className="relative overflow-auto ">
        <TambahKuesioner />
      </div>
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Judul
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Dibuat
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Diperbarui
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(kuesionerData) &&
              kuesionerData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.judul}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.tanggalDibuat}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.tanggalDiubah}
                  </td>
                  <td className="px-6 py-4  text-sm">
                    <DetailKuesionerModal data={item} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Kuesioner;
