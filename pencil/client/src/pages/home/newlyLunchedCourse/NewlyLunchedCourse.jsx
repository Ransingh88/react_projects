import React, { useRef } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react"
import CourseCardSm from "../../../components/courseCard/CourseCardSm"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const NewlyLunchedCourse = () => {
  const swiperRef = useRef()
  return (
    <div className=" flex flex-col items-center py-4 px-10 bg-ghost_white2 h-[500px]">
      <div className="flex w-10/12 justify-between items-center mt-10">
        <h1 className="font-Ubuntu text-2xl font-bold">Newly Lunched Course</h1>
        <div className="flex gap-4 justify-center relative">
          <button
            className="h-10 w-10 rounded-full bg-raisin_black text-white text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoChevronBack />
          </button>
          <button
            className="h-10 w-10 rounded-full bg-raisin_black text-white text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
      <div className="w-10/12 h-[500px] overflow-hidden">
        <div className="py-8 px-16">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
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
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCardSm />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default NewlyLunchedCourse
