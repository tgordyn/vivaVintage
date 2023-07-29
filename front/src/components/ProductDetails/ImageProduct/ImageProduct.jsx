import ImageProductSmall from "./ImageProductSmall";
import { useState } from "react";

function ImageProduct({image, name}) {
  const [mainImage, setMainImage] = useState(image[0]);

  const handleSmallImageClick = (smallImage) => {
    setMainImage(smallImage);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-3xl shadow bg-white lg:w-[470px] h-[400px] md:h-[550px] flex place-content-center items-center">
        <img
          src={mainImage}
          alt={name}
          className="w-[320px] md:w-[370px] h-[370px] md:h-[500px] transition duration-300 object-fill hover:scale-105 md:hover:scale-110 rounded-3xl cursor-pointer"
        />
      </div>

      <div className="flex gap-2 justify-between">
        <ImageProductSmall image={image[0]} alt="image 1" onClick={() => handleSmallImageClick(image[0])} />
        <ImageProductSmall image={image[1]} alt="image 2" onClick={() => handleSmallImageClick(image[1])} />
        <ImageProductSmall image={image[2]} alt="image 3" onClick={() => handleSmallImageClick(image[2])} />
      </div>
    </div>
  );
}

export default ImageProduct;
