import React from 'react';
import image from '../user2.png'

const CourseView = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-12 text-center">
                    <h1>CURSO DE DESARROLLO WEB</h1><br></br>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/137857207" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 text-center"><br></br>
                    <h6>CREADOR: TOMAS JIMENEZ</h6>
                </div>
                <div className="col-md-6 text-center"><br></br>
                    <h6>VALORACIÓN: ⭐️⭐️⭐️⭐️</h6>
                </div>
                <div className="col-md-2 text-center"><br></br>
                    <h6>COMENTARIOS:</h6>
                    <img src={image} style={{width: "50%"}}></img><br></br>
                </div>
                <div className="col-md-10"><br></br>
                    <h6>⭐️⭐️⭐️⭐️⭐️</h6>
                    <p>"MUY BUEN CURSO" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptate corporis. Nulla vitae tempore ducimus non velit sed nostrum modi, autem optio quae illum, a officiis repudiandae excepturi unde atque.</p><br></br>
                </div>
            </div>
        </div>
    )
}

export default CourseView
