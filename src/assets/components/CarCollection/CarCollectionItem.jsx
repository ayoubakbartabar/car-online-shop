import React from 'react'

export default function CarCollectionItem({carCollectionItem}) {
  return (
    <div className="products-container">
    {carCollectionItem.map((product) => {
      return (
        <div key={product.id} className="product-box">
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
          <div className="product-box-footer">
            <h3 className="product-name">{product.title}</h3>
            <p className="product-price">{product.price} $</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}
