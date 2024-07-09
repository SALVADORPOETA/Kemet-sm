import React from 'react'
import KemetMeaning from './KemetMeaning'

const HomeText = ({ id, section, p1, p2 }) => {
  return (
    <div className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col justify-center">
      <>
        <p className="mt-8 font-bold text-4xl">{section}</p>
        <p className="mt-4">{p1}</p>
        <p className="mt-4">{p2}</p>
        {id === 1 ? (
          <div className="flex justify-center items-center md:hidden mt-4">
            <KemetMeaning />
          </div>
        ) : null}
      </>
    </div>
  )
}

export default HomeText
