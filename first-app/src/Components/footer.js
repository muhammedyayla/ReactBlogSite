import React from 'react';
import myLogo from '../img/my-logo.jpg'

function Footer() { 
  return (
    <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="mb-0 float-end mr-auto">Made by   <img src={myLogo} alt="Logo" style={{height: '50px', width: 'auto', borderRadius: '20px' }} /></p>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
