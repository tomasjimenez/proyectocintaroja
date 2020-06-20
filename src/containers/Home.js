import React from 'react'
import header from '../assets/header.png';
import music from '../assets/music-class.png';
import login from '../assets/login.png';
import search from '../assets/search.png';
import change from '../assets/change.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="fluid-container">
                <img src={header} className="hero-banner img-fluid" alt="Class thumbnail" />
                <div className="container container-banner">
                    <h1 className=" title-banner">Intercambia conocimiento y genera comunidad</h1>
                    <p className="lead">En <strong>Truequeo</strong> reconocemos el valor del conocimiento y las habilidades
                    que tienes; tocar el piano, resolver ecuaciones, hornear un pastel, diseñar páginas web, seguro hay alguien que quiere aprenderlo y esta
                    dispuesto a intercambiarlo por otro conocimiento.<br />
                    ¿Y tú qué quieres aprender hoy?
                    </p>
                </div>
            </div>
            <div className="info fluid-container">
                <div className="left about" >
                    <h1><strong>¿Qué es Truequeo?</strong> </h1>
                    <div className="lead">
                        <p>Truequeo es la primer plataforma donde la moneda de cambio son tus habilidades y conocimientos.</p>
                        <p>Puedes aprender programación a cambio de clases de guitarra, compartir tu receta favorita y obtener ayuda para tu sitio web, eso que tú sabes
                        para alguien más es valioso y lo que tú necesitas alguien más lo tiene.
                    </p>
                        <p>¿Estás listo para el trueque?</p>
                    </div>
                    <button type="button" class="btn btn-info btn-lg"><strong>Iniciar</strong></button>
                </div>
                <div className="right">
                    <img src={music} className="img-fluid" alt="Class thumbnail" />
                </div>
            </div>
            <div className="steps">
                <div className="container">
                    <h1><strong>¡Estoy listo para empezar!</strong></h1>
                    <div className="content-steps">
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src={login} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">¡Regístrate!</h5>
                                <p className="card-text ">Para poder acceder es necesario te registres y completes tu perfil.
                                <br />
                                Recuerda poner todas tus habilidades y lo que das a cambio en tu perfil.</p>
                            </div>
                        </div>
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src={search} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">¡Busca!</h5>
                                <p className="card-text ">Navega entre las diversas categorías y perfiles de usuarios para encontrar lo que necesitas.
                                Desde una asesoría de inglés hsta un sitio web</p>
                            </div>
                        </div>
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src={change} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">¡Intercambia!</h5>
                                <p className="card-text ">Encuentra el curso que necesitas y manda una solicitud de "trueque", cuando él usuario acepte
                                recibirás una notificación para poder acceder al curso.</p>
                            </div>
                        </div>
                    </div>
                    <Link to="#" class="btn btn-lg cta" >Registrame</Link>
                </div>
            </div >
            <div className="featured fluid-container ">
                <h1 className="text-center"><strong>Cursos destacados</strong></h1>
                <div class="mx-auto">
                    <div className="col-md-12 col-md-6 col-lg-3 ">
                        <div className="card">
                            <img src={music} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">title</h5>
                                <p className="card-text font-weight-bolder">lorem kasjlaksjdlakjsdlajdslkjaljdlasjdlajkdlasjdlasdkj</p>
                                <button type="button" className="btn btn-success float-left font-weight-bolder class-btn">Ir al curso</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src={music} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">title</h5>
                                <p className="card-text font-weight-bolder">lorem kasjlaksjdlakjsdlajdslkjaljdlasjdlajkdlasjdlasdkj</p>
                                <button type="button" className="btn btn-success float-left font-weight-bolder class-btn">Ir al curso</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-6 col-lg-3">
                        <div className="card">
                            <img src={music} className="card-img-top" alt="Class thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">title</h5>
                                <p className="card-text font-weight-bolder">lorem kasjlaksjdlakjsdlajdslkjaljdlasjdlajkdlasjdlasdkj</p>
                                <button type="button" className="btn btn-success float-left font-weight-bolder class-btn">Ir al curso</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="#" class="btn btn-lg more mx-auto" >Ver más cursos</Link>
            </div>
        </div >
    )
}

export default Home
