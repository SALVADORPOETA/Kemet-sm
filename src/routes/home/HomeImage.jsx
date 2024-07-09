import React, { useEffect, useRef, useState } from 'react'

const HomeImage = ({
  id,
  image,
  title,
  description,
  height1,
  height2,
  className,
}) => {
  console.log('HomeSection id: ', id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isModalOpen])

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className={`p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-500 cursor-pointer ${className}`}
        style={{ height: height1 }}
        onClick={handleImageClick}
      />
      {isModalOpen && (
        <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-[var(--primary-gold)] p-5 rounded-xl shadow-lg max-w-[500px]"
          >
            <div className="grid grid-cols-2 mb-4">
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src={image}
                  alt={title}
                  className={'p-4 mx-auto my-4 rounded-[20%]'}
                  style={{ height: height2 }}
                />
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-2xl mb-4">{title}</h1>
                <p>{description} </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeImage
