import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">LOGO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Mi Perfil</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorías
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-4 my-lg-">
                        <input className="form-control mr-sm-2" type="search" placeholder="¿Qué quieres aprender hoy?" aria-label="Search" />
                        <Link to="/login"><button className="btn text-light my-2 my-sm-0 bg-info" type="submit">Iniciar Sesión</button></Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;