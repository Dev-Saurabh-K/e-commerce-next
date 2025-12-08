"use client";

import "./css/navbar.css";
import { Search, ShoppingCart, MapPin } from "lucide-react"; // Added MapPin for location
import CartButton from "./sub-components/CartButton";
import { useState } from "react";

const Navbar = () => {
  // Renamed for clarity. 'item' is vague.
  const [isCartActive, setIsCartActive] = useState(false);

  const toggleCartState = () => {
    setIsCartActive(!isCartActive);
  };

  return (
    // Changed w-screen to w-full to prevent horizontal scrollbars
    // Removed fixed + margin approach in favor of sticky top-0 for better flow
    <nav className="navbar flex flex-row justify-between items-center px-6 py-4 h-[85px] border-b border-gray-200 sticky top-0 z-30 bg-amber-50 w-full shadow-sm">
      
      {/* 1. Logo Section */}
      <div className="logo font-extrabold text-4xl select-none">
        <span className="text-amber-400 border-t-2 border-l-2 border-amber-400 pl-1">
          my
        </span>
        <span className="text-green-500 border-b-2 border-r-2 border-green-500 pr-1">
          shop
        </span>
      </div>

      {/* 2. Location Section */}
      <div className="location hidden lg:flex flex-col text-sm">
        <div className="flex items-center gap-1 text-gray-500">
           <MapPin size={14} />
           <span>Delivering to</span>
        </div>
        <p className="font-bold text-gray-800">Kolkata, India</p>
      </div>

      {/* 3. Search Bar */}
      <div className="search-bar hidden md:flex flex-row rounded-lg border border-gray-300 items-center w-5/12 bg-white px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-amber-200 transition-all">
        <Search className="text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search for products..."
          className="w-full focus:outline-none bg-transparent text-gray-700 placeholder-gray-400" 
        />
      </div>

      {/* 4. Action Buttons */}
      <div className="buttons flex flex-row gap-4 items-center">
        
        <button className="text-gray-700 font-semibold hover:text-amber-500 transition-colors">
          Login
        </button>

        {/* Cart Trigger */}
        <div onClick={toggleCartState}>
          {isCartActive ? (
            <CartButton />
          ) : (
            <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors font-bold text-gray-700 px-6 py-3 rounded-lg gap-2">
              <ShoppingCart size={20} />
              <span>My Cart</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;