import React, { useEffect, useState } from 'react'
import HistoryText from './HistoryText'
import HistoryImage from './HistoryImage'

const HistoryContainer = () => {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://apis-repository-sm.vercel.app/api/kemet/history'
        )
        if (!res.ok) {
          throw new Error('Error fetching data')
        }
        const data = await res.json()
        const sorted = data.sort((a, b) => a.idNum - b.idNum)
        setSections(sorted)
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

  return (
    <div className="m-8">
      {sections.map((item) => (
        <div key={item.idNum} className="grid grid-cols-1 md:grid-cols-12">
          {item.idNum % 2 !== 0 ? (
            <>
              <HistoryText section={item.section} p1={item.p1} p2={item.p2} />
              <HistoryImage
                image={item.image}
                title={item.title}
                description={item.description}
                width1={item.width1}
                width2={item.width2}
              />
            </>
          ) : (
            <>
              <HistoryImage
                image={item.image}
                title={item.title}
                description={item.description}
                width1={item.width1}
                width2={item.width2}
                className="hidden md:flex"
              />
              <HistoryText section={item.section} p1={item.p1} p2={item.p2} />
              <HistoryImage
                image={item.image}
                title={item.title}
                description={item.description}
                width1={item.width1}
                width2={item.width2}
                className="flex md:hidden"
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default HistoryContainer
