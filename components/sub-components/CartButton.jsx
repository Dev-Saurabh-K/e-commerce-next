import { ShoppingCart } from "lucide-react";
import { IndianRupee } from "lucide-react";

const CartButton = () => {
  return (
    <div className="bg-green-700 text-white flex flex-row p-2 px-4 rounded-md">
      <ShoppingCart />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span>1</span>
          <span> items</span>
        </div>
        <div className="flex flex-row">
          <span>
            <IndianRupee />
          </span>
          <span>29</span>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
