import dbConnect from "@/lib/dbConnect";
import HeroBanner from "./homeComponents/HeroBanner";
import MenusClient from "./homeComponents/MenusClient";
import ShopPage from "./homeComponents/ShopPage";
import BestSellProducts from "./homeComponents/BestSellProducts";




export default async function Home() {
  const menuCollection = dbConnect("menu");
    const data = await menuCollection.find({}).toArray();
  
    const menus = data.map(item => ({
      ...item,
      _id: item._id.toString()
    }));
  return (
    <div className="md:max-w-screen-2xl mx-auto">
        <HeroBanner/>
         <BestSellProducts/>
        <MenusClient menus={menus}></MenusClient>
         <ShopPage></ShopPage>
        
    </div>
  );
}
