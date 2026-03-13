"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="flex justify-center items-center bg-primary p-20 overflow-hidden">
      <div>
        <div className="text-center flex flex-col relative z-5">
          <div className="flex justify-center">
            <div className="avatar-group -space-x-6 mx-auto">
              <div className="avatar">
                <div className="w-8 mx-auto">
                  <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8 mx-auto">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8 mx-auto">
                  <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8 mx-auto">
                  <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <FaStar className="text-yellow-400 text-lg" />
            <FaStar className="text-yellow-400 text-lg" />
            <FaStar className="text-yellow-400 text-lg" />
            <FaStar className="text-yellow-400 text-lg" />
            <FaStarHalfAlt className="text-yellow-400 text-lg" />
            <p className="text-md text-accent">4.8/5.0</p>
          </div>
          <div>
            <p className="text-lg text-white uppercase">
              Best Cafe in Gandaria
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl relative z-5 font-style text-center font-extrabold text-white uppercase py-20"
            >
              Where Crème Meets Crust
            </motion.h1>
          </div>
          <Image
            className="hidden lg:block absolute top-6 rotate-45"
            src="/1.jpg"
            alt="Croissant photo"
            width="300"
            height="800"
          />
          <Image
            className="hidden  lg:block absolute right-30 top-0 "
            src="/3.jpg"
            alt="Cafe photo"
            width="300"
            height="800"
          />
          {/* <Image
            className="absolute bottom-[10] lg:bottom-[-40] lg:right-90 rotate-180"
            src="/4.jpg"
            alt="Croissant photo"
            width="600"
            height="800"
          /> */}
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            className="absolute bottom-[10] lg:bottom-[-40] lg:right-90 rotate-180"
          >
            <Image
              src="/4.jpg"
              alt="Croissant photo"
              width={600}
              height={800}
            />
          </motion.div>

          <p className="pt-10 lg:pt-20 text-justify lg:text-center uppercase text-white max-w-[400px] mx-auto">
            <SiComma className="inline text-2xl text-white rotate-180 relative bottom-6 left-4" />{" "}
            <SiComma className="inline text-2xl text-white rotate-180 relative bottom-6" />{" "}
            Enjoy freshly baked bakery delights, from buttery croissants and
            delicate pastries to perfectly brewed coffee. At Crème & Crust,
            every bite is crafted to bring comfort and joy — the perfect place
            to spend quality time with friends, family, and your loved ones.
          </p>

          <div className="py-6 flex justify-center">
            <Link href="/">
              <button className="btn btn-accent border-0 shadow-xl  text-primary rounded-full uppercase transition-all duration-75 hover:scale-120">
                Reserve Now <MdArrowOutward className="text-2xl inline" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
