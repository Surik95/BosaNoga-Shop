import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import BasketItem from './BasketItem';
import { deleteItemBasket } from '../../slice/basketSlice';

function TableBasket() {
  const { basketTable } = useSelector((state) => state.basket);
  let countRow = 0;
  const navigaite = useNavigate();
  const dispatch = useDispatch();

  const deleteItem = (e, item) => {
    e.preventDefault();
    dispatch(deleteItemBasket(item));
    if (basketTable.length === 1) {
      navigaite('/catalog');
    }
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {basketTable.map((item) => {
          countRow += 1;
          return (
            <BasketItem
              key={item.id}
              item={item}
              countRow={countRow}
              deleteItem={deleteItem}
            />
          );
        })}
        <tr>
          <td colSpan="5" className="text-right">
            Общая стоимость
          </td>
          <td>{basketTable.reduce((acc, item) => acc + item.sumPrice, 0)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableBasket;
