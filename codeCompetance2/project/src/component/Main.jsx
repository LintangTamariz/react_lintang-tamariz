import React, {useEffect} from "react";
import photoo from "../assets/photoo.png";
import Typed from "typed.js"

const Main = () => {
  useEffect(() => {
    const change = {
      strings: ["Informatics Student", "Graphics Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".text", change);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-900 h-screen flex justify-center items-center">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 justify-center">
          <h3 className="text-3xl md:text-5xl text-white">
            Hello, It's me
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold text-white mt-3">
            Lintang Tamariz
          </h1>
          <h3 className="text-2xl md:text-5xl text-white mt-3">
            And I'm a <span className="text text-blue-700"></span>
          </h3>
          <p className="mt-4 text-white text-3xl">
            I am someone who is new to the front-end field. This portfolio
            website is my first project.
            <br /> Besides that, I also have a hobby in graphic design.
          </p>
          
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              More About Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="img">
            <img className="" width={400}  src={photoo} alt="Try" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
   
};

export default Main;
