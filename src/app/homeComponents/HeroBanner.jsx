import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const HeroBanner = () => {
  return (
    <div className="flex justify-center items-center bg-primary p-20">
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
            <p className="text-lg text-white uppercase">Best Cafe in Gandaria</p>
          </div>
        </div>

        <div>
           <div className="relative">
             <h1 className="text-6xl lg:text-8xl  relative  z-5 font-style text-center font-extrabold text-white uppercase py-20">
                   Where Crème Meets Crust
             </h1>
           </div>
            <Image className="hidden lg:block absolute top-6 rotate-45" src="/1.jpg" alt="Croissant photo" width="300" height="800" />
            <Image className="hidden  lg:block absolute right-30 top-0 " src="/3.jpg" alt="Cafe photo" width="300" height="800" />
            <Image className="absolute bottom-[10] lg:bottom-[-40] lg:right-90 rotate-180" src="/4.jpg" alt="Croissant photo" width="600" height="800" />
 
        </div>



      </div>
    </div>
  );
};

export default HeroBanner;
