import React, { useEffect, useState } from 'react'
import GodsModal from './GodsModal'

const GodsCards = () => {
  const [gods, setGods] = useState([])
  const [allGods, setAllGods] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://apis-repository-sm.vercel.app/api/kemet/gods'
        )
        if (!res.ok) {
          throw new Error('Error fetching data')
        }
        const data = await res.json()
        const sorted = data.sort((a, b) => a.idNum - b.idNum)
        setGods(sorted)
        setAllGods(sorted)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-t-[var(--primary-blue)] border-gray-200 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    )
  }

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
              key={item.idNum}
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
