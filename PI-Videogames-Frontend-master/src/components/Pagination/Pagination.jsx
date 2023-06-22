import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // Número máximo de páginas visibles
  const halfVisiblePages = Math.floor(maxVisiblePages / 2); // Mitad de las páginas visibles
  let startPage;
  let endPage;

  if (totalPages <= maxVisiblePages) {
    // Si hay menos páginas que el número máximo de páginas visibles, se muestran todas
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfVisiblePages) {
    // Si la página actual está cerca del comienzo, se muestran las primeras páginas más los puntos suspensivos
    startPage = 1;
    endPage = maxVisiblePages;
  } else if (currentPage + halfVisiblePages >= totalPages) {
    // Si la página actual está cerca del final, se muestran las últimas páginas más los puntos suspensivos
    startPage = totalPages - maxVisiblePages + 1;
    endPage = totalPages;
  } else {
    // Si la página actual está en el medio, se muestran páginas alrededor de la actual más los puntos suspensivos
    startPage = currentPage - halfVisiblePages;
    endPage = currentPage + halfVisiblePages;
  }

  function handlePageChange(page) {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }
    onPageChange(page);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => {
            if (index + 1 >= startPage && index + 1 <= endPage) {
              return (
                <li
                  key={index}
                  className={`page-item ${index + 1 === currentPage && "active"}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            }
            return null;
          })}
          {endPage < totalPages && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}
          <li
            className={`page-item ${currentPage === totalPages && "disabled"}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

