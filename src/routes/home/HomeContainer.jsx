import React, { useEffect, useState } from 'react'
import HomeText from './HomeText'
import HomeImage from './HomeImage'
import KemetMeaning from './KemetMeaning'

const HomeContainer = () => {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://apis-repository-sm.vercel.app/api/kemet/home'
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
              <HomeText
                id={item.idNum}
                section={item.section}
                p1={item.p1}
                p2={item.p2}
              />
              <HomeImage
                image={item.image}
                title={item.title}
                description={item.description}
                height1={item.height1}
                height2={item.height2}
              />
              {item.idNum === 1 && (
                <div className="hidden md:grid col-span-12 justify-center items-center mt-4">
                  <KemetMeaning />
                </div>
              )}
            </>
          ) : (
            <>
              <HomeImage
                image={item.image}
                title={item.title}
                description={item.description}
                height1={item.height1}
                height2={item.height2}
                className="hidden md:flex"
              />
              <HomeText
                id={item.idNum}
                section={item.section}
                p1={item.p1}
                p2={item.p2}
              />
              <HomeImage
                image={item.image}
                title={item.title}
                description={item.description}
                height1={item.height1}
                height2={item.height2}
                className="flex md:hidden"
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default HomeContainer
