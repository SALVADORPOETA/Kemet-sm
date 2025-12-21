import React, { useEffect, useRef, useState } from 'react'

const HomeImage = ({
  image,
  title,
  description,
  width1,
  width2,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  // Función auxiliar para formatear el ancho
  const formatWidth = (val) => {
    if (!val) return '100%'
    // Si ya tiene unidad (px o %), lo deja igual, si no, agrega px
    return String(val).match(/[a-zA-Z%]/) ? val : `${val}px`
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isModalOpen])

  return (
    <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center">
      {/* Imagen principal */}
      <img
        src={image}
        alt={title}
        draggable="false"
        onClick={() => setIsModalOpen(true)}
        className={`h-auto p-4 mx-auto my-4 rounded-[20%] hover:scale-105 transition-transform duration-500 cursor-pointer ${className}`}
        style={{
          width: formatWidth(width1),
        }}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 top-[0] flex items-center justify-center bg-gray-900/60 z-50">
          <div
            ref={modalRef}
            className="bg-[var(--primary-gold)] p-5 rounded-xl shadow-lg max-w-[90%] md:max-w-[600px] w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
              <div className="flex justify-center items-center">
                <img
                  src={image}
                  alt={title}
                  draggable="false"
                  className="h-auto p-4 rounded-[20%]"
                  style={{
                    width: formatWidth(width2),
                  }}
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2">
                <h1 className="text-2xl mb-4 font-bold">{title}</h1>
                <p>{description}</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeImage
