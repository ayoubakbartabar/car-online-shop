import React, { useState } from "react";
import "./TopProduct.css";
import { products } from "./TopProductData";
import ButtonCategory from "./ButtonCategory";
import TopProductItem from "./TopProductItem";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// crete new array for categories
const allCategories = [
  "all",
  ...new Set(products.flatMap((product) => product.categories)),
];

export default function TopProduct() {
  // set Hook
  const [items, setItem] = useState(products);
  const [productCategory, setProductCategory] = useState(allCategories);
  // set hook for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filterProduct = (category) => {
    if (category === "all") {
      setItem(products);
      setCurrentPage(1);
      return;
    }
    // set filter method
    const filteredProduct = products.filter(
      (datas) => datas.categories === category
    );
    setItem(filteredProduct);
    setCurrentPage(1);
  };

  // patination problem
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <section className="top-product-container">
      <div className="top-product-header">
        <div className="top-product-title-container">
          <h2 className="top-product-title">top products</h2>
          <p className="top-product-paragraph">
            our new car collection for you
          </p>
        </div>
        <ButtonCategory
          productCategory={productCategory}
          filterProduct={filterProduct}
        />
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
      <TopProductItem items={currentItems} />
    </section>
  );
}
