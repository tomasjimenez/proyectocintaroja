import React from "react";
import './login.css';




const Login = () => {
    return (

        <div>
            <section className="formulariologin">

                <div className="formularioimg">
                    <img src="./assets/TRUEQUEOIMG.png" alt="" />
                </div>

                <div className="usuario">
                    <p>Usuario / Correo Electronico</p>
                </div>

                <div className="usuarioinput">
                    <input type="text" />
                </div>

                <div className="contraseña">
                    <p>Contraseña:</p>
                </div>

                <div className="contraseñainput">
                    <input type="text" />
                </div>

                <div className="olvidastecontraseña">
                    <p>¿Olvidaste tu usuario o contraseña?</p>

                </div>

                <div className="botoniniciosesion">

                    <a href="./miperfil.html">INICIAR SESION</a>
                    
                </div>
                <a>Crear cuenta</a>
            </section>
        </div>
    );
};
export default Login;
