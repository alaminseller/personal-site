import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ModernHeader from "@/components/modern/Header";
import ProfessionalFooter from "@/components/professional/Footer";

// Gallery Items Data
const GALLERY_ITEMS = [
  { id: 1, src: "/hero-1.png", category: "Project Work", title: "Digital Solutions" },
  { id: 2, src: "/hero-4.png", category: "Project Work", title: "Development Setup" },
  { id: 3, src: "/hero-5.png", category: "Seminars & Events", title: "Client Consultation" },
  { id: 4, src: "/hero-2.png", category: "Work Environment", title: "Office Space" },
  { id: 5, src: "/hero-3.png", category: "Work Environment", title: "Deep Work Session" },
];

const CATEGORIES = ["All", "Project Work", "Seminars & Events", "Work Environment"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images
  const filteredImages = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Modal Handlers
  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 flex flex-col">
      <ModernHeader />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4">
              Gallery & Work Highlights
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              A visual showcase of my recent projects, professional environments, and collaborative activities.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors
                  ${activeCategory === category 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" 
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout (Mobile: 2 cols, Desktop: 3 cols) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openModal(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="aspect-square sm:aspect-[4/3] w-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Minimal Overlay for context on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/70 text-xs">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <ProfessionalFooter />

      {/* Fullscreen Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button 
            onClick={prevImage}
            className="absolute left-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image View */}
          <div className="w-full max-w-5xl px-4 sm:px-12 flex flex-col items-center">
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking image
            />
            <div className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold">{filteredImages[selectedImageIndex].title}</h3>
              <p className="text-white/60 text-sm mt-1">{filteredImages[selectedImageIndex].category}</p>
            </div>
            
            {/* Mobile Navigation controls below image */}
            <div className="flex gap-8 mt-6 sm:hidden" onClick={(e) => e.stopPropagation()}>
               <button onClick={prevImage} className="p-3 text-white/70 bg-white/10 rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImage} className="p-3 text-white/70 bg-white/10 rounded-full">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation - Next */}
          <button 
            onClick={nextImage}
            className="absolute right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
