import React, { useEffect, useRef, useState } from 'react'

const Modal = ({
  id,
  section,
  p1,
  p2,
  image,
  title,
  description,
  height1,
  height2,
}) => {
  console.log('Modal id: ', id)
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

  if (id === 1) {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 md:col-span-7 lg:col-span-8">
            <p className="mt-8 font-bold text-4xl">{section}</p>
            <p className="mt-4">{p1}</p>
            <p className="mt-4">{p2}</p>
            <div className="hidden lg:flex justify-center items-center mt-4">
              <p className="mt-auto inline justify-center items-center bg-[var(--primary-yellow)] p-5 rounded-md border-2 border-[var(--primary-red)]">
                <span className="text-[var(--primary-red)] font-bold m-1">
                  Kemet
                </span>
                was the name used by the ancient egyptians to call their
                country.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className={
                'p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-500 cursor-pointer'
              }
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
                    <div className="col-span-1">
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
                    <button
                      className="text-white px-4 py-2 rounded"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center lg:hidden mt-4">
          <p className="mt-auto inline justify-center items-center bg-[var(--primary-yellow)] p-5 rounded-md border-2 border-[var(--primary-red)]">
            <span className="text-[var(--primary-red)] font-bold m-1">
              Kemet
            </span>
            was the name used by the ancient egyptians to call their country.
          </p>
        </div>
      </div>
    )
  } else if (id % 2 === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className={
              'p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-500 cursor-pointer'
            }
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
                  <div className="col-span-1">
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
                  <button
                    className="text-white px-4 py-2 rounded"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">{section}</p>
          <p className="mt-4">{p1}</p>
          <p className="mt-4">{p2}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">{section}</p>
          <p className="mt-4">{p1}</p>
          <p className="mt-4">{p2}</p>
        </div>
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className={
              'p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-500 cursor-pointer'
            }
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
                  <div className="col-span-1">
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
                  <button
                    className="text-white px-4 py-2 rounded"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Modal
