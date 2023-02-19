import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { catalogRequest, changeSearch } from '../../slice/catalogSlice';

function Search({ indicatorInput, indicatorUrl }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { valueSearch, categoryActive } = useSelector((state) => state.catalog);

  useEffect(() => {
    if (indicatorInput) {
      dispatch(changeSearch(''));
    }
  }, []);

  const filterRequest = (e) => {
    e.preventDefault();
    if (indicatorUrl && valueSearch.trim() !== '') {
      navigate('/catalog');
    }
    if (!indicatorUrl) {
      dispatch(catalogRequest({ url: { categoryId: categoryActive } }));
    }
  };

  const changeInput = (e) => [dispatch(changeSearch(e.target.value))];

  return (
    <form
      className={cn('form-inline', {
        'header-controls-search-form': indicatorUrl,
        'catalog-search-form': !indicatorUrl,
        invisible: indicatorInput,
      })}
      onSubmit={filterRequest}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        value={valueSearch}
        onChange={changeInput}
      />
    </form>
  );
}

export default Search;

Search.defaultProps = { indicatorInput: false, indicatorUrl: false };

Search.propTypes = {
  indicatorInput: PropTypes.bool,
  indicatorUrl: PropTypes.bool,
};
