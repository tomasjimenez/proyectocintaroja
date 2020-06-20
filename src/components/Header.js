import React from 'react';
import { Link } from 'react-router-dom';
import Login2 from '../components/Login2';


const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Mi Perfil</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/categories" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorías
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-">

                        < Login2 />
                        <Link to="/login"><button className="btn font-weight-bolder text-light my-2 my-sm-0 bg-info" type="submit">Iniciar Sesión</button></Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;