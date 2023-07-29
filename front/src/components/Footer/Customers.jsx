import React from "react";

function Customers() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Clientes</h3>
      <ul className="text-sm flex flex-col gap-3">
        <li className="hover:underline underline-offset-8 transition">
          <a href="/size-guide" className="hover:text-gray-400">
            Guía de Tallas
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/faq" className="hover:text-gray-400">
            FAQ
          </a>
        </li>
        {/* <li className="hover:underline underline-offset-8 transition">
          <a href="/shipping-method" className="hover:text-gray-400">
            Métodos de Envío
          </a>
        </li> */}
        <li className="hover:underline underline-offset-8 transition">
          <a href="/gift-card" className="hover:text-gray-400">
            Tarjetas de Regalo
          </a>
        </li>
        {/* <li className="hover:underline underline-offset-8 transition">
          <a href="/returns-and-exchanges" className="hover:text-gray-400">
            Devoluciones & Cambios
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Customers;
