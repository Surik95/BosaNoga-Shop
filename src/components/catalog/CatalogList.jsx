import { Link, useHref } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function CatalogList({ item }) {
  const navigate = useHref();
  const url = navigate === '/' ? `catalog/${item.id}` : `${item.id}`;
  const colRef = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (colRef) {
      setHeight(`${colRef.current.offsetWidth * 1.1}`);
    }
  }, [colRef]);

  return (
    <div className="col-4" ref={colRef}>
      <div className="card catalog-item-card">
        <div className="card-img">
          <img
            src={item.images[0]}
            className="card-img-top img-fluid"
            alt={item.title}
            style={{ height: `${height}px` }}
          />
        </div>
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{`${item.price} руб.`}</p>
          <Link to={url} className="btn btn-outline-secondary">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatalogList;

CatalogList.defaultProps = { item: {} };

CatalogList.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
  }),
};
