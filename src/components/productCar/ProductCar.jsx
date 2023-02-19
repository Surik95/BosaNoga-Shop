import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import Cart from './Cart';
import Loader from '../Loader';
import Error from '../Error';

function ProductCar() {
  const navigate = useNavigate();
  const { proDuctCartPromise } = useLoaderData();
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={proDuctCartPromise}
        errorElement={<Error requestFunc={() => navigate('')} />}
      >
        {(cart) => <Cart cartInfo={cart} />}
      </Await>
    </Suspense>
  );
}

export default ProductCar;
