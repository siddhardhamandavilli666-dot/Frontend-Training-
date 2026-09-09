import React from 'react'
import "./Child.css"
const Child1 = (prop) => {
  return (
    <div className="card">
      <img src={prop.pizza} alt={prop.title} />
      <h3>{prop.title}</h3>
      <p>{prop.price}</p>
      <button>Order Now</button>
    </div>
  )
}

export default Child1
