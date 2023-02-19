import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/homePage/header/Header';
import Footer from '../components/homePage/footer/Footer';
import Banner from '../components/Banner';

function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col" />
          <Banner />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
