import React, { useState, useEffect, useRef } from "react";
import NewDragContainer from "./NewDragContainer";

const tags = ["All", "Technology", "Startups", "Architecture", "Marketing"];

export default function GalleryContainer() {
  const [selectedTag, setSelectedTag] = useState("All");
  

  return (
    <div className="py-20 px-10 md:px-20">
      <div id="gallery" className="flex flex-wrap gap-2 items-center">
        <p
          className="text-gray-500 text-sm font-medium"
        >
          Filter by:{" "}
        </p>
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-500"
              style={{
                backgroundColor:
                  selectedTag === tag ? "#22C55E" : "transparent",
                color: selectedTag === tag ? "#fff" : "",
              }}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {/* <DragContainer selectedTag={selectedTag} /> */}
      <NewDragContainer selectedTag={selectedTag} />
    </div>  
  );
}
