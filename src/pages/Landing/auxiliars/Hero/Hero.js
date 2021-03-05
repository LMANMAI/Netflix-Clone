import React from 'react';
import './Hero.scss';
import Header from '../Header';

function Hero() {
    return (
        <div className="LandingHero">
            <img className="LandingHero_bg" src="/images/home-bg.jpg" alt="fondo"/>
            <Header />
        </div>
    )
}

export default Hero
