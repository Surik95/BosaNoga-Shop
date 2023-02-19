import PropTypes from 'prop-types';
import React from 'react';
import FormCartProduct from './FormCartProduct';

function Cart({ cartInfo }) {
  return (
    <section className="catalog-item">
      <h2 className="text-center">{cartInfo.title}</h2>
      <div className="row">
        <div className="col-5">
          <img
            src={cartInfo.images[0]}
            className="img-fluid"
            alt={cartInfo.title}
          />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{cartInfo.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{cartInfo.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{cartInfo.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{cartInfo.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{cartInfo.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{cartInfo.reason}</td>
              </tr>
            </tbody>
          </table>
          <FormCartProduct cartInfo={cartInfo} />
        </div>
      </div>
    </section>
  );
}

export default Cart;

Cart.defaultProps = { cartInfo: {} };

Cart.propTypes = {
  cartInfo: PropTypes.shape({
    reason: PropTypes.string,
    season: PropTypes.string,
    material: PropTypes.string,
    color: PropTypes.string,
    manufacturer: PropTypes.string,
    sku: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
