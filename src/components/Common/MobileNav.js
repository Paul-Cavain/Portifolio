import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNav = () => {
  const [menuOpen, stMenuOpen] = useState(false);
  const handleNav = () => {
    stMenuOpen(!menuOpen);
  };

  return (
    <>
      <div onClick={handleNav} className="sm:hidden cursor-pointer">
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex flex-row space-x-8 w-full justify-between">
          <div>
            <h3 className="text-2xl font-bold">PauloNkelego</h3>
          </div>
          <div
            onClick={handleNav}
            className="cursor-pointer rounded-full text-black"
          >
            <AiOutlineClose size={30} />
          </div>
        </div>
        <hr className="mt-4" />

        {/* sidebar menu in a mobile */}
        <div className="flex col py-2">
          <ul>
            <a href="/">
              <li
                onClick={() => stMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </a>
            <a href="/About">
              <li
                onClick={() => stMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About Me
              </li>
            </a>
            <a href="/Testimonies">
              <li
                onClick={() => stMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Testimonies
              </li>
            </a>

            <a href="/Works">
              <li
                onClick={() => stMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Works
              </li>
            </a>
            <a href="/Contacts">
              <li
                onClick={() => stMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contacts
              </li>
            </a>
          </ul>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default MobileNav;
