import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { basketChangeFormUser, clearBasket, basketSubmitOrder } from '../../slice/basketSlice';
import Loader from '../Loader';

function FormUser() {
  const dispatch = useDispatch();
  const {
    formUser, result, error, loading,
  } = useSelector(
    (state) => state.basket,
  );
  const [approval, setApproval] = useState(false);
  const navigaite = useNavigate();

  const changeForm = (e) => {
    dispatch(basketChangeFormUser({ [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (result === 204) {
      dispatch(clearBasket());
      navigaite('/');
    }
  }, [result]);

  const submitOrder = (e) => {
    e.preventDefault();
    const checkNumber = /^[8]\d{10}/.test(formUser.phone);

    if (approval && checkNumber) {
      dispatch(basketSubmitOrder());
    } else if (!approval) {
      // eslint-disable-next-line no-alert
      alert('Поставьте согласие в пункте "Согласен с правилами доставки"');
    } else if (!checkNumber) {
      // eslint-disable-next-line no-alert
      alert('Некорректный номер телефона');
    }
  };
  return (
    <form className="card-body" onSubmit={submitOrder}>
      <div className="form-group">
        <label htmlFor="phone">
          Телефон
          <input
            className="form-control"
            id="phone"
            placeholder="Ваш телефон"
            value={formUser.phone}
            name="phone"
            onChange={changeForm}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="address">
          Адрес доставки
          <input
            className="form-control"
            id="address"
            placeholder="Адрес доставки"
            value={formUser.address}
            name="address"
            onChange={changeForm}
          />

        </label>
      </div>
      <div className="form-group form-check">
        <label className="form-check-label" htmlFor="agreement">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreement"
            name="agreement"
            checked={approval}
            onChange={() => setApproval(!approval)}
          />
          Согласен с правилами доставки
        </label>
      </div>
      {loading && <Loader />}
      {error && (
        <h5 style={{ color: 'red' }}>
          Извините произошла ошибка. Оформите заказ повторно!
        </h5>
      )}
      <button type="submit" className="btn btn-outline-secondary">
        Оформить
      </button>
    </form>
  );
}
export default FormUser;
