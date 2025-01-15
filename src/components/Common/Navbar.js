import React from "react";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <section>
      <nav className="fixed top-0 left-0 z-10 right-0 flex flex-row justify-between px-4 md:px-28 bg-white py-6 shadow-md md:shadow-sm">
        <div className="text-xl md:text-xl">
          <a href="/">
            <h1 className="font-light">PauloNkelego</h1>
          </a>
        </div>

        <div className="text-lg md:flex hidden">
          <ul className="flex flex-row">
            <a href="/About">
              <li
                className={`transition ease-linear duration-500 p-2.5 rounded ${
                  activeLink === "/About"
                    ? "text-red-500"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                About Me
              </li>
            </a>
            <a href="/Works">
              <li
                className={`transition ease-linear duration-500 p-2.5 rounded ${
                  activeLink === "/Works"
                    ? "text-red-500"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                Works
              </li>
            </a>
            <a href="/Testimonies">
              <li
                className={`transition ease-linear duration-500 p-2.5 rounded ${
                  activeLink === "/Testimonies"
                    ? "text-red-500"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                Testimonies
              </li>
            </a>
            <a href="/Contacts">
              <li
                className={`transition ease-linear duration-500 p-2.5 rounded ${
                  activeLink === "/Contacts"
                    ? "text-red-500"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                Contacts
              </li>
            </a>
          </ul>
        </div>

        {/* Mobile navbar component */}
        <MobileNav />
      </nav>
    </section>
  );
};

export default Navbar;
