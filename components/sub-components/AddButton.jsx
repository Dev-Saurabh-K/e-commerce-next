import { useState } from "react";

const AddButton = ({setAdd}) => {
    const [number,setNumber]=useState(1);
    const handleAdd=()=>{
        setNumber(number+1);
        
    }
    const handleSubtract=()=>{
        setNumber(number-1);
        if(number<=1){
            setAdd(false)
        }
    }
  return (
    <div className="w-[68px] h-[33px] bg-green-700 text-white rounded-sm text-sm cursor-pointer flex flex-row items-center justify-center">
      <div onClick={handleSubtract} className=" w-1/3 flex justify-center items-center">-</div>
      <div className=" w-1/3 flex justify-center items-center">{number}</div>
      <div onClick={handleAdd} className=" w-1/3 flex justify-center items-center">+</div>
    </div>
  );
};

export default AddButton;
