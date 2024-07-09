import React from 'react'

const HistoryText = ({ section, p1, p2 }) => {
  return (
    <div className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col justify-center">
      <h1 className="mt-8 font-bold text-4xl">{section}</h1>
      <p className="mt-4">{p1}</p>
      <p className="mt-4">{p2}</p>
    </div>
  )
}

export default HistoryText
