import React, { useRef } from 'react';
import image from '../src/pas.png';
import resume from "./resume.pdf";
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble, FaArrowUp, FaClock } from "react-icons/fa";

const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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

        {/* flex one */}
        <div className='flex flex-col md:flex-row w-full h-screen md:pt-32'>
          <div className='w-full md:w-1/2 pt-32'>
            <div className='text-center md:text-start'>
              <h2 className="text-2xl md:text-6xl font-semibold">I'm PauloNkelego</h2>
            </div>
            <div className='mt-3 md:mt-5 text-md md:text-lg'>
              <div className='px-3 md:px-0 break-all'>
                <p>I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
              </div>
              <div className='text-black mt-12 md:mt-8 flex justify-center md:justify-start text-2xl space-x-2'>
                <a href='https://twitter.com/Cavain_tz'><FaTwitter className='hover:text-black hover:ring-2 hover:ring-black rounded-full p-1' size={35}/></a>
                <a href='https://github.com/Paul-Cavain'><FaGithub className='hover:text-black hover:ring-2 hover:ring-black rounded-full p-1' size={35}/></a>
                <a href='#'><FaDribbble className='hover:text-black hover:ring-2 hover:ring-black rounded-full p-1' size={35}/></a>
                <a href='#'><FaLinkedin className='hover:text-black hover:ring-2 hover:ring-black rounded-full p-1' size={35}/></a>
                <a href='#'><FaClock className='hover:text-black hover:ring-2 hover:ring-black rounded-full p-1' size={35}/></a>
              </div>

              <div className='flex justify-center md:justify-start'>
                <a href={resume} download={"Paulo Nkelego Resume"}>
                  <button type='button' name="download_cv" className='text-white bg-black h-12 w-32 rounded-md mt-9 md:mt-8 hover:text-gray-300 transition ease-out duration-500'>Download CV</button>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-center w-full md:w-1/2'>
            <div className='px-10 md:mt-3 md:w-3/4'>
              <img src={image} width={600} height={100} alt="Portfolio image" className='mt-20 mb-40 rounded-full ring-1 ring-gray-300 object-cover'/>
            </div>
          </div>
        </div>

        {/* second flex */}
        <div className="w-full text-center mt-44 md:mt-0">
          <h3 className="text-2xl md:text-4xl">Interested in Working Together With Me?</h3>
          <p className="mt-6 text-md md:text-xl">I Will Surely Show You How I Turn Your Idea Into The Amazing One</p>
          <div>
            <a href="./Contacts">
            <button type="button" name="submit" className="w-32 h-12 mt-6 rounded-md text-white bg-black">Let'sTalk</button></a>
          </div>
        </div>

        {/* Fixed Arrow-Top Icon */}
        <div
          ref={arrowRef}
          className="fixed bottom-16 right-4 md:right-20 cursor-pointer text-xl text-white bg-black rounded-full p-2 shadow"
          onClick={handleClick}
        >
          <FaArrowUp />
        </div>
      </div>
    </>
  );
}

export default Home;
