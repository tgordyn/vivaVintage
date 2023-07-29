import { FaGooglePay } from "react-icons/fa";

function PaymentMethods() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-3">Métodos de Pago</h3>
      <div className="flex flex-wrap md:flex-row gap-2 md:gap-4">
        <a
          href="https://pay.google.com/intl/es_es/about/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGooglePay size={45} />
        </a>
      </div>
    </div>
  );
}

export default PaymentMethods;
