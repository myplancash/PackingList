import React from 'react'
import './Panel.css'

const Panel = ({title, isActive, onShow, children}) => {
  return (
     <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : <button onClick={onShow}>Show</button>
      }
    </section>
  )
}

export default Panel