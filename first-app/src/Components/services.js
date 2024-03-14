import React from 'react';

function Services() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-5">Our Services</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <a target='blank' href="https://muhammedyayla.github.io/MuhammetYaylaBlog/gd-projecets.html" className="btn btn-primary mt-2">My Adobe Photoshop Projects</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <a target='blank' href="https://github.com/muhammedyayla/" className="btn btn-primary mt-2">My Web Projects</a>
            </div>
          </div>
        </div>                  
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blogs</h5>
              <a target='blank' href="https://medium.com/@muhammedyayla" className="btn btn-primary mt-2">My Medium Blogs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Services;
