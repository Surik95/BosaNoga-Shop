import { Link } from 'react-router-dom';
import React from 'react';

function BasketNone() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2>Ваша корзина пуста перейдите в каталог</h2>
            <Link to="/catalog" className="btn btn-outline-secondary">
              Перейти
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default BasketNone;
