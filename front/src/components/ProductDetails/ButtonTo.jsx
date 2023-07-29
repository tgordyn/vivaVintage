

function ButtonTo({ icon, name, onButtonClick }) {
  return (
    <button onClick={onButtonClick} className="text-white hover:bg-green-500 rounded-full px-3 py-2 w-[280px] capitalize flex items-center place-content-center gap-1 md:gap-3 hover:scale-105 transition" style={{ backgroundColor: '#212529'}}>
      {icon}{name}
    </button>
  );
}

export default ButtonTo;
