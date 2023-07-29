
function ImageProductSmall({image, alt, onClick}) {
  return (
    <div className="w-[150px] h-[165px] shadow rounded-lg bg-white flex place-content-center items-center cursor-pointer" >
      <img
        src={image}
        alt={alt}
        onClick={onClick}
        className="w-[140px] h-[155px] transition hover:scale-105 object-fill rounded-lg"
      />
    </div>
  );
}

export default ImageProductSmall;
