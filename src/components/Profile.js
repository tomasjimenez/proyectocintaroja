import React, { useState } from 'react';
import image from '../user.png';
import AboutProfile from '../components/AboutProfile';
import PointsProfile from '../components/PointsProfile';
import HistoryProfile from '../components/HistoryProfile';
import CollaborationProfile from '../components/CollaborationProfile';
import { Link } from 'react-router-dom';

const Profile = () => {

    const [about, setDatos] = useState(false);
    const [points, setPuntaje] = useState(false);
    const [history, setHistorial] = useState(false);
    const [collaboration, setColaboracion] = useState(false);

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 text-center"><br></br>
                    <img src={image} className="rounded text-center" alt="profile" />
                    <p>Bienvenido: Admin User</p>
                    <button className="btn btn-primary" type="button">Cerrar Sesión</button>
                    <hr></hr>
                    <h1>Mi Perfil</h1>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a className="btn btn-light btn-lg" onClick={() => [setDatos(true), setPuntaje(false), setHistorial(false), setColaboracion(false)]}>Mis Datos</a>
                            </li>
                            <li className="list-group-item">
                                <a className="btn btn-light btn-lg" onClick={() => [setPuntaje(true), setDatos(false), setHistorial(false), setColaboracion(false)]}>Mi Puntaje</a>
                            </li>
                            <li className="list-group-item">
                                <a className="btn btn-light btn-lg" onClick={() => [setHistorial(true), setPuntaje(false), setDatos(false), setColaboracion(false)]}>Mi Historial</a>
                            </li>
                            <li className="list-group-item">
                                <a className="btn btn-light btn-lg" onClick={() => [setColaboracion(true), setHistorial(false), setPuntaje(false), setDatos(false)]}>Mi Colaboración</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light mb-3">
                        {about && <AboutProfile />}
                        {points && <PointsProfile />}
                        {history && <HistoryProfile />}
                        {collaboration && <CollaborationProfile />}
                    </div>
                    <button type="button" href="#" className="btn btn-secondary btn-lg btn-block">Explorar Contenido</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;


