import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar";
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Skills from "../PortifolioPages/Skills";
import Services from "../PortifolioPages/Services";
import Profile from "./Profile";

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

      <div className="md:px-24 pb-32">
        {/* About Section */}
        <div className="pt-32">
          <h3 className="text-center text-xl md:text-xl">About Me</h3>
        </div>

        {/* about my profile */}
        <Profile />

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
