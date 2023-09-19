import React from "react";
import TagFilter from "./TagFilter";
import DragContainer from "./DragContainer";

export default function GalleryContainer() {
  return (
    <div className="py-20 px-10 md:px-20">
      <TagFilter />
      <DragContainer />
    </div>
  );
}
