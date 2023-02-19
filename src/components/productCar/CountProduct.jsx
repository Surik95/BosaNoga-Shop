import PropTypes from 'prop-types';
import React from 'react';

function CountProduct({ changeCount, form }) {
  return (
    <>
      <span> Количество:</span>
      <div className="btn-group btn-group-sm pl-2">
        <button className="btn btn-secondary" onClick={changeCount} type="button">
          -
        </button>
        <input
          type="text"
          className="btn btn-outline-primary"
          name="count"
          value={form.count}
          disabled
          size="1"
        />
        <button className="btn btn-secondary" onClick={changeCount} type="button">
          +
        </button>
      </div>
    </>
  );
}

export default CountProduct;

CountProduct.defaultProps = { form: {} };

CountProduct.propTypes = {
  form: PropTypes.shape({
    count: PropTypes.number,
    category: PropTypes.string,
  }),
  changeCount: PropTypes.func.isRequired,
};
