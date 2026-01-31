import React from "react";

const Branding = () => {
  return (
    <>
      <section className=" text-white pb-10 lg:pb-35">
        <ul className="max-w-210.75 w-fit lg:w-full   flex flex-col md:flex-row justify-between text-[20px] mx-auto pb-10 lg:pb-15  gap-5 md:gap-0">
          <li className="border-[#FFFFFF33] border py-[11.5px] px-8 rounded-2xl text-center">
            All
          </li>
          <li className="border-[#FFFFFF33] border py-[11.5px] px-8 rounded-2xl">
            Branding & Identity
          </li>
          <li className="border-[#FFFFFF33] border py-[11.5px] px-8 rounded-2xl text-black bg-[#BFF747]">
            Digital Marketing
          </li>
          <li className="border-[#FFFFFF33] border py-[11.5px] px-8 rounded-2xl">
            SEO & Analytics
          </li>
        </ul>
        <div className="max-w-285 w-full flex flex-wrap xl:flex-row justify-center xl:justify-between mx-auto gap-10 xl:gap-0 px-5 xl:px-0">
          <div className="relative mx-auto lg:mx-0">
            <div className="max-w-91 w-full relative rounded-[22px] overflow-hidden">
              <div className="w-full h-full absolute to-0% left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_91.02%)]"></div>
              <img
                className=" max-w-91 w-full rounded-[22px]"
                src="./src/assets/png/metting3.png"
                alt="metting3"
              />
            </div>
            <p className="absolute bottom-2 left-20 text-white w-fit">
              Dynamic Digital Campaign
            </p>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div className="w-full h-full absolute to-0% left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_91.02%)]"></div>
            <img
              className="max-w-91 w-full rounded-[22px] "
              src="./src/assets/png/women.png"
              alt="metting3"
            />
            <p className="absolute bottom-2 left-20 text-white w-fit">
              Impactful Content Creation
            </p>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div className="w-full h-full absolute to-0% left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_91.02%)]"></div>
            <img
              className=" max-w-91 w-full rounded-[22px]"
              src="./src/assets/png/happy.png"
              alt="metting3"
            />
            <p className="absolute bottom-2 left-20 text-white w-fit">
              Interactive Website Redesign
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
