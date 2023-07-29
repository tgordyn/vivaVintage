import React from "react";

function Contact() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-4">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Contáctanos
        </h1>

        <h2 className="text-xl md:text-3xl font-bold text-center pt-5">Quieres ponerte en contacto con nosotros?</h2>
        <p className="text-center">Escríbenos o llámanos al número +375 (29) 749-18-23 o envianos un correo electrónico a vivavintage@gmail.com</p>
        <img src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1119&q=80" alt="" className="md:h-[450px] object-cover rounded-2xl" />
      </div>
    </div>
  );
}

export default Contact;
