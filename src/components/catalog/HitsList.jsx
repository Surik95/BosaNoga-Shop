/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import CatalogList from './CatalogList';

function HitsList({ hits }) {
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <section className="hits">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {hits && hits.map((hit) => <CatalogList key={hit.id} item={hit} />)}
      </div>
    </section>
  );
}

export default HitsList;

HitsList.defaultProps = { hits: [] };

HitsList.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    id: PropTypes.number,
  })),
};
