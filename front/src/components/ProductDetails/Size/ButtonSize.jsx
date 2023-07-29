import React from "react";

function ButtonSize({ size, selectedSize, setSelectedSize }) {
  const handleClick = () => {
    if (selectedSize === size) {
      setSelectedSize(""); // Deseleccionar la talla si ya está seleccionada
    } else {
      setSelectedSize(size); // Seleccionar la talla si aún no está seleccionada
    }
  };

  return (
    <button
      className={`uppercase rounded-xl py-1 w-12 hover:scale-110 transition font-mont bg-white ${
        selectedSize === size ? "outline outline-2 hover:scale-100" : ""
      }`}
      onClick={handleClick}
      style={{ outline: selectedSize === size ? "2px solid #000" : "" }}
    >
      {size}
    </button>
  );
}

export default ButtonSize;
