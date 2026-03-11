import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const MenusPage = async () => {
  const menuCollection = dbConnect("menu");
  const data = await menuCollection.find({}).toArray();
  console.log("All Menus: ", data);
  return (
    <div className="flex justify-center mx-w-screen-2xl mx-auto items-center bg-primary text-white uppercase w-full py-10">
      <div>
        <div>
          <h2 className="text-3xl font-style lg:text-5xl font-extrabold text-center">
            Our Fresh Tested Menoe
          </h2>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4 lg:px-0">
  {data.map((item) => (
    <div
      key={item._id.toString()}
      className="relative flex flex-col justify-end lg:w-[320px] lg:h-[500px] bg-info text-secondary p-4  mb-4 rounded-md"
    >
      <Image
        src={item?.photo}
        alt={item.title}
        width={320}
        height={250}
        className="object-cover p-2 cursor-pointer hover:scale-130 transition-transform duration-300"
      />

      <div className="bg-primary text-white h-[150px] p-4 shadow-md shadow-accent">
        <h2 className="text-accent font-style text-xl font-bold py-2 line-clamp-2 min-h-[56px]">
          {item.title}
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">${item.price}</p>

          <Link href="/">
            <button className="btn btn-sm btn-accent border-0 shadow-xl text-primary rounded-full uppercase transition-all duration-75 hover:scale-110">
              Order Now <MdArrowOutward className="text-2xl inline" />
            </button>
          </Link>
        </div>
      </div>

      {item.sell_type && (
        <span className="absolute top-3 right-3 bg-accent text-primary font-bold px-3 py-1 text-xs rounded-full">
          🔥 Best Sell
        </span>
      )}
    </div>
  ))}
</div>





      </div>
    </div>
  );
};

export default MenusPage;
