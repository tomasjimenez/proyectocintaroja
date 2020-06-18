import React from 'react'

const CreaTuCuenta = () => {
    return (
        <div>
        <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Correo Electronico</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Contraseña</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Dirección</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Punto de referencia" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Ciudad</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">País</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Código postal</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">    
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Crear Cuenta</button>
      </form>
        </div>
    )
}

export default CreaTuCuenta
