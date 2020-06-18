import React, { useState } from 'react';
import Web from '../components/Web';
import Design from '../components/Design';
import Photo from '../components/Photo';
import Marketing from '../components/Marketing';

const CategoryContainer = () => {
  const [web, setWeb] = useState(true);
  const [design, setDesign] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const webClasses = [];
  const designClasses = [];
  const photoClasses = [];
  const marketingClasses = [];

  for (let i = 0; i < 6; i++) {
    webClasses.push(
      <div className="col-md-12 col-md-6 col-lg-4">
        <Web key="web" title="curso de front-end" description="Curso completo de desarrollo web Front-end y..." />
      </div>
    )

    designClasses.push(
      <div className="col-md-12 col-md-6 col-lg-4">
        <Design key="design" title="curso de ilustración" description="Curso completo de ilustración en Illustrator..." />
      </div>
    )

    photoClasses.push(
      <div className="col-md-12 col-md-6 col-lg-4">
        <Photo key="photo" title="curso de fotografía" description="Curso completo bases de fotografía y..." />
      </div>
    )

    marketingClasses.push(
      <div className="col-md-12 col-md-6 col-lg-4">
        <Marketing key="marketing" title="curso de marketing" description="Curso completo de iniciación en marketing..." />
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <h1 className="font-weight-bolder text-center">CATEGORÍAS</h1>
        <hr />
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <button className="btn btn-block btn-info font-weight-bolder" onClick={() => [setWeb(true), setDesign(false), setPhoto(false), setMarketing(false)]}>Desarrollo Web</button>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="btn btn-block btn-info font-weight-bolder" onClick={() => [setWeb(false), setDesign(true), setPhoto(false), setMarketing(false)]}>Diseño</button>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="btn btn-block btn-info font-weight-bolder" onClick={() => [setWeb(false), setDesign(false), setPhoto(true), setMarketing(false)]}>Fotografía</button>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="btn btn-block btn-info font-weight-bolder" onClick={() => [setWeb(false), setDesign(false), setPhoto(false), setMarketing(true)]}>Marketing</button>
          </div>
        </div>
        <hr />
        <div className="row">
          { web ? webClasses : null }
          { design ? designClasses : null }
          { photo ? photoClasses : null }
          { marketing ? marketingClasses : null }
        </div>
      </div>
    </div>
  )
}

export default CategoryContainer;
