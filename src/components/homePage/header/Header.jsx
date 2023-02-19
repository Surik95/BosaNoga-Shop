import React from 'react';
import Basket from './Basket';
import FormNavbar from './FormNavbar';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapase navbar-collapse" id="navbarMain">
              <Navbar />
              <div>
                <FormNavbar />
                <Basket />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
