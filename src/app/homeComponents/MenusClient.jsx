"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaFire } from "react-icons/fa6";
import { MdOutlineBakeryDining } from "react-icons/md";
import { PiBreadDuotone } from "react-icons/pi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const MenusClient = ({ menus }) => {
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(6);

  const filteredMenus =
    filter === "all" ? menus : menus.filter((item) => item.type === filter);

  const visibleMenus = filteredMenus.slice(0, visible);

  return (
    <div className="flex justify-center max-w-screen-2xl mx-auto items-center bg-primary text-white uppercase w-full py-20">
      <div>
        <h2 className="text-3xl font-style lg:text-5xl font-extrabold text-center">
          Our Fresh Tested Menu
        </h2>

        {/* Filter Buttons */}
        <motion.div
          layoutId="activeFilter"
          className="flex flex-wrap lg:flex-row justify-center gap-4 overflow-x-auto py-6 px-4"
        >
          <button
            onClick={() => {
              setFilter("bread");
              setVisible(6);
            }}
            className="badge badge-accent text-primary hover:badge-secondary transition-all duration-100 hover:text-accent uppercase font-semibold p-4"
          >
            Bread <PiBreadDuotone className="inline text-lg" />
          </button>

          <button
            onClick={() => {
              setFilter("baked");
              setVisible(6);
            }}
            className="badge badge-accent text-primary hover:badge-secondary transition-all duration-100 hover:text-accent uppercase font-semibold p-4"
          >
            Baked <MdOutlineBakeryDining className="inline text-lg" />
          </button>

          <button
            onClick={() => {
              setFilter("drink");
              setVisible(6);
            }}
            className="badge badge-accent text-primary hover:badge-secondary transition-all duration-100 hover:text-accent uppercase font-semibold p-4"
          >
            Drinks <RiDrinks2Line className="inline text-lg" />
          </button>

          <button
            onClick={() => {
              setFilter("dessert");
              setVisible(6);
            }}
            className="badge badge-accent text-primary hover:badge-secondary transition-all duration-100 hover:text-accent uppercase font-semibold p-4"
          >
            Desserts <LuDessert className="inline text-lg" />
          </button>

          <button
            onClick={() => {
              setFilter("all");
              setVisible(6);
            }}
            className="badge badge-accent text-primary hover:badge-secondary transition-all duration-100 hover:text-accent uppercase font-semibold p-4"
          >
            All
          </button>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4 lg:px-0">
          {visibleMenus.map((item) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col justify-end lg:w-[320px] lg:h-[500px] bg-info text-secondary p-4 mb-4 rounded-md"
            >
              <Image
                src={item.photo}
                alt={item.title}
                width={320}
                height={250}
                className="object-cover p-2 cursor-pointer hover:scale-110 transition"
              />

              <div className="bg-primary text-white h-[150px] p-4 shadow-md shadow-accent">
                <h2 className="text-accent text-xl font-bold py-2 line-clamp-2 min-h-[56px]">
                  {item.title}
                </h2>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">${item.price}</p>

                  <Link href="/">
                    <button className="btn btn-sm text-primary font-semibold uppercase hover:scale-105 transition-all duration-100 btn-accent rounded-full">
                      Add To Cart <FaCartShopping className="inline" />
                    </button>
                  </Link>
                </div>
              </div>

              {item.sell_type && (
                <motion.span
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring" }}
                  className="absolute top-3 right-3 bg-accent text-primary px-3 py-1 text-xs rounded-full font-bold "
                >
                  <FaFire className="inline text-md text-orange-600" /> Best
                  Sell
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {visible < filteredMenus.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisible((prev) => prev + 6)}
              className="btn btn-accent text-primary uppercase hover:scale-105 transition-all duration-100 rounded-full"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenusClient;
