import {
  FaCss3,
  FaLink,
  FaBootstrap,
  FaGit,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAndroid,
  FaFigma,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start pt-32 md:pt-48 px-20">
      <div className="flex justify-between text-start md:text-center">
        <h3 className=" text-2xl md:text-2xl font-semibold">Skills & Tools</h3>
        <hr className="border-2 border-black text-center hidden" />
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-0 md:space-x-12 justify-start pt-8">
        <div className="flex flex-col">
          <div className="mt-4">
            <a href="https://www.w3schools.com/html/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaHtml5 className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  Html5
                </span>
              </div>
            </a>
          </div>

          <div className="mt-4">
            <a href="https://www.w3schools.com/css/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaCss3 className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  CSS
                </span>
              </div>
            </a>
          </div>

          <div className="mt-4">
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaBootstrap className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  Bootstrap
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-4">
            <a href="https://tailwindcss.com/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaCss3Alt className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  TailwindCss
                </span>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a href="https://www.w3schools.com/git/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaGit className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  Git
                </span>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a href="https://www.javascript.com/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaJs className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  JavaScript
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <div className="flex flex-col">
            <div className="mt-4">
              <a href="https://react.dev/">
                <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                  <FaReact className="text-3xl mt-1" />
                  <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                    React
                  </span>
                </div>
              </a>
            </div>
            <div className="mt-4">
              <a href="https://nodejs.org/en">
                <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                  <FaNodeJs className="text-3xl mt-1" />
                  <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                    NodeJs
                  </span>
                </div>
              </a>
            </div>
            <div className="mt-4">
              <a href="https://flutter.dev/">
                <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                  <FaAndroid className="text-3xl mt-1" />
                  <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                    Flutter
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-4">
            <a href="https://www.figma.com/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaFigma className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  Figma
                </span>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a href="https://flutter.dev/">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaAndroid className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  Flutter
                </span>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a href="https://www.api.org/ ">
              <div className="bg-white flex flex-row space-x-4 w-64 md:w-40 px-1 py-1 h-12 rounded-lg border-2 border-black">
                <FaLink className="text-3xl mt-1" />
                <span className="bg-gray-400 hover:bg-black hover:text-white w-56 md:w-32 px-2 py-1 rounded-r-md">
                  API's
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
