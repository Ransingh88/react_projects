import React, { useRef } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import Hero from "./heroSection/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import TrustedBrands from "../../components/ourTrustedBrands/TrustedBrands";

const Home = () => {
  const swiperRef = useRef();
  return (
    <div>
      <Hero />
      <div className=" flex flex-col items-center py-4 px-10">
        <h1 className="font-Ubuntu text-2xl font-bold mt-8">
          Recomendend Course
        </h1>
        <div className="flex w-full gap-2 justify-center relative">
          <button
            className="h-10 mt-36 w-10 rounded-full bg-raisin_black text-white text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoChevronBack />
          </button>
          <div className="w-11/12 h-[500px] overflow-hidden">
            <div className="py-8 px-16">
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1536: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <button
            className="h-10 w-10 mt-36 rounded-full bg-raisin_black text-white text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
      <div className="bg-ghost_white2 h-[500px]">rr</div>
      <TrustedBrands/>
    </div>
  );
};

export default Home;
