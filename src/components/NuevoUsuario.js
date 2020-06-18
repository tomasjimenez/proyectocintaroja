import React from "react";

const NuevoUsuario = () => {
  return (
    <div>
      <div className="container">
       
        <form className="needs-validation" novalidate>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" className="form-control" id="validationCustom03" required />
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <select className="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div className="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" className="form-control" id="validationCustom05" required />
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary d-flex justify-content-center" type="submit">Submit form</button>
</form>

        </div>
      </div>
    
  );
};

export default NuevoUsuario;
