import React from "react";

const Pagination = (props) => {
  const { currentPage, goPrev, goNext, itemsPerPage, totalItems } = props;
  const prevPageAvailable = currentPage > 0;
  const nextPageAvailable =
    currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button disabled={!prevPageAvailable} onClick={goPrev} className="btn">
        ←
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={!nextPageAvailable} onClick={goNext} className="btn">
        →
      </button>
    </div>
  );
};

export default Pagination;
