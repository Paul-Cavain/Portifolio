import { FaLightbulb, FaGifts, FaHeadphones } from "react-icons/fa";
import resume from "../../resume.pdf";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-20 pt-8 md:pt-20 px-6 md:px-0">
      {/* Profile Image */}
      <div className="flex justify-center md:w-1/3">
        <img
          src="/assets/images/profile.jpg"
          alt="Paulo Nkelego"
          className="ring-2 ring-black rounded-full w-80 h-80 object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="flex flex-col md:w-2/3 space-y-8 mt-10 md:mt-0">
        {/* Experience, Projects, and Support Cards */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-black flex-1 px-8 py-6 rounded-md text-center">
            <FaLightbulb className="text-4xl text-white mx-auto" />
            <div className="mt-2 text-white">
              <p className="text-xl font-semibold">Experience</p>
              <p>4+ Years</p>
            </div>
          </div>
          <div className="bg-black flex-1 px-8 py-6 rounded-md text-center">
            <FaGifts className="text-4xl text-white mx-auto" />
            <div className="mt-2 text-white">
              <p className="text-xl font-semibold">Complete</p>
              <p>4+</p>
            </div>
          </div>
          <div className="bg-black flex-1 px-8 py-6 rounded-md text-center">
            <FaHeadphones className="text-4xl text-white mx-auto" />
            <div className="mt-2 text-white">
              <p className="text-xl font-semibold">Support</p>
              <p>9+</p>
            </div>
          </div>
        </div>

        {/* Description and Download CV */}
        <div className="text-center md:text-left md:pt-10">
          <p className="text-gray-700">
            A passionate Front-End developer, I create web pages with
            user-friendly UI/UX designs and develop mobile applications for both
            Android and iOS.
          </p>
          <div className="mt-6 text-end">
            <a href={resume} download={"Paulo Nkelego Resume"}>
              <button
                type="button"
                name="download_cv"
                className="text-white bg-black h-12 w-40 rounded-md transition duration-300 hover:bg-white hover:text-black hover:border-2 hover:border-black"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
