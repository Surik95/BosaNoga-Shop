import React from 'react';
import FooterInformation from './FooterInformation';
import Payment from './Payment';
import Copyrigth from './Copyrigth';
import Contacts from './Contacts';

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <FooterInformation />
        </div>
        <div className="col">
          <Payment />
          <Copyrigth />
        </div>
        <div className="col text-right">
          <Contacts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
