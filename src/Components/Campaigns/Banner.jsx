import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../../assets/b1.jpg";
import sliderTwo from "../../assets/b2.jpg";
import sliderThree from "../../assets/b3.jpg";
import sliderFour from "../../assets/b4.jpg";
function Banner() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="w-80 md:w-[680px] lg:w-[980px] xl:w-[1200px] mx-auto md:h-[500px] h-64 rounded-xl"
    >
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px]  "
          src={sliderOne}
          alt=""
          
        />
        <div className="absolute bottom-10">
          <h1 className="text-sm md:text-2xl font-semibold text-blue-500 bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">A community-driven platform to bring ideas to life.</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] "
          src={sliderTwo}
          alt=""
          
        />
        <div className="absolute bottom-10">
          <h1 className="text-sm md:text-2xl font-semibold text-blue-500 bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Where small contributions grow big dreams.</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] "
          src={sliderThree}
          alt=""
          
        />
        <div className="absolute bottom-10">
          <h1 className="text-sm md:text-2xl font-semibold text-blue-500 bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Empowering projects with the power of community</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] "
          src={sliderFour}
          alt=""
          
        />
        <div className="absolute bottom-10">
          <h1 className="text-sm md:text-2xl font-semibold text-blue-500 bg-white/70 px-3 py-2 animate__animated animate__fadeInLeft">Weaving support for innovative ideas</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;

