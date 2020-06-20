import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Web = ({image, title, description, category}) => {
  return (
    <div>
      <div className="card mb-5">
        <img src={logo} className="card-img-top" alt="Class thumbnail" />
        <div className="card-body">
          <h5 className="card-title text-uppercase">{title}</h5>
          <p className="card-text font-weight-bolder">{description}</p>
          <Link type="button" className="btn btn-success float-left font-weight-bolder class-btn" to="/course">Ir al curso</Link>
        </div>
      </div>
    </div>
  )
}

export default Web;
