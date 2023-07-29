const Intro = () => {
  return (
    <>
      <div
        style={{
          padding: "7%",
          // paddingBottom: 0,
          backgroundColor: "#f2f2f2",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h2
            id="whyUs"
            className="flex text-2xl md:text-5xl text-center mb-[50px] items-center justify-start w-[45%]"
          >
            Porqué VivaVintage
          </h2>
          <div className="md:text-3xl text-base w-[55%]">
            <ul style={{ listStyleType: "none" }}>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                ESTILOS EXCLUSIVOS
                <br />
                Colección atemporal de ropa vintage
              </li>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                ECO-FRIENDLY
                <br />
                Abrazar la sostenibilidad
              </li>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                PERSONALIZADO
                <br />
                Nos dedicamos a proveer el mejor servicio a nuestros clientes
              </li>
              <li style={{ borderBottom: "1px solid grey", width: "83%" }}>
                TODOS LOS TALLES
                <br />
                Creemos en el ajuste perfecto para todos
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div
        style={{
          padding: "7%",
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "row",
        }}
      >
      </div> */}
    </>
  );
};

export default Intro;
