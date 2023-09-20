import React, { useEffect } from "react";
import "./ImageCard.css";

export default function ImageCard({ image, tag, dragging, setDragging }) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          element.classList.add("fade-in-visible");
        } else {
          element.classList.remove("fade-in-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white cursor-drop image-card fade-in cursor-grab">
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
