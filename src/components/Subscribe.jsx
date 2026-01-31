import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="pb-39">
        <div className="relative max-w-285 overflow-hidden w-full mx-auto rounded-[22px]  pb-19 bg-[#BFF747]">
          <h2 className="pt-19 text-[40px] text-center font-bold">
            Subscribe to Newsletter
          </h2>
          <p className="pt-4 pb-8.5 text-center max-w-162 mx-auto">
            Sign up for our newsletter to stay up-to-date on the latest
            promotions, discounts, and new features releases.
          </p>
          <div className="bg-white flex items-center justify-between mx-auto max-w-102 rounded-xl">
            <input
              type="text"
              className="py-3.25 w-full outline-0 pl-3.5"
              placeholder="Enter your email"
            />
            <p className="bg-[#BFF747] py-3 px-6 rounded-xl m-1">Subscribe</p>
          </div>
          <img
            className="max-w-60 absolute bottom-0 left-0"
            src="./src/assets/png/rightcube.png"
            alt="rightcube"
          />
          <img
            className="max-w-60 absolute top-0 right-0"
            src="./src/assets/png/leftcube.png"
            alt="leftcube"
          />
        </div>
      </section>
    </>
  );
};

export default Subscribe;
