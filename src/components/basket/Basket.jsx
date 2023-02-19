import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, Fragment } from 'react';
import TableBasket from './TableBasket';
import FormUser from './FormUser';
import { basketRequestPrice } from '../../slice/basketSlice';

function Basket() {
  const { basketTable } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (basketTable.length > 0) {
      basketTable.forEach((element) => {
        dispatch(basketRequestPrice({ id: element.id, size: element.size }));
      });
    }
  }, [basketTable]);
  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <TableBasket />
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
          <FormUser />
        </div>
      </section>
    </>
  );
}

export default Basket;
