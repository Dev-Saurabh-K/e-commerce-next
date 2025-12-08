import { ShoppingCart } from "lucide-react";
import { IndianRupee } from "lucide-react";
import { useCounterStore } from "@/app/store";

const CartButton = () => {
  const count = useCounterStore((state) => state.count);
  const price = useCounterStore((state) => state.price);
  const setCartPageState=useCounterStore((state)=>state.setCartPageState);

  return (
    <div className="bg-green-700 text-white flex flex-row p-2 px-4 w-[135px] h-[55px] rounded-md justify-center items-center gap-2" onClick={setCartPageState}>
      <ShoppingCart />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row font-bold">
          <div>{count} </div>
          <div>items</div>
        </div>
        <div className="flex flex-row">
          <span>
            <IndianRupee />
          </span>
          <span className="font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
