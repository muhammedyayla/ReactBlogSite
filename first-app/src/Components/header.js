import React from 'react';
import myImg from '../img/my.jpg'; // Import the image

function Header() {
  return (
    <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 73% 84%, 0 100%)' }} className="bg-dark pt-5 pb-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img src={myImg} alt="Muhammet Yayla" style={{ padding: 10, borderRadius:60 }} className="profile-img img-fluid " />
        </div>
        <div className="col-md-8 text-white">
          <h2 className="text-white">Muhammet Yayla</h2>
          <p className="profile-occupation ">Developer & IT <span className="text-danger fst-normal fw-bold">SZC TV</span></p>
          <p className="profile-bio">Hello, I'm 20 years old and living in Turkey. I'm working at SZC TV in the IT department. I'm interested in Front-end web development.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;

