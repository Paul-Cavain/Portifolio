import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React, { useRef } from "react";
import Image from "../src/pas.png";
import resume from "./resume.pdf";
import Skills from "./Skills";
import Services from "./Services";
import { FaLightbulb, FaGifts, FaHeadphones, FaArrowUp } from "react-icons/fa";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const arrowRef = useRef(null);

  const handleClick = () => {
    handleScrollToTop();
    arrowRef.current.blur();
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="md:px-28 pb-32">
        {/* About Section */}
        <div className="pt-32 md:pt-40">
          <h3 className="text-center text-2xl md:text-4xl">About Me</h3>
          <p className="text-center text-lg md:text-xl">My Introduction</p>

          <div className="flex flex-col md:flex-row justify-center md:space-x-3 pt-8">
            <div className="flex md:flex-wrap justify-center">
              <div className="md:px-10 md:mt-3 px-10">
                <img
                  src={Image}
                  alt="Paulo Nkelego"
                  className="ring-1 ring-black rounded-full size-96 mt-20 mb-40 object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:px-32">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-10 px-4 md:px-0">
                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaLightbulb className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Experience</span>
                    <span>4+ Years</span>
                  </div>
                </div>

                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaGifts className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Complete</span>
                    <span>4+</span>
                  </div>
                </div>

                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaHeadphones className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Support</span>
                    <span>9+</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-4 md:px-0">
                <div>
                  <p>
                    A Pasionated Front End developer, I create Web Pages with
                    UI/UX user interface, mobile applications for both Android
                    and iOS.
                  </p>
                </div>
                <div className="mt-6">
                  <a href={resume} download={"Paulo Nkelego Resume"}>
                    <button
                      type="button"
                      name="download_cv"
                      className="text-white bg-black h-12 w-32 rounded-md mt-3 md:mt-2 transition ease-out duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-black"
                    >
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Scroll-to-Top Arrow */}
        <div
          ref={arrowRef}
          className="fixed bottom-16 right-10 cursor-pointer text-xl text-white bg-black rounded-full p-2 shadow hover:ring-2 hover:ring-black hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          <FaArrowUp />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
