import React from "react";
import boutme from "../assets/boutme.png";

const AboutMe = () => {
  return (
    <section className="bg-white  flex justify-center items-center">
      <div className="container mx auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 justify-center">
            <div className="img">
              <img src={boutme} alt="boutme" width={600} />
            </div>
          </div>
          <div className="md:w-1/2 justify center">
            <h1 className="text-3xl md:text-5xl text-grey-800 font-bold ">
              About<span>Me</span>
            </h1>
            <p className="mt-10 text-lg">
              I am an informatics student at the University of Jember. I have an
              interest in frontend development. Therefore, I joined the "Kampus
              Merdeka" program in the field of Front-End Engineer Career With
              ReactJS at Alterra Academy. This is the first website I created
              using HTML, CSS, and JS. In addition, I also pursue the field of
              graphic design and have studied UI/UX design. During this journey,
              these design experiences sparked my enthusiasm to continue
              learning and developing my front-end skills. Thanks for getting to
              know me!
            </p>
          </div>
        </div>
      </div>
    </section>

    // <section className=''>
    //     <div className="container mx-auto flex flex-col items-center">
    //         <h1 className="text-black text-3xl md:text-4xl font-bold ">About<span>Me</span></h1>
    //         <p className="mt-4 text-gray-700 text-lg text-center">
    //       I am an informatics student at the University of Jember. I have an
    //       interest in frontend development. Therefore, I joined the "Kampus
    //       Merdeka" program in the field of Front-End Engineer Career With ReactJS
    //       at Alterra Academy. This is the first website I created using HTML,
    //       CSS, and JS. In addition, I also pursue the field of graphic design
    //       and have studied UI/UX design. During this journey, these design
    //       experiences sparked my enthusiasm to continue learning and developing
    //       my front-end skills. Thanks for getting to know me!
    //     </p>

    //     </div>
    // </section>
  );
};

export default AboutMe;
