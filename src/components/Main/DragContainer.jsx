import React from "react";
import ImageCard from "./ImageCard";

// import images
import Tech1 from "../../assets/Tech1.png";
import Tech2 from "../../assets/Tech2.png";
import Marketing from "../../assets/Marketing.png";
import Startup1 from "../../assets/Startup1.png";
import Startup2 from "../../assets/Startup2.png";
import Architecture from "../../assets/Architecture.png";

// create an array of objects
const images = [
  {
    image: Tech1,
    tag: "Tech",
  },
  {
    image: Marketing,
    tag: "Marketing",
  },
  {
    image: Tech2,
    tag: "Tech",
  },
  {
    image: Startup1,
    tag: "Startup",
  },
  {
    image: Architecture,
    tag: "Architecture",
  },
  {
    image: Startup2,
    tag: "Startup",
  },
];

export default function DrapContainer() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {images.map((image, index) => {
          return <ImageCard key={index} image={image.image} tag={image.tag} />;
        })}
      </div>
    </div>
  );
}
