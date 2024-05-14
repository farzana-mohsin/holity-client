// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg1 from "../../../public/images/istockphoto-1145183189-612x612.jpg";
import bgImg2 from "../../../public/images/Sloww-Voluntary-Simplicity-Quiet-Revolution-scaled.jpg";
import bgImg3 from "../../../public/images/depositphotos_106174508-stock-photo-volunteer-teacher-reading-to-class.jpg";
import bgImg4 from "../../../public/images/The-Career-Benefits-of-Volunteering-During-Your-Job-Search-2.jpg";

export default function Carousel() {
  return (
    <div className='w-full  pt-1 pb-10 mb-20 rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text='We are taking small steps to make Earth a better planet'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text='Try our programs and help people for their needs'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text='Give a helping hand to those who need it'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg4}
            text='We try to help people with volunteering'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
