import React from "react";

function AboutUs() {
  return (
    <div
      className="py-5 px-3 lg:px-80 text-base md:text-lg font-mont"
      style={{ maxWidth: "60rem", margin: "0 auto" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold text-center underline underline-offset-8">
          Sobre Nosotros
        </h1>
        <p className="text-lg md:text-xl">
          Fundada en 2023 por apasionados de la moda, nuestra tienda de ropa
          vintage está cuidadosamente integrada en el tejido del tiempo,
          ofreciendo una elegante colección que te transporta a épocas pasadas.
          Nuestro enfoque prioritario es la calidad y autenticidad, valores que
          impregnamos en cada prenda.
        </p>
        <p className="text-lg md:text-xl">
          Cada artículo de nuestra colección pasa por rigurosas inspecciones
          para asegurarnos de que cumple con nuestros exigentes estándares.
          Creemos firmemente en la adopción de estilos clásicos como una forma
          de expresar tu gusto único y personal.
        </p>
        <p className="text-lg md:text-xl">
          Creamos prendas únicas y originales, inspiradas en la estética
          retro-vintage, diseñadas especialmente para almas rebeldes que buscan
          marcar la diferencia con su estilo. En nuestra tienda, todas las almas
          rebeldes son bienvenidas a descubrir y explorar nuestra colección.
        </p>
        <img src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="chica vintage" className="rounded-3xl object-cover md:h-[440px]" />
      </div>
    </div>
  );
}

export default AboutUs;
