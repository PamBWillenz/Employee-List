import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousLabel="Previous"
      nextLabel="Next"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
    />
  );
};

export default Pagination;
