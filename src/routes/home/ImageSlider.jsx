import React, { useCallback, useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import sphinx from '../../assets/Sphinx.jpg'
import pharaoh from '../../assets/Pharaoh.jpg'
import daily from '../../assets/Daily.jpg'
import abusimbel from '../../assets/Abusimbel.jpg'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
  const slides = [
    {
      url: sphinx,
      title: 'slide1',
    },
    {
      url: pharaoh,
      title: 'slide2',
    },
    {
      url: abusimbel,
      title: 'slide3',
    },
    {
      url: daily,
      title: 'slide4',
    },
  ]

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="w-full h-full relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {' '}
      </div>
      {/* left arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* rigth arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex
                ? 'text-[var(--primary-blue)]'
                : 'text-[var(--primary-red)]'
            }`}
            key={slideIndex}
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
