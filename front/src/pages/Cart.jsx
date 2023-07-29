import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/constants";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import GooglePayButton from "@google-pay/button-react";

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Su carrito está vacío</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
};

const ShowCart = ({ state, addItem, removeItem }) => {
  const navigate = useNavigate();
  let subtotal = 0;
  let descuento = 7;
  let totalItems = 0;
  state.forEach((item) => {
    subtotal += item.price * item.qty;
    totalItems += item.qty;
  });
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const shippingOptions = [
    {
      id: "free",
      label: "Free shipping",
      description: "Arrives in 5 to 7 days",
      price: "0.00",
    },
    {
      id: "express",
      label: "Express shipping",
      description: "$5.00 - Arrives in 1 to 3 days",
      price: "5.00",
    },
  ];

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  {state.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-4 lg:gap-0">
                          <div className="col-lg-3 col-md-12">
                            <div
                              className="bg-image rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image1}
                                alt={item.title}
                                className="w-[100px] h-[100px] md:object-contain"
                              />
                            </div>
                          </div>

                          <h3 className="col-lg-5 col-md-6 text-center text-xl text-[#828282]">
                            {capitalizeFirstLetter(item.name)}
                          </h3>

                          <div className="col-lg-4 col-md-6">
                            <div className="flex items-center justify-between px-3 gap-4 bg-white outline outline-1 py-1 w-[156px] h-[34px] rounded-full">
                              <button
                                onClick={() => {
                                  removeItem(item);
                                }}
                              >
                                <AiOutlineMinus size={20} />
                              </button>
                              <span className="text-lg font-mont">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => {
                                  addItem(item);
                                }}
                              >
                                <AiOutlinePlus size={20} />
                              </button>
                            </div>
                            <div className="text-lg font-mont flex items-center justify-center px-3 gap-4 bg-white py-1 w-[156px] h-[34px] rounded-full">
                              {item.qty} x ${item.price}
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <ul className="text-base font-mont  list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Descuento de invierno
                      <span>{descuento}%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong className="text-base font-bold font-mont">
                          Precio total
                        </strong>
                      </div>
                      <span>
                        <strong className="text-base font-bold font-mont">
                          ${Math.round(subtotal * ((100 - descuento) * 0.01))}
                        </strong>
                      </span>
                    </li>
                  </ul>

                  {isLoggedIn ? (
                    <GooglePayButton
                      buttonSizeMode="fill"
                      environment="TEST"
                      buttonType="pay"
                      buttonLocale="es"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "example",
                                gatewayMerchantId: "exampleGatewayMerchantId",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "12345678901234567890",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "FINAL",
                          totalPriceLabel: "Total",
                          totalPrice: "100.00",
                          currencyCode: "USD",
                          countryCode: "US",
                        },
                        shippingAddressRequired: true,
                        shippingOptionParameters: {
                          defaultSelectedOptionId: "free",
                          shippingOptions: shippingOptions.map((o) => ({
                            id: o.id,
                            label: o.label,
                            description: o.description,
                          })),
                        },
                        shippingOptionRequired: true,
                      }}
                      onLoadPaymentData={(paymentRequest) => {
                        console.log("load payment data", paymentRequest);
                        navigate("/confirmation");
                      }}
                    />
                  ) : (
                    <div style={{ fontWeight: "700" }}>
                      Para finalizar con el pago debe{" "}
                      <a href="/sign-in">loguearse</a>{" "}
                    </div>
                  )}

                  <p className="text-base font-mont mt-2">
                    *Por ahora solo disponibles los pagos con Google Pay <br />
                    *El costo y método de envío se calcularán durante el pago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Cart = () => {
  const state = useSelector((state) => state.handleCart.items);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "90px" }}>
        <h2 className="display-5 text-center" style={{ marginBottom: "2%" }}>
          Carrito{" "}
        </h2>
        <hr />
        {state.length > 0 ? (
          <ShowCart state={state} addItem={addItem} removeItem={removeItem} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
