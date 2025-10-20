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
    const interval = setInterval(() => nextSlide(), 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex)

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Contenedor deslizante */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((url, index) => (
          <div
            key={index}
            className="min-w-full h-full flex-shrink-0 flex justify-center items-center bg-black"
          >
            {/* Contenedor con proporción máxima 38:18 */}
            <div
              className="relative w-full max-w-[1600px]"
              style={{ aspectRatio: '38 / 18' }}
            >
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Flecha derecha */}
      <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
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
