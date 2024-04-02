import logo from "../image/logos2.png";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img
              className="h-[45px] inline-block items-center"
              src={logo}
              alt=""
            />
            <span className="text-white mt-2">SEU BAGOA</span>
          </a>
          <p className="md:w-full">
            {" "}
            SEU BAGOA merupakan sistem informasi untuk Badan Pembangunan Daerah
            (BAPEDA) kabupaten Nias Selatan yang menyediakan informasi terkait
            kegiatan dengan kegiatan BAPEDA Nias Selatan dan juga inovasi dan
            penelitian yang sedang dan akan dilakukan di Kabupaten Nias Selatan.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all"
            />
          </div>
        </div>

        {/* Footer navigate */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Daftar Menu</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Dashboard
              </a>
              <a href="/" className="block hover:text-gray-300">
                Penelitian
              </a>
              <a href="/" className="block hover:text-gray-300">
                Inovasi
              </a>
              <a href="/" className="block hover:text-gray-300">
                Kuesioner
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Bantuan / FAQ</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Apa itu inovasi?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Apa itu Penelitian?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Dimana mengisi Kuesioner?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Bagaimana mengajukan
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Kontak</h4>
            <ul className="space-y-3">
              <p className=" hover:text-gray-300">0812 3454 113</p>
              <p className=" hover:text-gray-300">Seubagoa@gmail.gov</p>
              <p className=" hover:text-gray-300"></p>
              <p className=" hover:text-gray-300">22864 </p>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className=" flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 text-white">
        <p>&copyright by : SEU BAGOA 2024</p>
        <div className=" flex items-center space-x-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png"
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
