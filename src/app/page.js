import HeroBanner from "./homeComponents/HeroBanner";
import ShopPage from "./homeComponents/ShopPage";


export default function Home() {
  return (
    <div className="md:max-w-screen-2xl mx-auto">
        <HeroBanner/>
        <ShopPage></ShopPage>
    </div>
  );
}
