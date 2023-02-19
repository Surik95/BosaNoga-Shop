import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/homePage/header/Header';
import Footer from '../components/homePage/footer/Footer';

function Error404() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col" />
          <Banner />
          <main className="container">
            <div className="row">
              <div className="col">
                <section className="top-sales">
                  <h2 className="text-center">Страница не найдена</h2>
                  <p>Извините, такая страница не найдена!</p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Error404;
