import React from "react";

function InfoShipping({ icon, info1, info2 }) {
  return (
    <div className="flex items-center gap-4 font-mont">
      <div className="bg-white rounded-full p-1">{icon}</div>
      <div className="text-xs md:text-[15px]">
        <p>{info1}</p>
        <p>{info2}</p>
      </div>
    </div>
  );
}

export default InfoShipping;
