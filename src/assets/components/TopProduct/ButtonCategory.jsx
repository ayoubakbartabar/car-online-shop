import React, { useState } from "react";

export default function ButtonCategory({ productCategory, filterProduct }) {
  // set hook
  const [mainCategory, setMainCategory] = useState("all");
  return (
    <div className="top-product-filter-product-container">
      {/* set loop for generate the categories product  */}
      {productCategory.map((categoriesName, index) => (
        <button
          key={index + 1}
          className={
            categoriesName === mainCategory ? "filtered-btn active" : "filtered-btn"
          }
          type="button"
          onClick={() => {
            setMainCategory(categoriesName);
            filterProduct(categoriesName);
          }}
        >
          {categoriesName}
        </button>
      ))}
    </div>
  );
}
