import { useState } from "react";
import manifest from "../../public/gallery/manifest.json";

const base = import.meta.env.BASE_URL;

type GalleryItem = { file: string; alt: string };

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items: GalleryItem[] = manifest;

  const getSrc = (item: GalleryItem) => `${base}gallery/${item.file}`;

  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) =>
      i !== null ? (i - 1 + items.length) % items.length : null,
    );
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % items.length : null));

  return (
    <section id="gallery" className="py-24 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
          Галерея
        </h2>
        <p className="text-[#6b6b6b] mb-14 max-w-xl">Примеры наших работ.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <button
              key={item.file}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a96e]"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={getSrc(item)}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            className="absolute top-4 right-6 text-white/70 hover:text-white text-3xl font-light"
            onClick={close}
            aria-label="Закрыть"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-4 py-2"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Назад"
          >
            ‹
          </button>
          <img
            src={getSrc(items[lightbox])}
            alt={items[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-4 py-2"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Вперёд"
          >
            ›
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightbox + 1} / {items.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
