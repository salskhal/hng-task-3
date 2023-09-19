import React, { useState, useEffect } from "react";

const tags = ["All", "Technology", "Startups", "Architecture", "Development"];

export default function TagFilter() {
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
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
    </div>
  );
}
