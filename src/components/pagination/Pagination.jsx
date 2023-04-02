import React from 'react';
import s from './Pagination.module.css';

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const clickPrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const clickNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <button
        onClick={() => clickPrevPage()}
        disabled={currentPage === 1 && true}
      >
        ← Prev
      </button>
      <input value={currentPage} disabled={true} />
      <button
        onClick={() => clickNextPage()}
        disabled={currentPage === totalPages && true}
      >
        Next →
      </button>
    </div>
  );
};
