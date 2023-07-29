import React from "react";

function Size({ children, selectedSize, setSelectedSize }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="capitalize text-lg">tallas:</h3>
      <div className="flex flex-row gap-3">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            selectedSize: selectedSize,
            setSelectedSize: setSelectedSize,
          })
        )}
      </div>
      <p className="text-[#878787] text-xs font-mont">Únicas tallas disponibles**</p>
    </div>
  );
}

export default Size;
