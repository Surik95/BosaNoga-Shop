import React from 'react';
import banner from '../img/banner.jpg';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} className="img-banner" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

export default Banner;
