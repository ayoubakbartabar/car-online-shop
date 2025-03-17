import React, { useState } from "react";
import "./SpecialProduct.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SpecialProductItems from "./SpecialProductItems";
import specialProducts from "../SpecialProduct/SpecialProductData";

export default function SpecialProduct() {
  // set Hook
  const [specialItems, setSpecialItem] = useState(specialProducts);

  // set hook for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // patination problem
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = specialItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(specialItems.length / itemsPerPage);

  return (
    <section className="special-product-container">
      <div className="special-product-header">
        <div className="special-product-title-container">
          <h2 className="special-product-title">special product</h2>
          <p className="special-product-paragraph">
            our new car collection for you
          </p>
        </div>
        
      <div className="pagination-button-container">
        <button
          className="toggle-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        <button
          className="toggle-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
      </div>

      <SpecialProductItems specialItems={currentItems} />
    </section>
  );
}
