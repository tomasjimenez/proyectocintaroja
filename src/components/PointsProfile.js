import React from 'react';

const PointsProfile = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Mi Puntaje
                </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Hola, </b>Admin User</h5>
                    <span type="button" class="btn btn-primary">
                        Tu puntaje es 🥇 : <span class="badge badge-light">60</span>  
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PointsProfile
