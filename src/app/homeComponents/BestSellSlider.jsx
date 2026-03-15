"use client";

import Image from "next/image";
import { FaCartShopping, FaFire } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const BestSellSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper max-w-screen  lg:max-w-[1000px] mx-auto "
    >
      {items.map((item) => (
        <SwiperSlide key={item._id.toString()}>
          <div className="bg-primary rounded-lg m-4 lg:m-0 lg:h-[350px] flex flex-col justify-end  p-4 shadow-lg uppercase">
            <Image
              src={item?.photo}
              alt={item.title}
              width={300}
              height={300}
              className="rounded-md object-cover mx-auto lg:h-[200px] p-4 transition-all hover:scale-105 duration-150 cursor-pointer"
            />

            <div className="min-h-[150px] p-4 bg-secondary bg-opacity-40 flex flex-col justify-between rounded-md shadow-md shadow-accent">
                <h3 className="text-accent font-bold text-lg ">
              {item.title}
            </h3>

            <div className="flex justify-between items-center">
              <p className="font-semibold  text-xl text-white">${item.price}</p>

              <button className="btn btn-sm btn-accent  text-primary">
                <FaCartShopping className="text-xl transition-all hover:scale-130 duration-150" />
              </button>
            </div>
            </div>

               {item.sell_type && (
                <motion.span
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring" }}
                  className="absolute top-6 right-6 lg:top-3 lg:right-3 bg-accent text-primary px-3 py-1 text-xs rounded-full font-bold "
                >
                  <FaFire className="inline text-md text-orange-600" /> Best
                  Sell
                </motion.span>
              )}

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestSellSlider;