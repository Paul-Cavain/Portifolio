import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Works = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [users, setUsers] = useState([]);

  const toggleAccordion = (index) => {
    setActiveCard(prevActiveCard => (prevActiveCard === index ? null : index));
  };

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

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost:80/myPortifolioApi/books/save').then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  return (
    <div className="overflow-x-hidden pb-20">
      <div>
        <Navbar />
      </div>
      <div className="pt-32 px-4 md:mx-28">
        <h2 className="text-xl md:text-2xl text-center">Works & Project</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-3 mt-10 pb-20 md:pb-0">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={user.id}>
                  <ul className='bg-gradient-to-r from-pink-400 to-violet-700 w-full shadow-lg rounded-md py-6 px-4 md:px-8'>
                    <li>
                      <h2 className="font-medium pb-4 text-white">{user.project_title}</h2>
                    </li>
                    <li>
                      <img src={user.project_image} width={200} height={150} alt="Portfolio image" className="rounded-md" />
                    </li>
                    <li>
                      <div className="">
                        <div className="flex flex-row justify-center md:justify-between mt-6">
                          <div>
                            {activeCard === index && (
                              <div className="mt-4 pb-4 w-full">
                                <p className="text-white break-all">
                                  {user.project_contents}
                                </p>
                              </div>
                            )}
                            <div className='flex flex-row space-x-10 md:space-x-28'>
                              <div>
                                <button
                                  className="px-4 py-2 w-32 text-sm text-slate-600 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                                  onClick={() => toggleAccordion(index)}
                                >
                                  {activeCard === index ? 'Hide Details' : 'Show Details'}
                                </button>
                              </div>
                              <div className="">
                                <Link key={user.id} to={`${user.project_link}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                  <button type='button' name="link_button" className="px-4 py-2 w-32 text-sm text-white md:text-slate-500 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> View </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        <div ref={arrowRef} className="fixed bottom-16 right-20 cursor-pointer text-xl text-white bg-violet-600 rounded-full p-2 shadow" onClick={handleClick}>
                          <FaArrowUp />
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
            ))
          ) : (
            <ul>
              <li colSpan="6" className="py-2 px-4 text-center">No such book found.</li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
