import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';   

const AdminNavbar = () => {

    const [menuOpen, stMenuOpen] = useState(false)
    const handleNav = () =>{
        stMenuOpen(!menuOpen);
    }
    return ( 
        <>
            <nav className="fixed top-0 left-0 z-10 right-0 flex flex-row justify-between px-6 md:px-28 shadow-sm md:shadow-none bg-white py-6">
                <div className="text-xl">
                    <a href="#">
                        <h1 className="">CavainCoder</h1>
                    </a>
                </div>
                
                <div className="md:flex hidden text-xl">
                    <ul className="flex flex-row space-x-8">
                        {/* <a href="/Admin/Dashboard"><li>Home</li></a> */}
                        <a href="/Admin/AdminWorks"><li>Upload_Works</li></a>
                        <a href="./"><li>LogOut</li></a>
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
                            <h3 className="text-2xl">Admin</h3>
                        </div>
                        <div onClick={handleNav} className="cursor-pointer bg-violet-600 rounded-full text-white">
                            <AiOutlineClose size={30} />
                        </div>
                    </div>
                    <hr className="mt-4" />

                    {/* sidebar menu in a mobile */}
                    <div className="flex col py-2">
                        <ul>
                            <a href="/Admin/Dashboard">
                                <li
                                    onClick={() => stMenuOpen(false)}
                                    className="py-4 cursor-pointer"
                                >
                                    Home
                                </li>
                            </a>
                            <a href="/Admin/AdminWorks">
                                <li
                                    onClick={() => stMenuOpen(false)}
                                    className="py-4 cursor-pointer"
                                >
                                    Upload_Works
                                </li>
                            </a>
                            <a href="./">
                                <li
                                    onClick={() => stMenuOpen(false)}
                                    className="py-4 cursor-pointer"
                                >
                                    LogOut
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
 
export default AdminNavbar;