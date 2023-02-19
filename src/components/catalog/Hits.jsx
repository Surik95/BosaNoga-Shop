import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import HitsList from './HitsList';
import Loader from '../Loader';
import Error from '../Error';

function Hits() {
  const { hitsPromise } = useLoaderData();
  const navigate = useNavigate();
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={hitsPromise}
        errorElement={<Error requestFunc={() => navigate('')} />}
      >
        {(hits) => <HitsList hits={hits} />}
      </Await>
    </Suspense>
  );
}

export default Hits;
