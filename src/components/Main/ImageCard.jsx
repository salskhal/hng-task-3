import React from "react";

export default function ImageCard({ image, tag }) {
  return (
    <div className="bg-white cursor-drop">
      <div className="w-full bg-cover bg-center rounded-xl overflow-hidden">
        <img src={image} alt="" className="h-full w-full" />
      </div>

      <span
        className="block bg-[#DCFCE7] rounded-full px-4 py-1 text-sm font-semibold text-[#22C55E] mt-5"
        style={{ width: "fit-content" }}
      >
        <p>{tag}</p>
      </span>
    </div>
  );
}
