import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

// import images
import Tech1 from "../../assets/Tech1.png";
import Tech2 from "../../assets/Tech2.png";
import Marketing from "../../assets/Marketing.png";
import Marketing2 from "../../assets/Marketing2.jpg";
import Marketing3 from "../../assets/Marketing3.jpg";
import Startup1 from "../../assets/Startup1.png";
import Startup2 from "../../assets/Startup2.png";
import Startup3 from "../../assets/Startup3.jpg";
import Startup4 from "../../assets/Startup4.jpg";
import Architecture from "../../assets/Architecture.png";
import Architecture2 from "../../assets/Architecture2.jpg";
import Architecture3 from "../../assets/Architecture3.jpg";

// create an array of objects

export default function DrapContainer({ selectedTag }) {
  const images = [
    {
      id: 1,
      image: Tech1,
      tag: "Technology",
    },
    {
      id: 2,
      image: Marketing,
      tag: "Marketing",
    },
    {
      id: 3,
      image: Tech2,
      tag: "Technology",
    },
    {
      id: 4,
      image: Startup1,
      tag: "Startups",
    },
    {
      id: 5,
      image: Architecture,
      tag: "Architecture",
    },
    {
      id: 6,
      image: Startup2,
      tag: "Startups",
    },
    {
      id: 7,
      image: Startup3,
      tag: "Startups",
    },
    {
      id: 8,
      image: Architecture2,
      tag: "Architecture",
    },
    {
      id: 9,
      image: Marketing2,
      tag: "Marketing",
    },
    {
      id: 10,
      image: Startup4,
      tag: "Startups",
    },
    {
      id: 11,
      image: Architecture3,
      tag: "Architecture",
    },
    {
      id: 12,
      image: Marketing3,
      tag: "Marketing",
    },
  ];

  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredImages(images);
    } else {
      const newImages = images.filter((image) => image.tag === selectedTag);
      setFilteredImages(newImages);
    }
  }, [selectedTag]);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredImages.map((image, index) => {
          return (
            <div key={index}>
              <ImageCard image={image.image} tag={image.tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
