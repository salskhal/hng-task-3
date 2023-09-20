import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import ImageCard from "./ImageCard";

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

const SortableItem = ({ image }) => {

  const [dragging, setDragging] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  // const style = {
  //   transition,
  //   transform: CSS.Transform.toString(transform),
  // };

  // give a proper style
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: dragging ? 1 : 0,
    boxShadow: dragging ? "0 0 0.5rem rgba(0, 0, 0, 0.5)" : "none",
  };

  return (
    <div
      className="bg-white cursor-drop cursor-grab"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="w-full bg-cover bg-center rounded-xl overflow-hidden">
        <img src={image.image} alt="" className="h-full w-full" />
      </div>
      <span
        className="block bg-[#DCFCE7] rounded-full px-4 py-1 text-sm font-semibold text-[#22C55E] mt-5"
        style={{ width: "fit-content" }}
      >
        <p>{image.tag}</p>
      </span>
    </div>
  );
};

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
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredImages(images);
    } else {
      const newImages = images.filter((image) => image.tag === selectedTag);
      setFilteredImages(newImages);
    }
  }, [selectedTag]);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setFilteredImages((images) => {
        const oldIndex = images.findIndex((image) => image.id === active.id);
        const newIndex = images.findIndex((image) => image.id === over.id);

        return arrayMove(images, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext
        items={filteredImages}
        strategy={verticalListSortingStrategy}
      >
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredImages.map((image, index) => {
              return (
                <div key={index}>
                  <SortableItem image={image} />
                </div>
              );
            })}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
