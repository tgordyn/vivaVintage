import ButtonTo from "../ButtonTo";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div className="py-5 px-3" style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <section className="flex flex-col gap-4">
          <h3 className="font-mont text-lg md:text-2xl font-bold">Reseñas</h3>

          {/* <ButtonTo name="Dejar reseña" /> */}

          {/*reseña usuario */}
          <div className="lg:w-[500px] flex flex-col gap-3 bg-white p-2 rounded-lg shadow outline outline-2 font-mont mt-3">
            <div className="flex justify-between">
              <h4 className="font-bold text-base capitalize">
                Margarita pinares
              </h4>
              <span className="text-[#A0A0A0] text-sm">Julio 21, 17:55</span>
            </div>
            <p>
              Buena calidad del producto! La talla que pedí se ajusta
              perfectamente. Muy recomendado! 👌😍
            </p>
          </div>

          <div className="lg:w-[500px] flex flex-col gap-3 bg-white p-2 rounded-lg shadow outline outline-2 font-mont">
            <div className="flex justify-between">
              <h4 className="font-bold text-base capitalize">Mauricio Diaz</h4>
              <span className="text-[#A0A0A0] text-sm">Mayo 21, 10:27</span>
            </div>
            <p>
              Buen producto, la calidad generalmente está muy bien, el único
              aspecto negativo es un poco pequeño 😢
            </p>
          </div>
        </section>

        {/* anuncio descuento */}
        <section className="flex flex-col gap-2">
            <h3 className="font-bold font-mont">Black Friday en categoria Pantalones</h3>
          <Link to="/categoria/pantalones">
            <img
              src="https://images.pexels.com/photos/5947549/pexels-photo-5947549.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="anuncio descuentos"
              className="h-[420px] w-[400px] rounded-lg"
            />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Review;
