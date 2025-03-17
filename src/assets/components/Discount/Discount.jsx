import React from 'react'
import './Discount.css'
export default function Discount() {
  return (
    <section className='discount-container'>
        <div className="discount-details-container">
            <h3 className="discount-title">new mercedes</h3>
            <p className="discount-paragraph">you can save up 20 %</p>
        </div>
        <img className="discount-image" src="public/image/discount-image.png" alt="new car"/>
        <img className="discount-image-max-width-750" src="public/image/discount-image.png" alt="new car"/>
    </section>
  )
}
