import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import InfoShipping from "./InfoShipping";

function ShippingCard() {
  return (
    <div className="bg-[#D9D9D9] flex flex-col gap-3 p-3 rounded-xl text-[#212429] md:w-[600px]">
      <InfoShipping
        icon={
          <LiaShippingFastSolid
            size={30}
          />
        }
        info1="Tiempo estimado de llegada: 5 - 8 días a toda Sudamérica."
        info2="Tiempo estimado de llegada: 10 - 14 días a los demás países."
      />
      <InfoShipping
        icon={
          <FaHandHoldingDollar
            size={30}
          />
        }
        info1="Los gastos de envío son de $30 para cualquier destino."
        info2="Cambio o devolución en las primeras 12 horas de haberse recibido."
      />
    </div>
  );
}

export default ShippingCard;
