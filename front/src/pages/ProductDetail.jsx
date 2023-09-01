import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Rating } from "@mui/material";
//import { BsHeart } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Loading from "../components/Loading";
import ImageProduct from "../components/ProductDetails/ImageProduct/ImageProduct";
import Size from "../components/ProductDetails/Size/Size";
import ShippingCard from "../components/ProductDetails/ShippingCard/ShippingCard";
import ButtonSize from "../components/ProductDetails/Size/ButtonSize";
import Quantity from "../components/ProductDetails/Quantity/Quantity";
import ButtonTo from "../components/ProductDetails/ButtonTo";
import { addCart } from "../redux/action/index";
import { toast } from "react-toastify";
import Review from "../components/ProductDetails/ProductReview/Review";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const rating = Math.floor(Math.random() * 5) + 1;
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  //agregar a carrito
  const handleAddToCart = () => {
    if (selectedSize === "") {
      toast.error(
        "Por favor, selecciona una talla antes de agregar al carrito.",
        {
          position: "top-center",
          autoClose: 1200,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }
    addProduct(product, selectedQuantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
    console.log(selectedQuantity, "cantidad");
  };

  const addProduct = (prod, quantity) => {
    const addProductRecursive = (remainingQuantity) => {
      if (remainingQuantity > 0) {
        dispatch(addCart(prod));
        addProductRecursive(remainingQuantity - 1);
      }
    };

    addProductRecursive(quantity);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          //`https://backvivavintage.azurewebsites.net/product`
          `https://apimocha.com/vivavintage/products`
        );

        const productData = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex place-content-center py-40 lg:py-28">
        <Loading />
      </div>
    );
  }

  let sizes = [];
  if (
    product.category === "pants" ||
    product.category === "hats" ||
    product.category === "shirts" ||
    product.category === "jackets"
  ) {
    sizes = ["xs", "s", "m", "l", "xl"];
  } else if (product.category === "shoes") {
    sizes = ["37", "38", "39", "40", "41", "42"];
  } else if (product.category === "accessories") {
    sizes = ["10x10", "16x10", "22x10"];
  }

  return (
    <>
      <div className="py-5 px-3 lg:px-40">
        <div className="flex flex-col lg:flex-row gap-10 font-serif place-content-center">
          <ImageProduct
            image={product.image}
            name={product.name}
          />

          <div className="flex flex-col gap-[20px]">
            <Rating
              precision={0.5}
              name="read-only"
              sx={{ color: "#212429" }}
              value={product.star ? product.star : rating}
              readOnly
            />
            <div className="flex justify-between items-center gap-5 md:gap-20">
              <h1 className="text-2xl md:text-4xl uppercase font-semibold w-[500px]">
                {product.name}
              </h1>
              {/* <BsHeart
                size={20}
                className="hover:text-rose-600 transition cursor-pointer"
              /> */}
            </div>
            <p className="text-xl text-[#828282] md:w-[490px]">
              {product.description}
            </p>
            <strong className="text-xl md:text-2xl font-bold font-mont">
              ${product.price} USD
            </strong>

            <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize}>
              {sizes.map((size) => (
                <ButtonSize key={size} size={size} />
              ))}
            </Size>
            <ShippingCard />
            <Quantity
              price={product.price}
              onQuantityChange={handleQuantityChange}
            />
            <div className="flex flex-wrap place-content-center md:place-content-start gap-4 pt-10">
              <ButtonTo
                icon={<MdOutlineAddShoppingCart size={20} />}
                name="agregar al carrito"
                onButtonClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
        <Review />
      </div>
    </>
  );
}
