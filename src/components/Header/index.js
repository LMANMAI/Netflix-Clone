import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
function Header({showButton = true}) {
    return (
        <div className="LandingHeader">
            <img className="LandingHeader_logo" src="/images/Netflix_Logo.png" alt="Logo"/>
            {showButton &&(<Link to="/Login">
                <div className="LandingHeader_button">
                    <p>Iniciar Sesíon</p>
                </div>
            </Link>)}
        </div>
    )
}

export default Header
                