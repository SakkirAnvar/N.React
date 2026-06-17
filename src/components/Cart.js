import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="items-center">
      <h1 className="text-center text-bold text-xl">Cart</h1>
      <button
        className="items-center bg-black text-white p-2 m-2 rounded-lg cursor-pointer"
        onClick={handleClearcart()}
      >
        Clear Cart
      </button>
      {cartItem.length === 0 && (
        <h1 className="text-center p-2 m-2">
          Cart is empty, Add items to the cart!
        </h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
