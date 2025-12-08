"use client"

import Items from "./Items";
import Items1 from "./Items1";
import Items2 from "./Items2";
import Items3 from "./Items3";
import Items4 from "./Items4";
import Footer from "./Footer";
import AdCard from "./sub-components/AdCard";
import Cart from "./Cart";
import { useCounterStore } from "@/app/store";


const MainBody = () => {
  // const [cartPageState, setCartPageState]=useState(true);
  const cartPageState=useCounterStore((state)=>state.cartPageState);
  const setCartPageState=useCounterStore((store)=>store.setCartPageState);
  return (
    
    <div className="w-full min-h-screen flex justify-center bg-gray-50">
      {/* cart page */}
      {cartPageState?<div className="h-screen lg:w-1/3 w-full bg-red-500 absolute right-0 z-50"><Cart setCartPageState={setCartPageState}/></div>:null}
      
      {/* Main Container: Limits width and centers itself */}
      <div className="w-full max-w-7xl px-4 flex flex-col items-center gap-2 bg-amber-200 mt-[120px] pb-10">
        {/* Top Banner */}
        <div className="flex bg-amber-300 h-[200px] w-full rounded-2xl shadow-md justify-center items-center">
          <AdCard/>
        </div>

        {/* small banners */}
        <div className="shortAD flex flex-row w-full mt-8 gap-4 flex-wrap justify-center">
          <div className="bg-green-300 h-[200px] rounded-xl flex items-center justify-center w-[32%] min-w-[150px]"><AdCard/></div>
          <div className="bg-green-400 h-[200px] rounded-xl flex items-center justify-center w-[32%] min-w-[150px]"><AdCard/></div>
          <div className="bg-green-500 h-[200px] rounded-xl flex items-center justify-center w-[32%] min-w-[150px]"><AdCard/></div>
        </div>

        <Items />
        <Items1 />
        <Items2 />
        <Items3 />
        <Items4 />
        <div className="flex flex-row gap-10 mt-20">
          <div className="font-bold text-xl bg-blue-700 flex justify-center items-center">
            Categories
          </div>
          <div className="text-green-700 bg-blue-500 flex justify-center items-center">
            see all
          </div>
        </div>
        <div className="flex flex-row text-muted-foreground w-full justify-center gap-10">
          <div className="flex flex-col">
            <span>Vegetables & Fruits </span>
            <span>Dairy & Breakfast</span>
            <span>Munchies </span>
            <span>Cold Drinks & Juices</span>
            <span>Instant & Frozen Food </span>
            <span>Tea, Coffee & Milk Drinks </span>

            <span>Bakery & Biscuits </span>
            <span>Sweet Tooth </span>
          </div>

          <div className="flex flex-col">
            <span>Atta, Rice & Dal </span>
            <span>Dry Fruits, Masala & Oil </span>
            <span>Sauces & Spreads </span>
            <span>Chicken, Meat & Fish </span>
            <span>Paan Corner Organic & Premium</span>
            <span>Baby Care </span>
            <span>Pharma & Wellness </span>
            <span>Cleaning Essentials</span>
            <span>Home Furnishing & Decor </span>
            <span>Personal Care Pet Care </span>
            <span>Beauty & Cosmetics </span>
            <span>Kitchen & Dining </span>
          </div>

          <div className="flex flex-col">
            <span>Fashion & Accessories </span>
            <span>Electronics & Electricals </span>
            <span>Stationery Needs </span>
            <span>Books Toys & Games </span>
            <span>Print Store </span>
            <span>E-Gift Cards </span>
            <span>Rakhi Gifts</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainBody;
