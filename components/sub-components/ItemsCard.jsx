'use client'

import { useState } from "react";
import AddButton from "./AddButton";



const ItemsCard = () => {
    const [added, setAdded]=useState(false);

    const handleAdd=()=>{
        setAdded(true);
    }
  return (
    <div className="bg-amber-100 flex w-[95%] h-[95%] flex-col justify-center items-center">
        
      <div className="h-[55%] w-[95%] bg-cyan-400">
        {/* <img src="" alt="" /> */}
      </div>
      <div className="h-[45%] w-[95%] bg-cyan-500 p-2 flex flex-col gap-2">
        <p className="truncate">
          Card title eg-DOKi Chicken Jerky (Korean Gochuja)
        </p>
        <p className="text-muted-foreground">Weight g</p>
        <div className="flex items-center justify-around flex-row">
          <p className="mr-auto mt-auto">Price</p>
          {added?<AddButton setAdd={setAdded}/>:<div className="w-fit h-fit border-2 border-green-700 text-green-700 p-1 px-4 rounded-sm text-sm cursor-pointer" onClick={handleAdd}>ADD</div>}
          
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
