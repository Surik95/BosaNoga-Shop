import React from 'react';
import Catalog from '../components/catalog/Catalog';
import Hits from '../components/catalog/Hits';

function Main() {
  return (
    <main className="container">
      <Hits />
      <Catalog />
    </main>
  );
}

export default Main;
