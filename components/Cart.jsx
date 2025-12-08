import { X } from "lucide-react";

const Cart = ({ setCartPageState }) => {
  return (
    <div className="h-full w-full flex">
      Cart
      <div className="w-fit h-fit" onClick={()=>setCartPageState(false)}>
        <X className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
