import React from 'react';
import './styles.scss';

function Membresia() {
    return (
        <div className="Membresia">
            <h6 className="Membresia_content-text">¿Querés mirar Netflix ya? Ingresá tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h6>
            <div className="Email_content_input">
                <input type="text" placeholder="Email"/>
                <div className="Button">
                    <p className="Button_text">
                        Comenzar {'>'}
                    </p>
                </div>
             </div>
        </div>
    )
}

export default Membresia
