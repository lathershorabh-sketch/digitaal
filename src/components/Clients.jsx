import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

const Clients = () => {
  return (
    <section className="pb-15 lg:pb-41 px-5 lg:px-0">
      <p className="text-white text-center text-[24px] lg:text-[40px] mb-8 lg:mb-12.5">
        What Our <span className="text-[#BFF747]">Clients</span> Say
      </p>

      <Swiper  
        modules={[Autoplay, EffectFade, A11y, Pagination, Navigation]}
        effect="fade"
        slidesPerView={1}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        className="max-w-217.25 w-full mySwiper"
      >
        <SwiperSlide className="bg-[#191B17] text-white">
          <div className="p-8 flex flex-col md:flex-row  items-center justify-between gap-6">
            <img
              className="max-w-69 rounded-xl"
              src="./src/assets/png/Image.png"
              alt="image"
            />
            <div>
              <h3 className="text-[24px] pb-1 text-center md:text-start">
                Aarav S.
              </h3>
              <p className="text-[18px] pb-3 text-center md:text-start">
                A Seamless Experience
              </p>
              <p className="max-w-100 lg:max-w-125 w-full text-[14px] lg:text-[16px] text-center md:text-start">
                Our client relationships are built on trust, transparency, and
                performance. Read how we’ve helped brands like yours scale
                digitally with confidence.Our client relationships are built on
                trust, transparency, and performance. Read how we’ve helped
                brands like yours scale digitally with confidence.Our client
                relationships are built on trust, transparency, and performance.
                Read how we’ve helped brands like yours scale digitally with
                confidence.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#191B17] text-white">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <img
              className="max-w-69 rounded-xl"
              src="./src/assets/png/Image1.png"
              alt="image1"
            />
            <div>
              <h3 className="text-[24px] pb-1 text-center md:text-start">
                Neha R.
              </h3>
              <p className="text-[18px] pb-3 text-center md:text-start">
                Exceptional Service
              </p>
              <p className="max-w-100 lg:max-w-125 w-full text-[14px] lg:text-[16px] text-center md:text-start">
                Our client relationships are built on trust, transparency, and
                performance. Read how we’ve helped brands like yours scale
                digitally with confidence.Our client relationships are built on
                trust, transparency, and performance. Read how we’ve helped
                brands like yours scale digitally with confidence.Our client
                relationships are built on trust, transparency, and performance.
                Read how we’ve helped brands like yours scale digitally with
                confidence.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#191B17] text-white">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <img
              className="max-w-69 rounded-xl"
              src="./src/assets/png/Image2.png"
              alt="image2"
            />
            <div>
              <h3 className="text-[24px] pb-1 text-center md:text-start">
                Rajesh P.
              </h3>
              <p className="text-[18px] pb-3 text-center md:text-start">
                Beyond Expectations
              </p>
              <p className="max-w-100 lg:max-w-125 w-full text-[14px] lg:text-[16px] text-center md:text-start">
                Visionary Venture went above and beyond all our expectations.
                Their professionalism, attention to detail, and unwavering
                dedication were evident from the very start. They guided us
                through every stage of our investment journey with care and
                expertise, ensuring that we felt supported and informed
                throughout the process. Thanks to their proactive approach,
                everything was seamless, making the entire experience both
                smooth and highly rewarding.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-4 justify-center mt-8">
        <button className="px-4 py-2 bg-red-900 text-white text-lg prev-btn">
          Prev
        </button>
        <button className="px-4 py-2 bg-red-900 text-white text-lg next-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default Clients;
