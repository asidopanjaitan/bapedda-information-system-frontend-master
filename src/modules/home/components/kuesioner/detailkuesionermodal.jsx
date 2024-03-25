/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const DetailKuesionerModal = ({ buttonLabel, modalContent, data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Detail Kuesioner
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="relative w-3/4 mx-auto my-6 bg-white rounded-lg shadow-lg">
            <div className="mt-4">
              <h2 className="font-bold text-lg ml-3">List Pertanyaan:</h2>
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center justify-between bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="w-full p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    {data.listPertanyaan.map((pertanyaan) => (
                      <div key={pertanyaan.id} className="mb-4">
                        <h2 className="font-semibold text-gray-900 dark:text-white">
                          {pertanyaan.length !== 0 ? (
                            pertanyaan.pertanyaan
                          ) : (
                            <span>Belum ada pertanyaan</span>
                          )}
                        </h2>
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                          {pertanyaan.jenisPilihanBerganda === true ? (
                            pertanyaan.listPilihanBerganda.map(
                              (pilber, index) => (
                                <li
                                  key={pilber.id}
                                  className="flex items-center"
                                >
                                  <span className="mr-2">
                                    {String.fromCharCode(97 + index)}.
                                  </span>
                                  <span>{pilber.pilihanBerganda}</span>
                                </li>
                              )
                            )
                          ) : (
                            <span className="font-semibold text-gray-900 line-through dark:text-white">
                              Bukan pilihan berganda
                            </span>
                          )}
                        </ul>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 mx-auto flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={toggleModal}
                    >
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6"></ul>
          </div>
          <div className="p-6">{modalContent}</div>
          <div className="absolute top-0 right-0 m-4"></div>
        </div>
      )}
    </div>
  );
};
export default DetailKuesionerModal;
