import React, { useState } from 'react'
import { dataEgypt } from '../../data/dataEgypt'
import HomeText from './HomeText'
import HomeImage from './HomeImage'
import KemetMeaning from './KemetMeaning'

const HomeContainer = () => {
  const [sections] = useState(dataEgypt)

  return (
    <div className="m-8">
      {sections.map((item) => (
        <>
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-12">
            {item.id % 2 !== 0 ? (
              <>
                <>
                  <HomeText
                    id={item.id}
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
                </>
                {item.id === 1 ? (
                  <div className="hidden md:grid col-span-12 justify-center items-center mt-4">
                    <KemetMeaning />
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <HomeImage
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  height1={item.height1}
                  height2={item.height2}
                  className="hidden lg:flex"
                />
                <HomeText
                  key={item.id}
                  id={item.id}
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
                  className="flex lg:hidden"
                />
              </>
            )}
          </div>
        </>
      ))}
    </div>
  )
}

export default HomeContainer
