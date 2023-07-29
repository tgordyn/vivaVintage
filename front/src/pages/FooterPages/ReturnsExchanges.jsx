import React from "react";

function ReturnsExchanges() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Devoluciones & Cambios
        </h1>
        <p>
          Estamos comprometidos para que tu pedido sea de tu agrado. Sin
          embargo, si necesitas realizar algún cambio de producto estamos para
          ayudarte con eso. Puedes escribirnos o llamarnos al +375 (29)
          749-18-23.
        </p>
        <div className="flex flex-col gap-4">
          <strong className="text-lg md:text-xl">Importante:</strong>
          <p>
            Si deseas realizar un cambio por otro producto de mayor valor,
            deberás pagar la diferencia.
          </p>
          <p>
            Si el producto es de menor valor al total del producto a cambiar,
            deberá procurar consumir el saldo restante en otros productos. De lo
            contrario la diferencia no será reembolsable ni en efectivo, ni en
            una nota de crédito.
          </p>
          <p>
            El despacho del nuevo producto se realizará una vez hayamos recibido
            el producto inicial en nuestro almacén y aplicarán los mismos
            tiempos de una entrega regular.
          </p>
          <p>
            Todo producto debe ser entregado con sus etiquetas y empaques
            originales sin señales de uso.
          </p>
          <p>
            Tomar en cuenta que los siguientes no son aplicables a cambios de
            productos:
          </p>
          <ul className="list-disc px-5">
            <li>Pedidos con más de 7 días de recibido el pedido de compra.</li>
            <li>Productos en Liquidación o descuentos.</li>
            <li>Productos con señales de uso, sin etiqueta o empaques.</li>
          </ul>
          <p>Los siguientes casos si aplican a cambios de producto:</p>
          <ul className="list-disc px-5">
            <li>Error de envío de productos.</li>
            <li>Productos defectuosos o con fallas de fabrica.</li>
            <li>
              Cambio por otra talla u otro modelo sujeto a stock de la talla o
              modelo deseado.
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-center pt-5">
              Devolución de Dinero
            </h2>
            <p>
              Si no estas totalmente satisfecho con tu compra comunícate con
              nosotros al +375 (29) 749-18-23 para ayudarte en la devolución de
              tu dinero.
            </p>
            <p>Los siguientes no son aplicables a devolución de efectivo:</p>
            <ul className="list-disc px-5">
              <li>Pedidos con más de 7 días de recibida la compra.</li>
              <li>Productos en Liquidación o descuentos.</li>
              <li>Productos con señales de uso, sin etiqueta o empaques.</li>
            </ul>
            <p>Tomar en cuenta:</p>
            <ul className="list-disc px-5">
              <li>
                El producto deberá ser retornado a nuestro almacén para poder
                proceder con la devolución del dinero.
              </li>
              <li>El cobro por gastos de envío no será reembolsable.</li>
            </ul>
            <p>
              El reembolso se realizará dependiendo del método de pago que hayas
              elegido.
            </p>
            <ul className="list-disc px-5">
                <li>Las ventas realizadas con tarjetas de crédito / débito, una vez procesadas son realizadas por el banco y tienen un proceso de 15 a 21 días hábiles para retornar el efectivo.</li>
                <li>Si realizaste tu compra por Pago en Agentes o Banca por Internet, comunícate con atención al cliente para coordinar un depósito a una cuenta bancaria. Esto tiene un tiempo de entre 3 a 10 días hábiles de coordinado el depósito.</li>
            </ul>
            <p>Recuerda que si necesitas ayuda con tu compra puedes escribirnos o llamarnos a  <strong className="text-slate-600 underline">+375 (29) 749-18-23</strong> o también escribirnos un correo electrónico a <strong className="text-slate-600 underline">vivavintage@gmail.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnsExchanges;
