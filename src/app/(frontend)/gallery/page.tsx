"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

// Mock data representing premium woodwork items
interface GalleryItem {
  id: string;
  title: string;
  category: "chair" | "table" | "interior";
  image: string;
  description: string;
  material: string;
  dimensions: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Chairs
  {
    id: "chair-1",
    title: "The Heritage Lounge Chair",
    category: "chair",
    image: "/hero.jpeg",
    description: "Ergonomically sculpted lounge chair built with premium American Walnut and hand-stitched leather cushions.",
    material: "Solid Walnut & Leather",
    dimensions: "32\"H x 28\"W x 30\"D",
  },
  {
    id: "chair-2",
    title: "Minimalist Dining Armchair",
    category: "chair",
    image: "/hero.jpeg",
    description: "Clean lines and traditional mortise-and-tenon joinery highlight this comfortable dining companion.",
    material: "White Oak",
    dimensions: "34\"H x 22\"W x 21\"D",
  },
  {
    id: "chair-3",
    title: "Classic Workshop Rocker",
    category: "chair",
    image: "/hero.jpeg",
    description: "A reimagining of the classic rocking chair with steam-bent back splats and a perfectly balanced base.",
    material: "Cherry Wood & Maple",
    dimensions: "40\"H x 26\"W x 32\"D",
  },
  // Tables
  {
    id: "table-1",
    title: "Live-Edge Banquet Table",
    category: "table",
    image: "/hero.jpeg",
    description: "A monumental single-slab dining table showing off natural bark edges and custom blackened steel base.",
    material: "Slab Oak & Steel",
    dimensions: "30\"H x 96\"W x 42\"D",
  },
  {
    id: "table-2",
    title: "Japanese Joinery Coffee Table",
    category: "table",
    image: "/hero.jpeg",
    description: "Features intricate interlocking joints without nails or screws, expressing pure design harmony.",
    material: "Spalted Maple",
    dimensions: "16\"H x 48\"W x 24\"D",
  },
  {
    id: "table-3",
    title: "Architectural Executive Desk",
    category: "table",
    image: "/hero.jpeg",
    description: "A command center for the modern office, offering hidden brass grommets, cable routing, and soft-close drawers.",
    material: "Black Walnut & Brass",
    dimensions: "30\"H x 72\"W x 36\"D",
  },
  // Interior
  {
    id: "interior-1",
    title: "Bespoke Study & Library",
    category: "interior",
    image: "/hero.jpeg",
    description: "Floor-to-ceiling bookshelves complete with a rolling library ladder and integrated warm LED lighting.",
    material: "Stained Mahogany",
    dimensions: "Custom Architectural Fit",
  },
  {
    id: "interior-2",
    title: "Master Kitchen Cabinetry",
    category: "interior",
    image: "/hero.jpeg",
    description: "Tailored kitchen cabinet wall showcasing wood grains running continuously across drawers and cabinet fronts.",
    material: "Rift-Sawn White Oak",
    dimensions: "Custom Architectural Fit",
  },
  {
    id: "interior-3",
    title: "Geometric Wood Paneling",
    category: "interior",
    image: "/hero.jpeg",
    description: "Artistic structural wall cover made of interlocking wood slats, enhancing acoustics and visual design.",
    material: "Western Red Cedar",
    dimensions: "Custom Architectural Fit",
  },
];

type FilterType = "all" | "chair" | "table" | "interior";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredItems = activeFilter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const tabs: { label: string; value: FilterType }[] = [
    { label: "All Work", value: "all" },
    { label: "Bespoke Chairs", value: "chair" },
    { label: "Crafted Tables", value: "table" },
    { label: "Interior Spaces", value: "interior" },
  ];

  return (
    <section className="bg-white text-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary">
            <Sparkles className="size-3 text-primary animate-pulse" />
            <span>Our Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-dark leading-tight">
            Exquisite Handcrafted <br />
            <span className="font-semibold text-primary">Creations</span>
          </h1>
          <p className="text-base sm:text-lg text-dark/70 font-light leading-relaxed">
            Explore our curated catalog of custom-commissioned furniture and architectural installations, built with ancestral precision and timeless appeal.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-16 max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-dark text-white shadow-md shadow-dark/15 border-transparent cursor-default"
                    : "bg-transparent text-dark/70 border border-dark/10 hover:border-dark/30 hover:text-dark hover:bg-dark/5 cursor-pointer"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-dark/5 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-dark/5 hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-80 w-full overflow-hidden select-none bg-dark/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-white/95 backdrop-blur px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-dark/95 shadow-sm border border-dark/5">
                  {item.category}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-medium text-dark group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark/70 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Material & Spec list */}
                <div className="pt-4 border-t border-dark/5 flex flex-col gap-1.5 text-xs text-dark/65">
                  <div className="flex justify-between">
                    <span className="font-medium">Primary Wood:</span>
                    <span className="font-light">{item.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimensions:</span>
                    <span className="font-light">{item.dimensions}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Compass className="size-12 text-dark/30 mx-auto animate-spin-slow mb-4" />
            <p className="text-lg text-dark/60 font-light">No items found matching this filter.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;