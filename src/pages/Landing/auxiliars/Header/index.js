import React from 'react';
import './styles.scss';

function Header() {
    return (
        <div className="LandingHeader">
            <img className="LandingHeader_logo" src="/images/Netflix_Logo.png" alt="Logo"/>
            <div className="LandingHeader_button">
                <p>Iniciar Sesíon</p>
            </div>
        </div>
    )
}

export default Header
                