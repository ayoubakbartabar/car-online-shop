import React , {useState} from "react";

export default function CollectionButtonCategory({
  collectionCategories,
  filteredCarCol,
}) {
  const [carColMainCategories, setCarColMainCategories] = useState("all");
  return (
    <div className="top-product-filter-product-container">
      {/* set loop for generate the categories product  */}
      {collectionCategories.map((categoriesName, index) => (
        <button
          key={index + 1}
          className={
            categoriesName === carColMainCategories
              ? "filtered-btn active"
              : "filtered-btn"
          }
          type="button"
          onClick={() => {
            setCarColMainCategories(categoriesName);
            filteredCarCol(categoriesName);
          }}
        >
          {categoriesName}
        </button>
      ))}
    </div>
  );
}
