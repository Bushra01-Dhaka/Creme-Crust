import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ShopPage = () => {
  return (
    <div className="w-full bg-primary text-white">

      {/* Hero Section */}
      <div className="relative w-full h-[40vh]">
        <Image
          src="/2.jpg"
          alt="Cafe"
          fill
          className="object-cover"
        />

        {/* Bottom Left Overlay */}
        <div className="absolute bottom-6 right-6 bg-primary shadow-xl shadow-accent backdrop-blur-sm px-6 py-4 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold">
            500+ Happy Customers
          </h3>
          <p className="text-sm md:text-base text-accent">
            Best Cafe in Gandaria
          </p>
        </div>
      </div>

      {/* Shop Info Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Shop Image */}
        <div className="w-full">
          <Image
            src="/3.jpg"
            alt="Cafe Interior"
            width={600}
            height={300}
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* Shop Details */}
        <div className="space-y-6 uppercase">

          <h2 className="text-3xl lg:text-5xl font-extrabold">
            Visit Crème & Crust
          </h2>

          <div className="space-y-3 text-gray-200">

            <p>
              📍 <span className="font-medium">Address:</span> 17 Main St, Balerno, City of Edinburgh, UK
            </p>

            <p>
              📞 <span className="font-medium">Phone:</span> +0131 451 5588
            </p>

            <p>
              🕒 <span className="font-medium">Hours:</span> 9:00 AM – 10:00 PM
            </p>

            <p>
              Outdoor Dining • Reservation • Pickup & Delivery
            </p>

            <p className="py-4">At Crème & Crust, every bite is crafted to bring comfort and joy — the perfect place to spend quality time with friends, family, and your loved ones.  </p>

          </div>

          <Link href="/">
            <button className="btn btn-accent border-0 shadow-xl text-primary rounded-full uppercase transition-all duration-75 hover:scale-110">
              Order Now <MdArrowOutward className="text-2xl inline" />
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ShopPage;