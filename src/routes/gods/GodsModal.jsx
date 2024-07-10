import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const GodsModal = ({ id, image, name, description, form }) => {
  console.log('GodsCard id: ', id)
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
    <div className="border border-[var(--primary-blue)] shadow-lg rounded-lg hover:scale-105 duration-300 hover:cursor-pointer h-[475px] bg-[var(--primary-yellow)]">
      <img
        src={image}
        alt={name}
        className="h-[400px] rounded-t-lg m-auto"
        onClick={handleImageClick}
      />
      <div className="flex justify-between px-4 py-6 bg-[var(--primary-gold)] rounded-b-lg">
        <p className="font-bold text-[var(--primary-blue)]">{name}</p>
        <p>
          <span className="bg-[var(--primary-teal)] border border-[var(--primary-blue)] text-[var(--primary-yellow)] px-4 rounded-full">
            {form}
          </span>
        </p>
      </div>
      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div
              ref={modalRef}
              className="bg-[var(--primary-gold)] p-5 rounded-xl shadow-lg max-w-[500px]"
            >
              <div className="grid grid-cols-2 mb-4">
                <div className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={name}
                    className={'p-4 mx-auto my-4 rounded-[20%] h-[300px]'}
                  />
                </div>
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <h1 className="text-2xl mb-4">{name}</h1>
                  <p className="flex justify-center">{description}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="px-4 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default GodsModal
