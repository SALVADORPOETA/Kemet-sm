import React from 'react'
import { dataGods } from '../../data/dataGods'

const GodsContainer = () => {
  return (
    <div className="mt-[90px] bg-[var(--primary-beige)]">
      <div className="max-w-[1240px] m-auto px-4 py-12">
        <h1 className="text-[var(--primary-blue)] font-bold text-4xl text-center">
          Egyptian Gods
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {dataGods.map((item) => (
            <div className="border border-[var(--primary-blue)] shadow-lg rounded-lg hover:scale-105 duration-300 h-[475px] bg-[var(--primary-yellow)]">
              <img
                src={item.image}
                alt={item.name}
                className="h-[400px] rounded-t-lg m-auto"
              />
              <div className="flex justify-between px-4 py-6 bg-[var(--primary-gold)] rounded-b-lg">
                <p className="font-bold text-[var(--primary-blue)]">
                  {item.name}
                </p>
                <p>
                  <span className="bg-[var(--primary-teal)] border border-[var(--primary-blue)] text-[var(--primary-yellow)] p-1 rounded-full">
                    {item.form}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GodsContainer
