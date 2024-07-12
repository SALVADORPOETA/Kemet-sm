import React, { useEffect, useState } from 'react'
import GodsModal from './GodsModal'
import axios from 'axios'

const GodsCards = () => {
  const [gods, setGods] = useState([])
  const [allGods, setAllGods] = useState([])

  useEffect(() => {
    const apiURL = 'https://kemet-api-sm.vercel.app/gods'
    axios
      .get(apiURL)
      .then((response) => {
        setGods(response.data)
        setAllGods(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
      })
  }, [])

  const filterType = (form) => {
    setGods(
      allGods.filter((item) => {
        return item.form === form
      })
    )
  }

  return (
    <div className="mt-[90px] bg-[var(--primary-beige)]">
      <div className="max-w-[1240px] m-auto px-4 py-12">
        <h1 className="text-[var(--primary-blue)] font-bold text-4xl text-center">
          Egyptian Gods
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Filter Type */}
          <div>
            <p className="text-xl font-bold text-[var(--primary-blue)] m-4">
              Filter Type
            </p>
            <div className="flex justify-between max-w-[640px] flex-wrap">
              <button
                onClick={() => setGods(allGods)}
                className="m-1 px-3 py-1"
              >
                All
              </button>
              <button
                onClick={() => filterType('Male')}
                className="m-1 px-3 py-1"
              >
                Male
              </button>
              <button
                onClick={() => filterType('Female')}
                className="m-1 px-3 py-1"
              >
                Female
              </button>
              <button
                onClick={() => filterType('Both')}
                className="m-1 px-3 py-1"
              >
                Both
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {gods.map((item) => (
            <GodsModal
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              form={item.form}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GodsCards
