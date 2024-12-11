import React, { useRef } from "react";
import HomeImage from "./pas.png";
import resume from "./resume.pdf";

import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaArrowUp,
  FaClock,
} from "react-icons/fa";

const Home = () => {
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
    <>
      <div className="home w-full px-4 md:px-28 pb-32 md:pb-36">
        {/* my introduction */}
        <div className="flex flex-col md:flex-row w-full h-screen md:pt-32">
          <div className="w-full md:w-1/2 pt-32">
            <div className="text-center md:text-start">
              <h2 className="text-2xl md:text-6xl font-semibold">
                I'm PauloNkelego
              </h2>
            </div>
            <div className="mt-3 md:mt-5 text-md md:text-lg">
              <div className="px-3 md:px-0 break-all">
                <p>
                  Hi, I am Paulo Nkelego, a software engineer passionate about
                  building efficient and scalable software systems. Here, I
                  share insights, tips, and experiences from my journey in tech.
                  Thanks for stopping by —let us explore, learn, and grow
                  together!!
                </p>
              </div>
              <div className="text-black mt-12 md:mt-8 flex justify-center md:justify-start text-2xl space-x-2">
                <a href="https://twitter.com/Cavain_tz">
                  <FaTwitter
                    className="hover:text-black hover:ring-2 hover:ring-black rounded-full p-1"
                    size={35}
                  />
                </a>
                <a href="https://github.com/Paul-Cavain">
                  <FaGithub
                    className="hover:text-black hover:ring-2 hover:ring-black rounded-full p-1"
                    size={35}
                  />
                </a>
                <a href="https://dribbble.com/cavaincodez">
                  <FaDribbble
                    className="hover:text-black hover:ring-2 hover:ring-black rounded-full p-1"
                    size={35}
                  />
                </a>
                <a href="https://www.linkedin.com/in/paul-cavain-7511b5304/">
                  <FaLinkedin
                    className="hover:text-black hover:ring-2 hover:ring-black rounded-full p-1"
                    size={35}
                  />
                </a>
                <a href="https://wakatime.com/@CavainCoder">
                  <FaClock
                    className="hover:text-black hover:ring-2 hover:ring-black rounded-full p-1"
                    size={35}
                  />
                </a>
              </div>

              <div className="flex justify-center md:justify-start">
                <a href={resume} download={"Paulo Nkelego Resume"}>
                  <button
                    type="button"
                    name="download_cv"
                    className="text-white bg-black h-12 w-32 rounded-md mt-9 md:mt-8 transition ease-out duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-black"
                  >
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center w-full md:w-1/2">
            <div className="px-10 md:mt-3 md:w-3/4">
              <img
                src={HomeImage}
                alt="my image"
                className="mt-20 mb-40 rounded-full ring-1 ring-gray-300 object-cover"
              />
            </div>
          </div>
        </div>

        {/* introduction image */}
        <div className="w-full text-center mt-44 md:mt-0">
          <h3 className="text-2xl md:text-4xl">
            Interested in Working Together With Me?
          </h3>
          <p className="mt-6 text-md md:text-xl">
            I Will Surely Show You How I Turn Your Idea Into The Amazing One
          </p>
          <div>
            <a href="./Contacts">
              <button
                type="button"
                name="submit"
                className="w-32 h-12 mt-6 rounded-md text-white bg-black transition ease-out duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:text-semibold"
              >
                Let'sTalk
              </button>
            </a>
          </div>
        </div>

        {/* Fixed Arrow-Top Icon */}
        <div
          ref={arrowRef}
          className="fixed bottom-16 right-4 md:right-20 cursor-pointer text-xl text-white bg-black rounded-full p-2 shadow hover:ring-2 hover:ring-black hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          <FaArrowUp />
        </div>
      </div>
    </>
  );
};

export default Home;
