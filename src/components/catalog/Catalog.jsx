import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import cn from 'classnames';
import CatalogNameCategory from './CatalogNameCategory';
import { catalogRequest, changeCategory } from '../../slice/catalogSlice';
import CatalogList from './CatalogList';
import Loader from '../Loader';
import SearchNone from './SearchNone';
import Error from '../Error';

function Catalog() {
  const dispatch = useDispatch();
  const {
    items, categoryActive, indicatorButtonLoad, loading, error,
  } = useSelector((state) => state.catalog);
  useEffect(() => {
    dispatch(catalogRequest());
  }, []);

  const changeCategoryElem = (e, categoryId) => {
    e.preventDefault();
    dispatch(changeCategory({ url: { categoryId } }));
  };

  const loadCart = (categoryId) => {
    dispatch(
      catalogRequest({ url: { categoryId, offset: items.length }, add: true }),
    );
  };

  const classCategoryActive = (category) => cn('nav-link', {
    active: categoryActive === category,
    add: false,
  });
  const nameCategory = [
    { name: 'Все', category: '' },
    { name: 'Женская обувь', category: '13' },
    { name: 'Мужская обувь', category: '12' },
    { name: 'Обувь унисекс', category: '14' },
    { name: 'Детская обувь', category: '15' },
  ];

  return (
    <div className="row">
      <div className="col">
        <section className="catalog">
          {error && (
            <Error
              message={error}
              requestFunc={() => {
                dispatch(catalogRequest());
              }}
            />
          )}

          {!error && (
            <>
              <h2 className="text-center">Каталог</h2>
              <Outlet />
              <ul className="catalog-categories nav justify-content-center">
                {nameCategory.map((item) => (
                  <CatalogNameCategory
                    key={item.category}
                    elem={item}
                    changeCategoryElem={changeCategoryElem}
                    classCategoryActive={classCategoryActive}
                  />
                ))}
              </ul>
            </>
          )}
          <div className="row">
            {items.length === 0 && !loading && !error && <SearchNone />}
            {items
              && items.map((item) => <CatalogList item={item} key={item.id} />)}
          </div>
          {loading && !error && <Loader />}
          <div className="text-center">
            {indicatorButtonLoad && !error && (
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  if (!loading) {
                    loadCart(categoryActive);
                  }
                }}
                type="button"
              >
                Загрузить ещё
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Catalog;
