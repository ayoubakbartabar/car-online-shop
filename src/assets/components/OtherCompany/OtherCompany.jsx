import React, { useState } from "react";
import "./OtherCompany.css";
import otherCompanyData from "./OtherCompanyData";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function OtherCompany() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(otherCompanyData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = otherCompanyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="other-company-container">
      <button
        className="toggle-btn"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      <div className="company-grid">
        {currentItems.map((company) => (
          <Link key={company.id} to={company.href} className="company-box">
            <img className="company-image" src={company.image} alt={company.company} />
          </Link>
        ))}
      </div>

      <button
        className="toggle-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </section>
  );
}
