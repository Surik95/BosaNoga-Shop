import { useSelector } from 'react-redux';
import React from 'react';
import Basket from '../components/basket/Basket';
import BasketNone from '../components/basket/BasketNone';

function BasketPage() {
  const { basketTable } = useSelector((state) => state.basket);
  return basketTable.length > 0 ? <Basket /> : <BasketNone />;
}

export default BasketPage;
