import { useAsyncError } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function Error({ message, requestFunc }) {
  const clickButton = (e) => {
    e.preventDefault();
    requestFunc();
  };
  const error = useAsyncError();
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Ошибка</h2>
            <p>{`Извините, ${message !== '' ? message : error.message} `}</p>
            <button className="btn btn-outline-primary" onClick={clickButton} type="button">
              Обновить
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Error;

Error.defaultProps = { message: '' };

Error.propTypes = {
  message: PropTypes.string,
  requestFunc: PropTypes.func.isRequired,
};
