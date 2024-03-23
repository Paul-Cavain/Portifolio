import { FaChartArea, FaChartPie, FaCloudRain, FaDotCircle, FaEnvelopeOpenText, FaHome, FaLightbulb, FaLongArrowAltDown, FaLowVision, FaPersonBooth, FaPinterest, FaPizzaSlice, FaTruckLoading } from "react-icons/fa";
import AdminNavbar from "../components/AdminNavbar";
import image from '../../src/pas.png';


const Dashboahrd = () => {
    return (
        <section>
            <div>
                <AdminNavbar />
            </div>
            <div className="pt-28 md:pt-32 px-8 md:px-28 pb-20">
                <div className="">
                    <h3 className="text-2xl">Dashboard</h3>
                </div>

                {/* first cards */}
                <div className="flex flex-col md:flex-row gap-3 mt-4">
                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Total Visitors</h3>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <FaLowVision className="text-4xl md:text-6xl text-pink-100" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl text-white">601</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Total Messages</h3>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <FaEnvelopeOpenText className="text-4xl md:text-6xl text-pink-100" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl text-white">1201</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Total Projects</h3>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <FaLightbulb className="text-4xl md:text-6xl text-pink-100" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl text-white">172</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>

                {/* second cards */}
                <div className="flex flex-col md:flex-row gap-3 mt-4">
                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Daily Sales</h3>
                        </div>
                        <div className="flex justify-center">
                            <FaChartPie className="text-4xl md:text-9xl text-pink-100" />
                        </div>
                        <div className="flex flex-row justify-center gap-8">
                            <div className="flex flex-row justify-center gap-1">
                                <div>
                                    <FaDotCircle  className="text-xl text-pink-700 mt-0.5"/>
                                </div>
                                <div className="text-sm md:text-md">
                                   Series A
                                </div>
                            </div>

                            <div className="flex flex-row justify-center gap-1">
                                <div>
                                    <FaDotCircle  className="text-xl text-yellow-600 mt-0.5"/>
                                </div>
                                <div className="text-sm md:text-md">
                                   Series B
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Statistics</h3>
                        </div>
                        <div className="flex justify-center p-4 md:p-0">
                            <FaChartArea className="text-4xl md:text-9xl text-pink-100" />
                        </div>
                        
                    </div>
                   
                </div>

                {/* third cards */}
                <div className="flex flex-col md:flex-row gap-3 mt-4">
                    <div className="bg-violet-500 p-6 rounded-md w-full">
                        <div className="flex md:flex-row gap-16 md:gap-32">
                            <div>
                                <img src={image} width={70} height={10} alt="Portfolio image" className='rounded-full'/>
                            </div>
                            <div className="flex flex-col text-white text-sm md:text-md">
                                <h3 className="text-white">Paul Nkelego</h3>
                                <h3>Senior Developer</h3>
                                <h3>MA London</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-violet-500 p-6 rounded-md w-full">
                        <div className="flex md:flex-row gap-16 md:gap-32">
                            <div>
                                <img src={image} width={70} height={10} alt="Portfolio image" className='rounded-full'/>
                            </div>
                            <div className="flex flex-col text-white text-sm md:text-md">
                                <h3 className="text-white">Paul Nkelego</h3>
                                <h3>Senior Developer</h3>
                                <h3>MA London</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-violet-500 p-6 rounded-md w-full">
                        <div className="flex md:flex-row gap-16 md:gap-32">
                            <div>
                                <img src={image} width={70} height={10} alt="Portfolio image" className='rounded-full'/>
                            </div>
                            <div className="flex flex-col text-white text-sm md:text-md">
                                <h3 className="text-white">Paul Nkelego</h3>
                                <h3>Senior Developer</h3>
                                <h3>MA London</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>

                {/* forth cards */}
                <div className="flex flex-col md:flex-row gap-3 mt-4">

                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Total Messages</h3>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <FaEnvelopeOpenText className="text-4xl md:text-6xl text-pink-100" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl text-white">1201</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-violet-500 p-6 rounded-md w-full gap-4">
                        <div>
                            <h3 className="text-white md:text-xl">Total Appointments</h3>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <FaLightbulb className="text-4xl md:text-6xl text-pink-100" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl text-white">172</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
        </section>
    );
}
export default Dashboahrd;