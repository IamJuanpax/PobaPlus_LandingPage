"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/1.jpg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpg',
  '/images/6.jpeg',
  '/images/7.jpg',
  '/images/8.jpeg',
  '/images/9.jpeg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpeg',
  '/images/13.jpeg',
  '/images/14.jpeg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      // Adjust scroll calculation depending on screen size for centering
      const container = scrollContainerRef.current;
      const child = container.children[index];
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - (container.offsetWidth / 2) + (child.offsetWidth / 2),
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % images.length;
    scrollTo(newIndex);
  };

  const prev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    scrollTo(newIndex);
  };

  // Handle manual scroll to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const centerPosition = scrollLeft + container.offsetWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(childCenter - centerPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    };

    // Debounce scroll event slightly for performance
    let timeoutId;
    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [currentIndex]);


  return (
    <section className="scroll-mt-24 overflow-hidden py-12">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          Interfaz <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Intuitiva</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Diseñada con el profesional de salud en mente, ofreciendo flujos rápidos y sin fricción.
        </p>
      </div>

      <div className="relative max-w-[100vw] -mx-4 sm:mx-auto sm:max-w-7xl">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/80 backdrop-blur border border-zinc-700 text-zinc-300 p-3 rounded-full hover:bg-zinc-800 hover:text-white transition-all shadow-xl hidden md:block"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={next}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/80 backdrop-blur border border-zinc-700 text-zinc-300 p-3 rounded-full hover:bg-zinc-800 hover:text-white transition-all shadow-xl hidden md:block"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-[10vw] sm:px-[20vw] lg:px-[30vw] py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <div 
                key={index}
                className={`shrink-0 snap-center transition-all duration-500 ease-out cursor-pointer ${
                  isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 hover:opacity-60'
                }`}
                onClick={() => scrollTo(index)}
              >
                {/* Phone Frame */}
                <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[2rem] border-[6px] border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-5 bg-zinc-800 rounded-b-2xl w-1/2 mx-auto z-20"></div>
                  <Image
                    src={src}
                    alt={`PobaPlus UI Screen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 260px, 280px"
                  />
                  {isActive && (
                     <div className="absolute inset-0 ring-2 ring-cyan-500/50 rounded-[1.7rem] pointer-events-none z-30"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Global styles to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
