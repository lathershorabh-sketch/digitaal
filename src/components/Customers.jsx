import React from "react";
import Button from "./common/Button";

const Customers = () => {
  const list = [
    "100% Focused on Paid Proformance",
    "Data-Driven & ROI Obseeed",
    "Direct Access to Your Strategist",
    "Trusted by Startups, Local Business & Scaling Brands",
    "Certified Google ADS Professionals",
  ];

  return (
    <>
      <section
        className="max-w-285 w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-between px-5 xl:px-0"
        data-aos="fade-up"
      >
        <div>
          <img
            className="relative lg:max-w-125 xl:max-w-138.75 h-100 lg:h-127.5 object-cover mx-auto rounded-[22px]"
            src="./src/assets/png/metting2.jpg"
            alt=""
          />
          <p className="hidden xl:flex bottom-14 left-7.5 -rotate-3 py-3 px-8 rounded-[1000px] absolute text-black bg-[#FAFAFA] w-fit">
            ROI Focused
          </p>
          <p className="hidden xl:flex bottom-14 left-45 rotate-8 py-3 px-8 rounded-[1000px] absolute text-black bg-[#BFF747] w-fit">
            Experts Guide
          </p>
          <p className="hidden xl:flex bottom-1 left-7 py-3 px-8 rounded-[1000px] absolute  text-black bg-[#BFF747] w-fit">
            Results
          </p>
          <p className="hidden xl:flex bottom-1 left-35 py-3 px-8 rounded-[1000px] absolute text-black bg-[#FAFAFA] w-fit">
            Inc. Growth
          </p>
          <p className="hidden xl:flex bottom-1 left-70 py-3 px-8 rounded-[1000px] absolute text-black bg-[#FAFAFA] w-fit">
            Strategy
          </p>
        </div>
        <div className=" lg:max-w-110 xl:max-w-118.5  mx-auto lg:mx-0 text-white mt-10 lg:mt-0">
          <h2 className="text-[29px] font-bold mb-4">
            Connecting you to your customers
          </h2>
          <p className="max-w-103 w-full mb-3 text-center lg:text-start">
            Join our creative community to collaborate, innovate, and thrive
            together We welcome passionate individuals eager to make.
          </p>
          <p className="flex justify-center lg:justify-start">
            <Button text={"Learn more"} />
          </p>
          <p className="mb-6 text-[16px] italic">
            We don’t just run ads — we treat your growth like our own.
          </p>
          <ul className="flex flex-col gap-4.5 text-[14px] lg:text-[16px]">
            {list.map((obj, i) => (
              <li key={i}>
                <span className="text-[#65A300] mx-2 ">✓</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Customers;
