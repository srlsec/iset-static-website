'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { GALLERY_IMAGES, type GalleryImage } from '@/lib/gallery-images';

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected, close]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(item)}
            className={`rounded-[10px] overflow-hidden relative bg-navy aspect-[4/3] cursor-pointer text-left p-0 border-0 ${
              item.wide ? 'sm:col-span-2 sm:aspect-[16/7]' : ''
            } ${item.tall ? 'lg:row-span-2 lg:aspect-auto lg:min-h-[320px] max-lg:aspect-[4/3] max-lg:min-h-0' : ''}`}
            aria-label={`View full image: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes={
                item.wide
                  ? '(max-width: 640px) 100vw, 66vw'
                  : item.tall
                    ? '(max-width: 1024px) 50vw, 33vw'
                    : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[1200] bg-black/90"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/20 transition-colors duration-250"
            aria-label="Close image viewer"
          >
            ×
          </button>
          <div className="flex items-center justify-center w-full h-full p-4 pt-20 md:p-8 md:pt-8 pointer-events-none">
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1600}
              height={1200}
              className="pointer-events-auto max-w-full max-h-[85vh] w-auto h-auto object-contain"
              sizes="100vw"
              priority
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
