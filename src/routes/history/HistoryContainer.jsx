import React, { useState } from 'react'
import { dataHistory } from '../../data/dataHistory'
import HistoryText from './HistoryText'
import HistoryImage from './HistoryImage'

const HistoryContainer = () => {
  const [sections] = useState(dataHistory)

  return (
    <div className="m-8">
      {sections.map((item) => (
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-12">
          {item.id % 2 !== 0 ? (
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
