import { Navigation } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { TESTIMONIAL_DATA } from "@/constants";

export const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {TESTIMONIAL_DATA.map(({ message, name, profession }, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="flex justify-center h-full xl:pt-14">
                <div className="max-w-[60%] text-primary">
                  <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                  <p className="text-2xl font-secondary text-center mb-8">
                    {message}
                  </p>
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{name}</p>
                    <p className="text-secondary">{profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
