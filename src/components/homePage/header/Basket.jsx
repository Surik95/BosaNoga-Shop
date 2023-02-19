/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHref, useNavigate, Link } from 'react-router-dom';
import Search from '../../catalog/Search';

function Basket() {
  const { valueSearch } = useSelector((state) => state.catalog);
  const { basketTable } = useSelector((state) => state.basket);
  const [indicatorInput, setIndicator] = useState(true);
  const url = useHref();
  const navigate = useNavigate();

  const indicatorUrl = url !== '/catalog';

  const clickSearch = () => {
    if (indicatorInput) {
      setIndicator(false);
    } else {
      setIndicator(true);
    }
    if (valueSearch.trim() !== '' && !indicatorInput) {
      navigate('/catalog');
    }
  };

  return (
    <div className="header-controls-pics">
      {indicatorUrl && (
        <>
          <Search indicatorInput={indicatorInput} indicatorUrl={indicatorUrl} />
          <button
            data-id="search-expander"
            className="header-controls-pic header-controls-search"
            onClick={clickSearch}
            type="button"
          />
        </>
      )}
      <Link to="cart" className="header-controls-pic header-controls-cart">
        {basketTable.length > 0 && (
          <div className="header-controls-cart-full">{basketTable.length}</div>
        )}
        <div className="header-controls-cart-menu" />
      </Link>
    </div>
  );
}

export default Basket;
