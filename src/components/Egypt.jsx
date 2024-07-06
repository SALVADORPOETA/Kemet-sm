import React, { useState } from 'react'
import Modal from './Modal'
import { dataEgypt } from '../data/dataEgypt'

const Egypt = () => {
  const [sections] = useState(dataEgypt)

  return (
    <div className="m-8">
      {sections.map((item) => (
        <Modal
          key={item.id}
          id={item.id}
          section={item.section}
          p1={item.p1}
          p2={item.p2}
          image={item.image}
          title={item.title}
          description={item.description}
          height1={item.height1}
          height2={item.height2}
        />
      ))}
    </div>
  )
}

export default Egypt
