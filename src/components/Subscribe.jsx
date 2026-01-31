import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="pb-10 lg:pb-39 px-5 xl:px-0">
        <div className="relative max-w-285 overflow-hidden w-full mx-auto rounded-[22px] pb-7 lg:pb-19 bg-[#BFF747] px-3">
          <h2 className="pt-5 lg:pt-19 text-[22px] md:text-[32px] lg:text-[40px] text-center font-bold">
            Subscribe to Newsletter
          </h2>
          <p className="pt-0.5 lg:pt-4 pb-6 lg:pb-8.5 text-center max-w-140 lg:max-w-162 mx-auto text-[14px] lg:text-[16px]">
            Sign up for our newsletter to stay up-to-date on the latest
            promotions, discounts, and new features releases.
          </p>
          <div className="bg-white text-[14px] lg:text-[16px] flex items-center justify-between mx-auto max-w-65 sm:max-w-70 md:max-w-90 lg:max-w-102 rounded-xl">
            <input
              type="text"
              className="py-3.25 w-full outline-0 pl-3.5"
              placeholder="Enter your email"
            />
            <p className="bg-[#BFF747] py-3 px-6 rounded-xl m-1">Subscribe</p>
          </div>
          <img
            className="max-w-60 absolute hidden lg:flex bottom-0 left-0"
            src="./src/assets/png/rightcube.png"
            alt="rightcube"
          />
          <img
            className="max-w-60 hidden lg:flex absolute top-0 right-0"
            src="./src/assets/png/leftcube.png"
            alt="leftcube"
          />
        </div>
      </section>
    </>
  );
};

export default Subscribe;
