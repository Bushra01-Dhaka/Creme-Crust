// import MenusPage from "../homeComponents/MenusPage";

// const page = () => {
//   return (
//     <div className="py-20 bg-primary">
//       <MenusPage />
//     </div>
//   );
// };

// export default page;



import dbConnect from "@/lib/dbConnect";
import MenusClient from "../homeComponents/MenusClient";

const MenusPage = async () => {
  const menuCollection = dbConnect("menu");
  const data = await menuCollection.find({}).toArray();

  const menus = data.map(item => ({
    ...item,
    _id: item._id.toString()
  }));

  return <MenusClient menus={menus} />;
};

export default MenusPage;
