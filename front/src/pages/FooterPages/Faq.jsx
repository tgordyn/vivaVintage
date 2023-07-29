import React from "react";

function Faq() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          FAQ
        </h1>

        {/* Consultas stock */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-center underline pb-2">
            Consultas de Stock
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-center">
            Hay stock en todos los productos?
          </h3>
          <p>
            Si, todos los productos que se publican en la web cuentan con stock.
            En caso se agotara una de las variaciones (talla), esta se bloqueará
            para su compra.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Compre y me indicaron que no había stock. Qué hago?
          </h3>
          <p>
            Este es un caso atípico pero puede suceder porque un producto se
            sobre vendió, pero nuestro equipo de Atención al Cliente le ayudara
            a realizar cualquier cambio de producto. También te puedes comunicar
            con nosotros al +375 (29) 749-18-23 o vivavintage@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            El precio en tienda online y física es el mismo?
          </h3>
          <p>
            Si, los precios son los mismos. Sin embargo pueden haber promociones
            exclusivas para cada uno de estos canales de venta por lo que pueden
            no coincidir.
          </p>
        </div>

        {/* Consultas envío */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-center underline pb-2">
            Envíos
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-center">
            Cuales son los métodos de envío disponibles?
          </h3>
          <p>
            Contamos con envíos a domicilio, envíos a alguna de nuestras tiendas
            y envíos express. Para mayor información visitar la página de
            “Métodos de Envío”
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Puedo cambiar mi dirección de envío?
          </h3>
          <p>
            Sí, sin embargo esto debe ser realizado antes de que el pedido salga
            de nuestro almacén. Para realizar un cambio de pedido comunícate con
            nuestro equipo de Atención al Cliente.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Qué pasa si no hay nadie en mi dirección que pueda recibir mi
            pedido?
          </h3>
          <p>
            En caso no te encuentres en tu dirección, en el caso de Lima el
            motorizado realizará una segunda visita previa programación con
            atención al cliente.
          </p>
          <p>
            En el caso de pedidos a provincia, Olva de no poder completar la
            entrega nos notificara y programará una segunda visita. De no
            concretarse esta segunda entrega el paquete será retornado a nuestro
            almacén. Si esto sucede, atención al cliente se comunicara con el
            cliente para ver cómo se procederá.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Puede recibir el paquete otra persona?
          </h3>
          <p>
            Si, no es necesario que esté presente quien realizó la compra. Puede
            recibirlo cualquier persona, en Lima el motorizado pedirá permiso
            para tomar una foto que acredite la persona que recibió el pedido y
            en el caso de Olva se pedirá una firma para demostrar la recepción
            del paquete.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            A qué países realizan envíos?
          </h3>
          <p>Realizamos envíos a todos los países del mundo.</p>
          <p>
            Tomar en cuenta que cada país puede tener una regulación arancelaria
            y de impuestos específica. Estos costos no están incluidos en tu
            pedido realizado en nuestra tienda. No nos responsabilizamos por
            costos adicionales asumidos, toda tarifa adicional deberá ser pagada
            por el comprador.
          </p>
        </div>

        {/* Atención cliente */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-center underline pb-2">
            Atención al cliente
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-center">
            Cómo puedo ponerme en contacto con ustedes? Cuales son sus horarios
            de atención?
          </h3>
          <p>
            Nuestro equipo de atención al cliente está a tu disposición en
            escribiendo al +375 (29) 749-18-23 o también al CORREO.
          </p>
          <p>
            Nuestro equipo está disponible de Lunes a Sábado de 8am a 7pm EST.
            Procuramos dar respuestas en un plazo máximo de 24 horas
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Tienen algún número de teléfono de contacto?
          </h3>
          <p>Pueden contactarse al número de teléfono +375 (29) 749-18-23</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Cómo hago para dejar de recibir correos/newsletters?
          </h3>
          <p>
            Puedes escribirnos al +375 (29) 749-18-23 indicando el correo
            electrónico con el que te registraste para poder darlo de baja.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
