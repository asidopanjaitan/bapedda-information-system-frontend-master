import { useState } from "react";

const TambahKuesioner = () => {
  const [showModal, setShowModal] = useState(false);
  const [judul, setJudul] = useState("");
  const [judulPertanyaan, setJudulPertanyaan] = useState("");
  const [jenisJawaban, setJenisJawaban] = useState(false);
  const [pilihan, setPilihan] = useState([]);

  const [addPilber, setAddPilber] = useState(false);

  const [options, setOptions] = useState(["Opsi 1"]);

  const removeOption = (indexToRemove) => {
    const newOptions = options.filter((_, index) => index !== indexToRemove);
    setOptions(newOptions);
    const newPilihan = pilihan.filter((_, index) => index !== indexToRemove); // Menghapus elemen dengan indeks yang sesuai dari state pilihan
    setPilihan(newPilihan);
  };

  const removeAllOptions = () => {
    setOptions([]);
  };

  // const addOption = () => {
  //   const newOptions = [...options, `Opsi ${options.length + 1}`];
  //   setOptions(newOptions);
  // };

  const addPilihanBerganda = () => {
    const newOption = `Opsi ${options.length + 1}`;
    const newOptions = [...options, newOption]; // Menambahkan opsi baru ke dalam array opsi yang sudah ada
    setOptions(newOptions);

    const newPilihan = [...pilihan, ""]; // Menambahkan elemen baru ke dalam array pilihan
    setPilihan(newPilihan);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    toggleResetAddPilber();
    setJudul("");
    setJudulPertanyaan("");
    setJenisJawaban(false);
    setPilihan("");
  };

  const toggleAddPilber = () => {
    setAddPilber(!addPilber);
    setJenisJawaban(!jenisJawaban);
  };

  const toggleResetAddPilber = () => {
    setAddPilber(false);
    removeAllOptions();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the request body
    const requestBody = {
      judul: judul,
      listPertanyaan: [
        {
          pertanyaan: judulPertanyaan,
          jenisPilihanBerganda: jenisJawaban,
          listPilihanBerganda: pilihan.map((p) => ({ pilihanBerganda: p })),
        },
      ],
    };

    try {
      // Make POST request to the API
      const response = await fetch(
        "http://192.168.0.119:8080/manajemen-kuesioner/kuesioner",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log(requestBody);
      // Check if request was successful
      if (response.ok) {
        // If successful, toggle the modal
        toggleModal();
        // Optionally, you can perform further actions like showing a success message
        console.log("Kuesioner berhasil ditambahkan!");
      } else {
        // If request failed, throw an error
        throw new Error("Gagal menambahkan kuesioner!");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-2 rounded-lg flex items-end space-x-1 top-4 right-4 mt-5 ml-2"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span>Tambah Kuesioner</span>
      </button>

      {/* Show Modal */}
      {showModal && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative w-3/4 mx-auto my-6 bg-white rounded-lg shadow-lg">
              <div className="mt-4">
                <h2 className="font-bold text-lg ml-3">Tambah Kuesioner:</h2>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center justify-between bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="w-full p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <div className="mb-6">
                        <label
                          htmlFor="large-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Judul Kuesioner
                        </label>
                        <input
                          type="text"
                          id="large-input"
                          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={judul}
                          onChange={(e) => setJudul(e.target.value)}
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="large-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pertanyaan
                        </label>
                        <input
                          type="text"
                          id="large-input"
                          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={judulPertanyaan}
                          onChange={(e) => setJudulPertanyaan(e.target.value)}
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="default-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Apakah anda ingin membuat pertanyaan pilihan berganda
                          ?
                          <div className="mt-3">
                            <label className="inline-flex items-center cursor-pointer">
                              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Tidak
                              </span>
                              <input
                                type="checkbox"
                                value={jenisJawaban}
                                className="sr-only peer"
                                onClick={toggleAddPilber}
                              />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Ya
                              </span>
                            </label>
                          </div>
                        </label>
                      </div>

                      {/* Menampilkan tambah pilber */}
                      {addPilber && (
                        <>
                          <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Tambahkan opsi jawaban
                            {options.map((option, index) => (
                              <div
                                key={index}
                                className="relative mt-3 flex items-center"
                              >
                                <input
                                  type="text"
                                  id={`option_${index}`}
                                  className="block px-2.5 pb-2.5 pt-4 w-auto text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                                  placeholder=" "
                                  value={pilihan[index]} // Menggunakan nilai pilihan pada indeks yang sesuai
                                  onChange={(e) => {
                                    const newPilihan = [...pilihan];
                                    newPilihan[index] = e.target.value; // Mengatur nilai pilihan pada indeks yang sesuai
                                    setPilihan(newPilihan);
                                  }}
                                />
                                <label
                                  htmlFor={`option_${index}`}
                                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  {option}
                                </label>
                                <button
                                  className="ml-2 flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                  onClick={() => removeOption(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5z"
                                      clipRule="evenodd"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M8 7a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V7zm4-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1h4V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Hapus
                                </button>
                              </div>
                            ))}
                            <div>
                              <button
                                type="button"
                                className="pr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-2 rounded-lg flex items-end space-x-1 top-4 right-4 mt-3"
                                onClick={addPilihanBerganda}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                                <span>Tambah Opsi</span>
                              </button>
                            </div>
                          </label>
                        </>
                      )}

                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 mx-2 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={toggleModal}
                        >
                          Kembali
                        </button>
                        <button
                          type="submit"
                          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 mx-2 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6"></ul>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default TambahKuesioner;
