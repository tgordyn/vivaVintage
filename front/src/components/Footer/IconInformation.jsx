import React from "react";

function IconInformation({icon, name}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center">
      <div className="bg-white p-2 rounded-full text-[#212429]">
        {icon}
      </div>
      <span className="text-xs md:text-base">{name}</span>
    </div>
  );
}

export default IconInformation;
