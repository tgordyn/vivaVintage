import React from "react";
import { PiArrowCircleRightBold } from "react-icons/pi";

function ShippingMethod() {
  return (
    <div className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont" style={{ maxWidth: "60rem", margin: "0 auto"}}>
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Métodos de envío
        </h1>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg md:text-xl">Importante:</h3>
          <p>
            Puede suceder un quiebre de stock en nuestro almacén, por lo que
            solicitaremos el producto de alguna de nuestras tiendas, lo que
            podría extender el tiempo de entrega. De ser el caso, nos
            comunicaremos con el cliente.
          </p>
          <p>
            Recuerda que si necesitas ayuda con tu compra puedes escribirnos o
            llamarnos al{" "}
            <strong className="text-slate-600 underline">
              +375 (29) 749-18-23
            </strong>{" "}
            o también escribirnos un correo electrónico a{" "}
            <strong className="text-slate-600 underline">
              vivavintage@gmail.com
            </strong>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Envíos Nacionales
          </h2>
          <p>
            Hacemos envíos a todas las ciudades de Sudamérica. Los pedidos son
            enviados mediante la paquetería de Olva Courier.
          </p>
          <p>Los tiempos estimados de entrega son:</p>

          <div className="flex flex-col p-3 rounded-lg shadow gap-2 w-[320px] md:w-[350px] bg-white font-sans">
            <div className="flex justify-between items-center">
              <p className="w-[140px]">Envío regular</p>
              <PiArrowCircleRightBold size={20} />
              <p>5 a 8 días hábiles</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="w-[140px]">Recojo en Tienda</p>
              <PiArrowCircleRightBold size={20} />
              <p>1 a 3 días hábiles</p>
            </div>
          </div>

          <p className="text-[#828282] text-sm">
            *Los tiempos de envío pueden aumentar en fechas de alta demanda
            tales como Dia de la Madre, Dia del Padre, Shopping Day, Black
            Friday, Navidad u otros similares.
          </p>
          <p>
            Nuestros despachos son realizados de lunes a viernes de 10am a 7pm y
            los sábados de 10am a 5pm. Los días domingo y feriados no realizamos
            despachos.
          </p>
          <p>
            El courier se comunicará con el cliente el día que se programe la
            entrega de su pedido al número de teléfono registrado por el
            cliente.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Recojo en Tienda
          </h2>
          <p>
            Los clientes al momento de haber realizado su compra pueden elegir
            recogerla en su tienda más cercana.
          </p>
        </div>

        <div className="flex flex-col gap-4 pb-10">
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Envíos Internacionales
          </h2>
          <p>
            Para envíos globales realizamos nuestros envíos vía DHL y FedEx. Los
            envíos internacionales tienen un tiempo medio de entrega de 10 a 14
            días hábiles a partir de realizado y pagado el pedido. Tomar en
            cuenta que estos tiempos pueden variar según disposiciones de las
            autoridades del país de destino.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShippingMethod;
