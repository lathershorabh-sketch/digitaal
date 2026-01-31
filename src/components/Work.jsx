import React from "react";

const Work = () => {
  return (
    <>
      <section className="text-white text-center  font-bold pb-10 lg:pb-28">
        <p className="text-[24px] mb-2 lg:mb-3.5">LET'S COLLABORATE</p>
        <div className="relative">
          <h2 className=" relative max-w-285 text-[24px] sm:text-[36px] md:text-[50px] lg:text-[130px] xl:text-[194px] mx-auto">
            LET’S WORK TOGETHER
          </h2>
          <div className="hidden 2xl:flex flex-col absolute leading-[120%] top-58 left-172 max-w-35.25 h-35.25 px-7 py-5 mx-auto rounded-full  bg-[#BFF747]">
            <svg
              className="mx-auto"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0332 22.8708L18.6673 36.2366L16.4711 34.0405L29.837 20.6746L18.0568 20.6746L18.0568 17.5692H35.1386V34.651L32.0332 34.651L32.0332 22.8708Z"
                fill="black"
              />
            </svg>
            <p className="text-black max-w-22 font-bold text-[14px]">
              Get In Touch
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
