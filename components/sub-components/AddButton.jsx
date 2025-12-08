import { useCounterStore } from "@/app/store";
import { useState } from "react";

const AddButton = ({ setAdd }) => {
  const [no, setNo] = useState(0);
  const count = useCounterStore((state) => state.count);
  const add = useCounterStore((state) => state.add);
  const subtract = useCounterStore((state) => state.subtract);

  const cart=useCounterStore((state)=>state.isCartActive);
  const setCart = useCounterStore((state) => state.setIsCartActive);
  const price=useCounterStore((state)=>state.price);

  const handleSubtract = (e) => {
    // Stop click propagation if this is inside a clickable card
    e.stopPropagation();

    if(count==0){
      if(cart==true){
        setCart();
      }
    }

    if (no <= 0) {
      setAdd(false);
      return;
    }
    

    setNo(no - 1);

    //for tesrting replcae it with actual price afterwards
    subtract(15);
  };
  // const handleSubtract = (e) => {
  //   e.stopPropagation();

  //   // 1. Check if we are at the limit (1 item)
  //   // If we are at 1, this click should remove the item entirely.
  //   if (no <= 1) {
  //     subtract(); // Remove from global store
  //     setAdd(false); // Immediately switch back to "Add" button
      
  //     // Handle the cart drawer logic if the Global count hits 0
  //     if (count <= 1) {
  //       setCart();
  //     }
  //     return; 
  //   }

  //   // 2. Normal Decrement (If value is > 1)
  //   // Use 'prev' to ensure rapid clicks don't calculate based on old state
  //   setNo((prev) => prev - 1); 
  //   subtract();
  // };

  const handleAdd = (e) => {
    e.stopPropagation();
    // setAdd(true);
    setNo(no + 1);
    if (count == 0) {
      setCart();
    }
    //for testing , remove add paramerter anf make it blank..... or if sucess then use price..
    add(15);

    console.log(price);
  };

  return (
    <div className="min-w-[70px] h-[35px] bg-green-700 text-white rounded-md text-sm font-semibold flex flex-row items-center justify-between overflow-hidden shadow-sm">
      {/* Subtract Button */}
      <button
        type="button"
        onClick={handleSubtract}
        className="w-8 h-full flex justify-center items-center hover:bg-green-800 active:bg-green-900 transition-colors"
        aria-label="Decrease quantity"
      >
        -
      </button>

      {/* Count Display */}
      <div className="flex-1 flex justify-center items-center select-none">
        {/* {count} */}
        {no}
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={handleAdd}
        className="w-8 h-full flex justify-center items-center hover:bg-green-800 active:bg-green-900 transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
