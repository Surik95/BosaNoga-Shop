import React from 'react';
import PropTypes from 'prop-types';

function CatalogNameCategory({
  elem,
  changeCategoryElem,
  classCategoryActive,
}) {
  return (
    <li className="nav-item">
      <button
        className={classCategoryActive(elem.category)}
        onClick={(e) => changeCategoryElem(e, elem.category)}
        type="button"
      >
        {elem.name}
      </button>
    </li>
  );
}
export default CatalogNameCategory;

CatalogNameCategory.defaultProps = { elem: {} };

CatalogNameCategory.propTypes = {
  elem: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  }),
  changeCategoryElem: PropTypes.func.isRequired,
  classCategoryActive: PropTypes.func.isRequired,
};
