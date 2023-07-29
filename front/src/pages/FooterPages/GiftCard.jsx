import React from "react";
import { HiCreditCard } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdTimer } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

function GiftCard() {
  return (
    <div className="py-10 px-3 lg:px-80 flex justify-center flex-col gap-5 text-base md:text-lg bg-[#f2f2f2] font-mont" style={{ maxWidth: "60rem", margin: "0 auto" }}>
      <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
        Tarjetas de Regalo
      </h1>
      <div className="flex flex-col gap-4">
        <p>¡Regala momentos especiales con nuestras tarjetas de regalo!</p>
        <p>
          Obsequia experiencias únicas y personalizadas con nuestras tarjetas de
          regalo. ¡La elección perfecta para cualquier ocasión! Sorprende a tus
          seres queridos con la posibilidad de elegir entre una amplia selección
          de productos y servicios de nuestra tienda.
        </p>
        <p>
          Ya sea para cumpleaños, aniversarios, graduaciones o simplemente para
          expresar tu cariño, nuestras tarjetas de regalo son una opción
          versátil que seguramente dejará una impresión duradera. Además,
          ofrecemos opciones de personalización para que puedas agregar un
          mensaje especial y hacer que la experiencia sea aún más significativa.
        </p>

        <h3 className="font-bold text-lg md:text-xl">¿Cómo funciona?</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mont text-sm">
          <div className="bg-white flex flex-col gap-2 items-center place-content-center md:w-[200px] h-[150px] rounded-lg shadow p-3">
            <HiCreditCard size={50} />
            <p className="text-center">De $50 a $500 USD</p>
          </div>

          <div className="bg-white flex flex-col gap-2 items-center place-content-center h-[150px] md:w-[200px] rounded-lg shadow p-3">
            <SiHomeassistantcommunitystore size={50} />
            <p className="text-center">
              Válido en nuestras tiendas de VivaVintage
            </p>
          </div>

          <div className="bg-white flex flex-col gap-2 items-center place-content-center h-[150px] md:w-[200px] rounded-lg shadow p-3">
            <MdTimer size={50} />
            <p className="text-center">Validez por 1 año</p>
          </div>

          <div className="bg-white flex flex-col gap-2 items-center place-content-center h-[150px] md:w-[200px] rounded-lg shadow p-3">
            <PiPlantFill size={50} />
            <p className="text-center">Regalo sustentable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
