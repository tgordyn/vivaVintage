import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Quantity({ price, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity)
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className="flex gap-7 md:gap-10 items-center">
      <div className="flex items-center justify-between px-3 gap-4 bg-white outline outline-1 py-1 w-[156px] h-[34px] rounded-full mt-3">
        <button onClick={handleDecrease}>
          <AiOutlineMinus size={20} />
        </button>
        <span className="text-lg font-mont">{quantity}</span>
        <button onClick={handleIncrease}>
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="flex md:gap-3 font-mont text-sm md:text-base mt-3 md:w-[380px]">
        <div>
          Has seleccionado {quantity} unidad{quantity > 1 ? "es" : ""}: <span className="font-bold"> ${totalPrice}</span> subtotal!
        </div>
      </div>
    </div>
  );
}

export default Quantity;
