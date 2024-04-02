import { useState } from "react";
import logo from "../image/logos2.png";
import "../../../../App.css";

import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Dashboard", path: "dashboard" },
    { link: "Penelitian", path: "penelitian" },
    { link: "Inovasi", path: "inovasi" },
    { link: "Kuesioner", path: "kuesioner" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/guest/dashboard"
              className="text-2xl font-bold flex item-center space-x-3 space-y-2 text-primary">
              <img
                className="h-[45px] inline-block items-center"
                src={logo}
                alt=""
              />
              <span>SEU BAGOA</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-300">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          <div className=" space-x-12 hidden md:flex items-center">
            <a href="/" className="mr-2 hover:text-gray-300">
              Regulasi
            </a>
            <button className="bg-secondary py-2 px-6 transition-all duration-300 rounded hover:text-white hover:bg-indigo-700">
              <a href="">Login</a>
            </button>
          </div>

          {/*Display Menu on Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none  focus:text-gray-300">
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={` space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}>
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block text-white hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
