import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import React, { useRef } from 'react';
import image from '../src/pas.png';
import resume from "./resume.pdf";
import { FaCss3, FaDraft2Digital, FaFigma, FaGifts, FaHeadphones, FaLightbulb, FaLink, FaMobile, FaSubscript } from "react-icons/fa";
import { FaArrowUp, FaBootstrap, FaCloud, FaDatabase, FaDocker, FaGit, FaLaptop, FaLaravel, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";


const About = () => {

  
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };z

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
    <div>
      <div>
        <Navbar />
      </div>

      <div className="md:px-28 pb-32">

        {/* about my informations */}
        <div className='pt-32 md:pt-40'>
          <h3 className='text-center text-2xl md:text-4xl'>About Me</h3>
          <p className='text-center text-lg md:text-xl'>My Introduction</p>

          <div className='flex flex-col md:flex-row justify-center md:space-x-3 pt-8'>
            <div className='flex md:flex-wrap justify-center'>
              <div className='md:px-10 md:mt-3 px-10'>
                <img src={image} width={600} height={100} alt="Portfolio image" className='mt-4 md:mb-40 rounded-full ring-1 ring-gray-300'/>
              </div>
            </div>

            <div className="flex flex-col md:px-32">
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-10 px-4 md:px-0">

                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaLightbulb className="text-3xl text-white"/>
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Experience</span>
                    <span>4+ Years</span>
                  </div>
                </div>

                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaGifts className="text-3xl text-white"/>
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Complete</span>
                    <span>4+</span>
                  </div>
                </div>

                <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                  <span className="flex justify-center">
                    <FaHeadphones className="text-3xl text-white"/>
                  </span>
                  <div className="flex flex-col mt-2 text-center text-white">
                    <span className="text-xl">Support</span>
                    <span>9+</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-4 md:px-0">
                <div className="">
                  <p>A Pasionated Front End developer, I create Web Pages with UI/UX user interface, mobile applications for both Android and iOS.</p>
                </div>
                <div className="mt-6">
                  <a href={resume} download={"Paulo Nkelego Resume"}>
                    <button type="button" name="download_cv" className="w-34 px-4 rounded-md text-white bg-black text-center h-10 hover:text-gray-300">Download CV</button>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* my skills and tools */}
        <div className='flex flex-col justify-center pt-12'>
          <div>
            <h3 className='text-center text-2xl md:text-4xl'>Skills & Tools</h3>
          </div>
      
          <div className='flex flex-col md:flex-row px-4 md:px-0 md:space-x-4 justify-center pt-8'>
            <div className="flex flex-row space-x-4">
              <div className='flex flex-col'>
                <div className='mt-4'>
                  <a href='https://react.dev/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaReact className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>React</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://getbootstrap.com/docs/5.0/getting-started/introduction/  '>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaBootstrap className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Bootstrap</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://www.linux.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLinux className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Linux</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='flex flex-col'>
                
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLaptop className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Admin</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaGit className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Git</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaDocker className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Docker</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-row space-x-4">
              <div className='flex flex-col'>
                
                <div className='mt-4'>
                  <a href='https://laravel.com/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLaravel className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Laravel</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://www.britannica.com/technology/database'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaDatabase className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Database</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://tailwindcss.com/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaCss3 className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Tailwind</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaNodeJs className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>NodeJs</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaDraft2Digital className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Dart</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLaravel className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Flutter</span>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>

            <div className="flex flex-row space-x-4">
              <div className='flex flex-col'>
                <div className='mt-4'>
                  <a href='https://www.javascript.com/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaSubscript className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Javascript</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://www.cloud.com/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaCloud className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Cloud Tech</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLink className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>API's</span>
                    </div>
                  </a>
                </div>
                
              </div>

              <div className='flex flex-col'>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaSubscript className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Vue</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaCloud className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>Quasar</span>
                    </div>
                  </a>
                </div>
                <div className='mt-4'>
                  <a href='https://nextjs.org/'>
                    <div className='bg-white flex flex-row space-x-4 w-40 px-1 py-1 h-12 rounded-lg border-2 border-black'>
                      <FaLink className='text-3xl mt-1'/>
                      <span className='bg-gray-400 hover:bg-black hover:text-white w-32 px-2 py-1 rounded-r-md'>API's</span>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>

        </div>

        {/* services */}
        <div className="pt-20 md:pt-40 px-4 md:px-20 pb-10">
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl">Services</h3>
            <p className="text-lg md:text-xl">What I Offer</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 md:mt-10">

            <div className="relative bg-black py-12 mt-4 md:mt-0 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
              <div className="front-content">
                <div className="flex justify-center">
                  <FaFigma className="text-3xl"/>
                </div>
                <div className="text-center mt-4 text-xl">
                  <h3>Design</h3>
                  <h3>(Mobile & Web)</h3>
                </div>
              </div>
              <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
                {/* New content to be displayed on hover */}
                <h3 className="text-xl">Special Design Offer</h3>
                <p className="mt-4">Get 50% off on website design projects this month!</p>
              </div>
            </div>

            <div className="relative bg-black py-12 mt-16 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
              <div className="front-content">
                <div className="flex justify-center">
                  <FaReact className="text-3xl"/>
                </div>
                <div className="text-center mt-4 text-xl">
                  <h3>Web</h3>
                  <h3>Front end Development</h3>
                </div>
              </div>
              <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
                {/* New content to be displayed on hover */}
                <h3 className="text-xl">Awesome UI/UX</h3>
                <p className="mt-4">Get beautiful Website and Mobile Interfaces and easy interactive to users</p>
              </div>
            </div>

            <div className="relative bg-black py-12 mt-16 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
              <div className="front-content">
                <div className="flex justify-center">
                  <FaDatabase className="text-2xl"/>
                </div>
                <div className="text-center mt-4 text-xl">
                  <h3>Web</h3>
                  <h3>Back end Development</h3>
                </div>
              </div>
              <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
                {/* New content to be displayed on hover */}
                <h3 className="text-xl">Data Vulnerabilityless and well secured</h3>
                <p className="mt-4">Under Advanced technology that secure and protect your data from stolen and breached</p>
              </div>
            </div>

            <div className="relative bg-black py-12 mt-16 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
              <div className="front-content">
                <div className="flex justify-center">
                  <FaMobile className="text-2xl"/>
                </div>
                <div className="text-center mt-4 text-xl">
                  <h3>(Android & iOS)</h3>
                  <h3>Mobile App Development</h3>
                </div>
              </div>
              <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
                {/* New content to be displayed on hover */}
                <h3 className="text-xl">A Lightweight mobile application</h3>
                <p className="mt-4">Get over both devices an Advanced mobile application</p>
              </div>
            </div>
          </div> 
        </div>

        <div ref={arrowRef} className="fixed bottom-16 right-10 cursor-pointer text-xl text-white bg-black rounded-full p-2 shadow" onClick={handleClick}>
          <FaArrowUp />
        </div>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
 
export default About;