import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, stMenuOpen] = useState(false)
    const handleNav = () =>{
        stMenuOpen(!menuOpen);
    }

    return ( 
        <>
            <nav className="fixed top-0 left-0 z-10 right-0 flex flex-row justify-between px-4 md:px-28 bg-white py-6 shadow-md md:shadow-sm">
                <div className="text-xl md:text-2xl">
                    <a href="/">
                        <h1 className="">PauloNkelego</h1>
                    </a>
                </div>
                
                <div className="text-xl md:flex hidden">
                    <ul className="flex flex-row space-x-8">
                        <a href="/About">
                            <li className='transition ease-out duration-500 hover:bg-black hover:text-white p-2.5 rounded'>About Me</li>
                        </a>
                        <a href="/Works">
                            <li className='transition ease-out duration-500 hover:bg-black hover:text-white p-2.5 rounded'>Works</li>
                        </a>
                        <a href="/Blogs">
                            <li className='transition ease-out duration-500 hover:bg-black hover:text-white p-2.5 rounded'>Testimonies</li>
                        </a>
                        <a href="/Contacts">
                            <li className='transition ease-out duration-500 hover:bg-black hover:text-white p-2.5 rounded'>Contacts</li>
                        </a>
                    </ul>
                </div>

                <div onClick={handleNav} className="sm:hidden cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>

                {/* how it will loooks in a mobile  */}
                <div className={ menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>

                    <div className="flex flex-row space-x-8 w-full justify-between">
                        <div>
                            <h3 className="text-2xl">CavainCoder</h3>
                        </div>
                        <div onClick={handleNav} className="cursor-pointer bg-violet-600 rounded-full text-white">
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
                            <a href="#">
                                <li
                                    onClick={() => stMenuOpen(false)}
                                    className="py-4 cursor-pointer"
                                >
                                    Blogs
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
            </nav>
        </>
    );
}
 
export default Navbar;