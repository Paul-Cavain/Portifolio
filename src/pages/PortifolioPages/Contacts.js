import Footer from "./../../components/Common/Footer";
import Navbar from "./../../components/Common/Navbar";
import { Link } from "react-router-dom";
import {
  BsCompass,
  BsEnvelope,
  BsLinkedin,
  BsGithub,
  BsPhone,
  BsStopwatch,
  BsTwitter,
} from "react-icons/bs";

const Contacts = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-full pt-32 px-4 md:px-28 pb-8 md:pb-20">
        <h2 className="text-center text-2xl md:text-3xl">Contacts</h2>

        <div className="flex flex-col md:flex-row justify-around py-10">
          {/* contact informations */}
          <div className="bg-black text-white px-8 md:px-20 py-10 w-full rounded-md md:rounded-l-md">
            <h2 className="text-xl md:text-2xl">Contact Information</h2>
            <p>Fill up the form to get a quicky feedback</p>

            <div className="mt-16 text-white">
              <div className="flex flex-row space-x-8">
                <div>
                  <BsPhone className="text-2xl" />
                </div>
                <div>
                  <h2>+255717416853</h2>
                </div>
              </div>
              <div className="flex flex-row space-x-10 mt-4">
                <div>
                  <BsEnvelope className="text-2xl" />
                </div>
                <div>
                  <h2>paulcavain02@gmail.com</h2>
                </div>
              </div>
              <div className="flex flex-row space-x-10 mt-4">
                <div>
                  <BsCompass className="text-2xl" />
                </div>
                <div>
                  <h2>Dodoma-Tanzania</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row text-xl mt-10 md:mt-20 space-x-6">
              <Link
                to="https://github.com/Paul-Cavain"
                className="hover:ring-2 hover:ring-white rounded-full p-3"
              >
                <BsGithub />
              </Link>
              <Link
                to=""
                className="hover:ring-2 hover:ring-white rounded-full p-3"
              >
                <BsLinkedin />
              </Link>
              <Link
                to="https://twitter.com/Cavain_tz"
                className="hover:ring-2 hover:ring-white rounded-full p-3"
              >
                <BsTwitter />
              </Link>
              <Link
                to="https://twitter.com/Cavain_tz"
                className="hover:ring-2 hover:ring-white rounded-full p-3"
              >
                <BsStopwatch />
              </Link>
            </div>
          </div>

          {/* form to fill */}
          <div className="b-red-500 w-full px-10 py-10 rounded-r-md">
            <form className="space-y-3">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="fist_name"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="last_name"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="Phone"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <textarea
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-8 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
              <div className="pt-6 flex justify-end">
                <input
                  type="button"
                  name="submit"
                  value="Send Message"
                  className="w-32 h-12 rounded-md text-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
