"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ArrowRightIcon } from "./icons/ArrowRightIcon";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  autoPlayStartDelay?: number;
}

function clampIndex(index: number, maxIndex: number) {
  return Math.max(0, Math.min(index, maxIndex));
}

export default function ImageCarousel({
  images,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
  autoPlayStartDelay = 0,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, images.length - 1);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.style.transform = `translateX(-${activeIndex * 100}%)`;
  }, [activeIndex]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isPaused) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let intervalId = 0;

    const advance = () => {
      setActiveIndex((currentIndex) =>
        currentIndex >= maxIndex ? 0 : currentIndex + 1,
      );
    };

    const timeoutId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, autoPlayInterval);
    }, autoPlayStartDelay);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId > 0) {
        window.clearInterval(intervalId);
      }
    };
  }, [
    autoPlay,
    autoPlayInterval,
    autoPlayStartDelay,
    images.length,
    isPaused,
    maxIndex,
  ]);

  const goTo = (index: number) => {
    setActiveIndex(clampIndex(index, maxIndex));
  };

  const previous = () => {
    goTo(activeIndex - 1);
  };

  const next = () => {
    goTo(activeIndex + 1);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      className={[
        "group relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#F7F4EF_0%,#E9E0D4_100%)]",
        className ?? "",
      ].join(" ")}
    >
      <div
        ref={trackRef}
        className="flex h-full transition-transform duration-[400ms] ease-in-out"
      >
        {images.map(({ src, alt }, index) => (
          <div key={`${src}-${index}`} className="relative h-full min-w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Imagen anterior"
            disabled={activeIndex === 0}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-primary shadow-[0_8px_24px_rgba(30,30,110,.12)] opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 disabled:cursor-not-allowed disabled:opacity-0"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            disabled={activeIndex === maxIndex}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-primary shadow-[0_8px_24px_rgba(30,30,110,.12)] opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 disabled:cursor-not-allowed disabled:opacity-0"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[rgba(17,17,41,0.36)] px-3 py-2 backdrop-blur-md">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${image.src}-dot`}
                  type="button"
                  aria-label={`Ir a la imagen ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={[
                    "h-[9px] w-[9px] rounded-full transition duration-200",
                    isActive
                      ? "scale-[1.15] bg-accent"
                      : "bg-white/50 hover:bg-white/70",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
