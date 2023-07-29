import React from "react";

function OurStores() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Nuestras Tiendas
        </h1>
        <h3 className="text-lg md:text-xl font-bold">
          Encuentra tu tienda más cercana:
        </h3>

        <div className="flex flex-col md:flex-row gap-5 md:gap-3">
          <div className="flex flex-col gap-2">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Argentina tienda"
              className="rounded-3xl object-cover"
            />
            <h4 className="font-bold">Abasto Shopping</h4>
            <p className="text-sm md:text-base">
              Av. Corrientes 3247, C1193 Buenos Aires, Argentina
            </p>
            <p className="text-sm md:text-base">Lunes a Sábado de 8am a 7pm</p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Chile Tienda"
              className="rounded-3xl object-cover"
            />
            <h4 className="font-bold">Parque Arauco</h4>
            <p className="text-sm md:text-base">
              Av. Pdte. Kennedy 5413, Las Condes, Santiago, Chile
            </p>
            <p className="text-sm md:text-base">Lunes a Sábado de 8am a 7pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStores;
