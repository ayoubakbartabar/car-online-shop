import React, { useState } from "react";
import './CarCollection.css'
import { CarCollectionProducts } from "./CarCollectionData";
import CollectionButtonCategory from "./CollectionButtonCategory";
import CarCollectionItem from "./CarCollectionItem";
// create new array for categories with new SET
const allCollectionCategories = [
  "all",
  ...new Set(CarCollectionProducts.flatMap((product) => product.categories)),
];

export default function CarCollection() {
  // set hook
  const [collectionCategories, setCollectionCategories] = useState(
    allCollectionCategories
  );
  const [carCollectionItem, setCarCollectionItem] = useState(
    CarCollectionProducts
  );
  const filteredCarCol = (category) => {
    if (category === "all") {
      setCarCollectionItem(CarCollectionProducts);
      return;
    }
    // set filter method
    const filteredCarColMenu = CarCollectionProducts.filter(
      (datas) => datas.categories === category
    );
    setCarCollectionItem(filteredCarColMenu);
  };

  return (
    <section className="car-collection-container">
      <div className="car-collection-header">
        <div className="car-collection-title-container">
          <h2 className="car-collection-title">Car Collection</h2>
          <p className="car-collection-paragraph">
            our new car collection for you
          </p>
        </div>
        <CollectionButtonCategory
          collectionCategories={collectionCategories}
          filteredCarCol={filteredCarCol}
        />
      </div>

      <CarCollectionItem carCollectionItem={carCollectionItem} />
    </section>
  );
}
