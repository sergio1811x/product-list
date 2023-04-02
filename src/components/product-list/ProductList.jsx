import { getFetchItems } from '../../api/fetchItems';
import s from './ProductList.module.css';
import { Item } from './item/Item';
import { Pagination } from '../pagination/Pagination';
import React, { useState } from 'react';
import { Loader } from '../loader/Loader';

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsInPage] = useState(6);
  const { data } = getFetchItems();

  const pageData = data.slice(
    (currentPage - 1) * itemsInPage,
    currentPage * itemsInPage,
  );
  const totalPages = data.length / itemsInPage;

  return (
    <>
      {data?.length > 0 ? (
        <div>
          <div className={s.header}>
            <img
              src={'https://cdn.onlinewebfonts.com/svg/img_421812.png'}
              alt={'logo'}
            />
            <h1>Product list</h1>
          </div>
          <div className={s.wrapper}>
            <div className={s.items}>
              {pageData?.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
