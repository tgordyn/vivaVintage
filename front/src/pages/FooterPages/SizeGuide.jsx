import React from "react";

function SizeGuide() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Guías de Tallas
        </h1>

        <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-center underline pb-5">Tallas Hombre</h2>
            <h3 className="text-lg md:text-xl font-bold">Tallas para camperas, camisas, pantalones</h3>
            <img src="https://cdn.shopify.com/s/files/1/0524/2329/5144/files/Guia_de_talla_Hombre_64a3e549-9000-4086-9791-b5c758069e42.jpg?v=1689088913" className="shadow rounded-lg" alt="talla hombre" />
            <h3 className="text-lg md:text-xl font-bold">Tallas para calzados</h3>
            <img src="https://soporte.andrea.com/Andrea/Guias_de_Tallas/Gu%C3%ADa%20de%20Tallas%20Calzado%20_%20Hombre%20%E2%80%93%20Centro%20de%20Ayuda_files/guia-tallas-caballero-calzado.jpg" className="md:h-[522px] shadow rounded-lg mb-5" alt="tallas calzado hombre" />

            <h2 className="text-xl md:text-3xl font-bold text-center underline pb-5">Tallas Mujer</h2>
            <h3 className="text-lg md:text-xl font-bold">Tallas para camperas, camisas, pantalones</h3>
            <img src="https://cdn.shopify.com/s/files/1/0524/2329/5144/files/Guia_de_talla_Mujer_6a9e893f-19b3-43a7-86da-1d98b381694c.jpg?v=1689088907" className="shadow rounded-lg" alt="talla mujer" />
            <h3 className="text-lg md:text-xl font-bold">Tallas para calzados</h3>
            <img src="https://soporte.andrea.com/Andrea/Guias_de_Tallas/Gu%C3%ADa%20de%20Tallas%20Calzado%20_%20Mujer%20%E2%80%93%20Centro%20de%20Ayuda_files/guia-tallas-dama-zapato.jpg" className="md:h-[522px] shadow rounded-lg mb-5" alt="tallas calzado mujer" />

            <h2 className="text-xl md:text-3xl font-bold text-center underline pb-3">Gorras</h2>
            <img src="https://www.decathlon.cl/img/cms/guia_de_tallas/GORRAS@.jpg"
            className="shadow rounded-lg object-cover" alt="talla gorras" />
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;
