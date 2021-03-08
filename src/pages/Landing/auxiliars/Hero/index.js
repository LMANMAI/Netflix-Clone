import React from 'react';
import './styles.scss';
import {Header} from '../../../../components';
import Membresia from '../Membresia';

function Hero() {
    return (
        <div className="LandingHero">
            <img className="LandingHero_bg" src="/images/home-bg.jpg" alt="fondo"/>
            <Header />
            <div className="LandingHero_content">          
                <h1 className="LandingHero_content_title">Películas y series ilimitadas <br/> y mucho más.</h1>
                <h3 className="LandingHero_content_subtitle">Disfrutá donde quieras. Cancelá cuando quieras.</h3>
                <Membresia />
            </div>            
        </div>
    )
}

export default Hero
