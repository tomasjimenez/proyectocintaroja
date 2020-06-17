import React from 'react';
import Card from '../components/Card';

const CardContainer = () => {
  const classes = [];

  for (let i = 0; i < 6; i++) {
    classes.push(
      <div className="col-md-12 col-md-6 col-lg-4">
        <Card key="asd" title="curso de front-end" description="Curso completo de desarrollo web Front-end y..." />
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <h1 className="font-weight-bolder text-center my-4">CATEGORÍAS</h1>
        <div className="row">
          {classes}
        </div>
      </div>
    </div>
  )
}

export default CardContainer;
