/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';

function SizesProduct({ item, changeSize, form }) {
  return (
    <div>
      <label>
        <div className="group-catalog-item-size">
          <input
            type="radio"
            key={item.size}
            value={item.size}
            className="input-catalog-item-size"
            name="size"
            id="size-shoose"
            onChange={changeSize}
            checked={form.size === item.size}
          />
          <span className="catalog-item-size">{item.size}</span>
        </div>
      </label>
    </div>
  );
}

export default SizesProduct;

SizesProduct.defaultProps = { item: {}, form: {} };

SizesProduct.propTypes = {
  item: PropTypes.shape({
    size: PropTypes.string,
    avalible: PropTypes.bool,
  }),
  form: PropTypes.shape({
    size: PropTypes.string,
  }),
  changeSize: PropTypes.func.isRequired,
};
