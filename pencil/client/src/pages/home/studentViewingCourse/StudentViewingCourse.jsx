import React, { useRef } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react"
import CourseCard from "../../../components/courseCard/CourseCard"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const StudentViewingCourse = () => {
  const swiperRef = useRef()
  return (
    <div className=" flex w-full gap-10 items-center justify-center py-4 px-10 bg-brandeise_blue h-[400px]">
      <div className="flex flex-col items-start gap-4  ">
        <h1 className="font-Ubuntu text-2xl font-bold text-white">
          Student <br /> Viewing Course
        </h1>
        <div className="flex gap-4 justify-center relative">
          <button
            className="h-10 w-10 rounded-full bg-white text-chinese_black text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoChevronBack />
          </button>
          <button
            className="h-10 w-10 rounded-full bg-white text-chinese_black text-xl flex items-center justify-center"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden">
        {/* <div className="py-8 px-16"> */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          // centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   1024: {
          //     slidesPerView: 2,
          //     spaceBetween: 30,
          //   },
          //   1280: {
          //     slidesPerView: 2,
          //     spaceBetween: 30,
          //   },
          //   1536: {
          //     slidesPerView: 2,
          //     spaceBetween: 30,
          //   },
          // }}
        >
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard showDetails={false} />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  )
}

export default StudentViewingCourse
