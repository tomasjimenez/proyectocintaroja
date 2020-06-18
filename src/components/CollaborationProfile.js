import React from 'react';
import image from '../disenoweb2.png';

const CollaborationProfile = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Mi Colaboración
                </div>
                <div className="card-body">
                    <h5 className="card-title"><b>Hola, </b>Admin User</h5>
                    <p>Estas son tus colaboraciones 👨‍👩‍👦‍👦</p>
                    <img src={image} alt="history" />
                </div>
            </div>
        </div>
    )
}

export default CollaborationProfile
