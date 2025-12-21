import React, { useEffect, useRef, useState } from 'react'

const HistoryImage = ({
  id,
  image,
  title,
  description,
  width1,
  width2,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  // Normaliza width desde la API (px / %)
  const formatWidth = (val) => {
    if (!val) return '100%'
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
        className={`p-4 mx-auto my-4 rounded-[20%] hover:scale-105 transition-transform duration-500 cursor-pointer ${className}`}
        style={{ width: formatWidth(width1) }}
      />

      {/* Overlay fullscreen */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/60 z-50">
          <div
            ref={modalRef}
            className="bg-[var(--primary-gold)] p-5 rounded-xl shadow-lg max-w-[90%] md:max-w-[600px] w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex justify-center items-center">
                <img
                  src={image}
                  alt={title}
                  draggable="false"
                  className="p-4 rounded-[20%]"
                  style={{ width: formatWidth(width2) }}
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2">
                <h1 className="text-2xl mb-4 font-bold">{title}</h1>
                <p>{description}</p>
              </div>
            </div>

            <div className="flex justify-center">
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

export default HistoryImage

// import React, { useEffect, useRef, useState } from 'react'

// const HistoryImage = ({
//   id,
//   image,
//   title,
//   description,
//   width1,
//   width2,
//   className,
// }) => {
//   console.log('HistorySection id: ', id)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const modalRef = useRef(null)

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setIsModalOpen(false)
//       }
//     }

//     if (isModalOpen) {
//       document.addEventListener('mousedown', handleOutsideClick)
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick)
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick)
//     }
//   }, [isModalOpen])

//   const handleImageClick = () => {
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }

//   return (
//     <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center">
//       <img
//         src={image}
//         alt={title}
//         className={`p-4 mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-500 cursor-pointer ${className}`}
//         style={{ width: width1 }}
//         onClick={handleImageClick}
//       />
//       {isModalOpen && (
//         <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div
//             ref={modalRef}
//             className="bg-[var(--primary-gold)] p-5 rounded-xl shadow-lg max-w-[500px]"
//           >
//             <div className="grid grid-cols-2 mb-4">
//               <div className="col-span-1 flex justify-center items-center">
//                 <img
//                   src={image}
//                   alt={title}
//                   className={'p-4 mx-auto my-4 rounded-[20%]'}
//                   style={{ width: width2 }}
//                 />
//               </div>
//               <div className="col-span-1 flex flex-col items-center justify-center h-full text-center">
//                 <h1 className="text-2xl mb-4">{title}</h1>
//                 <p className="flex justify-center">{description}</p>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <button className="px-4 py-2 rounded" onClick={handleCloseModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default HistoryImage
