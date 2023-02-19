import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import SizesProduct from './SizesProduct';
import { basketChangeForm, addBasket } from '../../slice/basketSlice';
import CountProduct from './CountProduct';

function FormatCartProduct({ cartInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector((state) => state.basket);

  const changeSize = ({ target }) => {
    dispatch(basketChangeForm({ [target.name]: target.value }));
  };

  const changeCount = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === '+' && form.count < 10) {
      dispatch(basketChangeForm({ count: form.count + 1 }));
    } else if (e.target.innerHTML === '-' && form.count > 1) {
      dispatch(basketChangeForm({ count: form.count - 1 }));
    }
  };

  const addProductBasket = (e) => {
    e.preventDefault();
    if (form.size) {
      dispatch(
        addBasket({
          id: cartInfo.id,
          price: cartInfo.price,
          title: cartInfo.title,
          sumPrice: cartInfo.price * form.count,
        }),
      );
      navigate('/cart');
    }
  };

  return (
    <>
      <form className="character-product-cart">
        Размеры в наличии:
        {cartInfo.sizes.map(
          (item) => item.avalible && (
            <SizesProduct
              item={item}
              form={form}
              key={item.size}
              changeSize={changeSize}
            />
          ),
        )}
        <CountProduct changeCount={changeCount} form={form} />
      </form>
      <button
        className="btn btn-danger btn-block btn-lg"
        onClick={addProductBasket}
        type="button"
      >
        В корзину
      </button>
    </>
  );
}

export default FormatCartProduct;

FormatCartProduct.defaultProps = { cartInfo: {} };

FormatCartProduct.propTypes = {
  cartInfo: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.shape({
      size: PropTypes.string,
      avalible: PropTypes.bool,
    })),
  }),
};
