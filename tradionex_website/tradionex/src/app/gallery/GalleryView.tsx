"use client";

import { useState } from "react";

type GalleryImage = {
  id: string;
  title: string | null;
  imageUrl: string;
  category: string | null;
};

export default function GalleryView({ initialImages }: { initialImages: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Minerals", "Spices", "Infrastructure", "Events"];

  const filteredImages = initialImages.filter((img) => {
    if (activeFilter === "All") return true;
    return img.category === activeFilter;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Our Gallery</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            A visual journey through our mining operations, processing facilities, and premium natural resources.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === cat 
                  ? "bg-black dark:bg-white text-white dark:text-black" 
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredImages.length === 0 ? (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          No images found for this category.
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((img) => (
            <div key={img.id} className="relative rounded-2xl overflow-hidden group break-inside-avoid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img.imageUrl} 
                alt={img.title || "Gallery item"} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm drop-shadow-md">
                  {img.title || img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
