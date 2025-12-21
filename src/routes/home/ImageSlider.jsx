import React, { useCallback, useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import sphinx from '../../assets/Sphinx.jpg'
import pharaoh from '../../assets/Pharaoh.jpg'
import daily from '../../assets/Daily.jpg'
import abusimbel from '../../assets/Abusimbel.jpg'

const ImageSlider = () => {
  const slides = [sphinx, pharaoh, abusimbel, daily]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex)

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* TRACK */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((url, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              draggable="false"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white cursor-pointer hover:bg-black/70 transition"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white cursor-pointer hover:bg-black/70 transition"
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots — SIN CAMBIOS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/80 rounded-lg px-2 py-1">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex
                ? 'text-[var(--primary-blue)]'
                : 'text-[var(--primary-red)]'
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
