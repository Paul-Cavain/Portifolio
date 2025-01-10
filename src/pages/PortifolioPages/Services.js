import { FaFigma, FaReact, FaMobile } from "react-icons/fa";

const Services = () => {
  return (
    <div className="pt-20 md:pt-40 px-4 md:px-20 pb-12">
      <div className="flex justify-between text-center">
        <h3 className="text-xl md:text-2xl font-semibold">What I Offer</h3>
        <hr className="border-2 border-black text-center" />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 md:mt-10">
        <div className="relative bg-black py-16 mt-4 md:mt-0 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
          <div className="front-content">
            <div className="flex justify-center">
              <FaFigma className="text-3xl" />
            </div>
            <div className="text-center mt-4 text-xl">
              <h3>System Design</h3>
            </div>
          </div>
          <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
            {/* New content to be displayed on hover */}
            <h3 className="text-xl">Special Design Offer</h3>
            <p className="mt-4">
              Get 50% off on website design projects this month!
            </p>
          </div>
        </div>

        <div className="relative bg-black py-16 mt-16 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
          <div className="front-content">
            <div className="flex justify-center">
              <FaReact className="text-3xl" />
            </div>
            <div className="text-center mt-4 text-xl">
              <h3>Web Development</h3>
            </div>
          </div>
          <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
            {/* New content to be displayed on hover */}
            <h3 className="text-xl">Awesome UI/UX</h3>
            <p className="mt-4">
              Get beautiful Website and Mobile Interfaces and easy interactive
              to users
            </p>
          </div>
        </div>

        <div className="relative bg-black py-16 mt-16 w-full rounded-md text-white transform transition-transform hover:translate-x-1 card">
          <div className="front-content">
            <div className="flex justify-center">
              <FaMobile className="text-2xl" />
            </div>
            <div className="text-center mt-4 text-xl">
              <h3>Mobile App Development</h3>
            </div>
          </div>
          <div className="hover-content absolute top-0 left-0 w-full h-full bg-opacity-80 bg-black text-white p-4 opacity-0 transition-opacity duration-300">
            {/* New content to be displayed on hover */}
            <h3 className="text-xl">A Lightweight mobile application</h3>
            <p className="mt-4">
              Get over both devices an Advanced mobile application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
