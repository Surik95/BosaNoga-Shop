import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable jsx-a11y/scope */
function BasketItem({ item, countRow, deleteItem }) {
  return (
    <tr>
      <td scope="row">{countRow}</td>
      <td>
        <a href="/products/1.html">{item.title}</a>
      </td>
      <td>{item.size}</td>
      <td>{item.count}</td>
      <td>
        {item.price}
        руб.
      </td>
      <td>{item.sumPrice}</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={(e) => deleteItem(e, item)}
          type="button"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default BasketItem;

BasketItem.defaultProps = { item: {}, countRow: 1 };

BasketItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    size: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
    sumPrice: PropTypes.number,
  }),
  countRow: PropTypes.number,
  deleteItem: PropTypes.func.isRequired,
};
