import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Intro from "../components/Intro/Intro";
import { RxArrowRight } from "react-icons/rx";
import { SiNike, SiZara, SiReebok, SiPuma, SiDior } from "react-icons/si";
import { CgAdidas, CgChanel } from "react-icons/cg";
import { GiKangaroo } from "react-icons/gi";
import ProductCard from "../components/Card/Card";
import Loading from "../components/Loading";

const HomePage = () => {
  const [lastAccessories, setLastAccessories] = useState([]);
  const [lastHats, setLastHats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        //`https://apimocha.com/vivavintage/products`
        `https://backvivavintage.azurewebsites.net/product`
      );

      const lastAccessories = data.filter(
        (prod) => prod.category === "accessories"
      );

      const lastHats = data.filter((prod) => prod.category === "hats");

      setLastAccessories(lastAccessories.slice(-4));
      setLastHats(lastHats.slice(-4));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex place-content-center py-40 lg:py-28">
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="relative mb-24 md:mb-96">
        <img
          src="./playa.png"
          alt=""
          className="absolute z-10 h-[400px] filter  brightness-75 object-cover"
        />
        <div className="absolute top-[4rem] md:top-[2rem] left-4 md:left-10 flex flex-col text-white z-20 gap-4">
          <h1 className="text-3xl md:text-6xl font-mont font-bold w-[350px] md:w-[700px] uppercase">
            El verano ya se vive en VivaVintage
          </h1>
          <h2 className="text-xl md:text-5xl underline font-mont uppercase">
            Todo Camisas
          </h2>
          <p className="text-base md:text-2xl md:w-[680px]">
            Pull&Bear, H&M, Zara, Bershka, New Yorker, Reserved, Colin's, Asos
          </p>

          <Link to="/categoria/camisas-remeras">
            <button className="uppercase bg-white text-black w-[200px] p-2 rounded-full flex items-center gap-2 place-content-center hover:text-emerald-500 hover:bg-purple-300 hover:outline transition">
              comprar ahora <RxArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/7148445/pexels-photo-7148445.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="banner"
        className="absolute z-30 right-5 top-[17rem] rounded-md w-[500px] shadow hidden lg:block"
      />
      <div
        className="py-10 px-3 pt-[430px] pb-20 md:pt-16 space-y-20"
        style={{ maxWidth: "85rem", margin: "0 auto" }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 md:pt-10 items-center justify-between">
          <SiNike size={80} />
          <CgAdidas size={80} />
          <SiZara size={80} />
          <CgChanel size={80} />
          <SiReebok size={80} />
          <SiPuma size={80} />
          <SiDior size={80} />
          <GiKangaroo size={80} />
        </div>

        <div>
          <h3 className="text-2xl capitalize font-bold">
            Nuestros últimos accesorios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between place-items-center">
            {lastAccessories.length > 0 ? (
              lastAccessories.map((prod) => (
                <ProductCard key={prod.id} prod={prod} />
              ))
            ) : (
              <>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
              </>
            )}
          </div>
        </div>
        <div>
          <img
            src="./banner2.png"
            className="relative z-10 filter brightness-75 md:brightness-90 h-[350px] md:h-auto object-cover"
            alt="banner2"
          />
          <div className="absolute -mt-[16rem] lg:-mt-[17rem] ml-10 lg:ml-[35rem] z-30 text-white space-y-3">
            <h2 className="text-3xl md:text-6xl font-mont font-bold uppercase">
              spring <span className="underline font-normal">party</span>
            </h2>
            <p className="text-base md:text-2xl w-[280px] md:w-[450px]">
              Todas las camperas que necesitas para la fiesta de primavera
            </p>
            <Link to="/categoria/camperas">
              <button className="uppercase bg-white text-black w-[200px] p-2 rounded-full flex items-center mt-3 gap-2 place-content-center hover:text-emerald-500 hover:bg-purple-300 hover:outline transition">
                visitar ahora <RxArrowRight size={20} />
              </button>
            </Link>
          </div>

          <div className="mt-[70px]">
            <h3 className="text-2xl capitalize font-bold">
              Nuestros últimos sombreros
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between place-items-center">
              {lastHats.length > 0 ? (
                lastHats.map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))
              ) : (
                <>
                  <Loading />
                  <Loading />
                  <Loading />
                  <Loading />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Carrousel />
      <Intro />
    </>
  );
};

export default HomePage;
