import "./SingleCategory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import Loading from "../../components/Loading";
import ProductCard from "../../components/Card/Card";
import RadioBtn from "../../components/RadioBtn";
import FilterSelect from "../../components/FilterSelect";
import { capitalizeFirstLetter } from "../../utils/constants";

const SingleCategory = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(() => {
    const storedGender = localStorage.getItem("gender");
    return storedGender || "all";
  });
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("order");
    return storedOrder || "Menor Precio";
  });
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cat } = useParams();
  let selectedCategory;
  const formattedName = capitalizeFirstLetter(cat);

  if (cat === "pantalones") {
    selectedCategory = "pants";
  } else if (cat === "camisas-remeras") {
    selectedCategory = "shirts";
  } else if (cat === "sombreros") {
    selectedCategory = "hats";
  } else if (cat === "camperas") {
    selectedCategory = "jackets";
  } else if (cat === "accesorios") {
    selectedCategory = "accessories";
  } else if (cat === "calzados") {
    selectedCategory = "shoes";
  }

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setGender(selectedGenre);
  };

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    getCategoryProduct();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const filtered = productData.filter((product) => {
      if (gender === "all") {
        // Mostrar todos los productos sin importar el género
        return product.category === selectedCategory;
      } else {
        // Filtrar por género seleccionado
        return (
          product.category === selectedCategory && product.clothing === gender
        );
      }
    });
    console.log(filtered, "filtrado");
    if (order === "Menor Precio") {
      filtered.sort((a, b) => a.price - b.price);
    }
    if (order === "Mayor Precio") {
      filtered.sort((a, b) => b.price - a.price);
    }
    if (order === "Mejor Ranking") {
      filtered.sort((a, b) => b.star - a.star);
    }
    if (order === "Menor Ranking") {
      filtered.sort((a, b) => a.star - b.star);
    }
    setFilteredProducts(filtered);
  }, [productData, selectedCategory, gender, order]);

  useEffect(() => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("order", order);
    
  }, [gender, order]);

  const getCategoryProduct = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        //`https://apimocha.com/vivavintage/products`
        `https://backvivavintage.azurewebsites.net/product`
        //`http://localhost:9090/product`
      );

      setIsLoading(false);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loading = isLoading ? (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingLeft: 10,
        paddingBottom: 20,
      }}
    >
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </Container>
  ) : (
    ""
  );
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          paddingTop: "90px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-12">
            <h2
              className="display-5 text-center"
              style={{ marginBottom: "2%" }}
            >
              {formattedName}
            </h2>
            <hr />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "0 5%",
          }}
        >
          <RadioBtn onChange={handleGenreChange} gender={gender} />
          <FilterSelect handleChange={handleChange} order={order} />
        </div>

        {loading}
        <Container
          maxWidth="xl"
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: 20,
            marginBottom: 30,
            width: "100%",
          }}
        >
          {filteredProducts.map((prod) => (
            <ProductCard prod={prod} cat={cat} key={prod.id} />
          ))}
        </Container>
      </Container>
    </>
  );
};

export default SingleCategory;
