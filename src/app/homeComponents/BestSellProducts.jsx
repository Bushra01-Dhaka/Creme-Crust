

import dbConnect from "@/lib/dbConnect"
import BestSellSlider from "./BestSellSlider";
import { FaArrowRight } from "react-icons/fa6";

const BestSellProducts = async() => {
    const menuCollection = dbConnect("menu");
    const data = await menuCollection.find({}).toArray();
    const bestSell =  data.filter((item) => item?.sell_type === "Best Sale")
    console.log("Best Sell Products: ", bestSell)
  return (
    <div className="flex justify-center items-center bg-accent py-20 px-4 lg:px-20">
        <div>
            <div>
                <h2 className="text-3xl lg:text-5xl text-primary font-style font-extrabold text-center uppercase">Crème & Crust Favorites</h2>
                <p className="text-center uppercase text-lg lg:text-xl py-4 font-semibold">Top Picks From Our Kitchen <FaArrowRight className="text-xl text-primary inline"/></p>
            </div>

            <div className="py-10  flex justify-center items-center">
               <BestSellSlider items={bestSell}/>
            </div>


        </div>
    </div>
  )
}

export default BestSellProducts