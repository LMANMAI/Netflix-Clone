import React from 'react';
import './styles.scss';
import Header from '../Header';

function Hero() {
    return (
        <div className="LandingHero">
            <img className="LandingHero_bg" src="/images/home-bg.jpg" alt="fondo"/>
            <Header />
            <div className="LandingHero_content">          
                <h1 className="LandingHero_content_title">Películas y series ilimitadas <br/> y mucho más.</h1>
                <h3 className="LandingHero_content_subtitle">Disfrutá donde quieras. Cancelá cuando quieras.</h3>
                <h6 className="LandingHero_content_text">¿Querés mirar Netflix ya? Ingresá tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h6>
                <div className="Email_content_input">
                    <input type="text" placeholder="Email"/>
                        <div className="Button">
                            <p className="Button_text">
                                Comenzar {'>'}
                            </p>
                        </div>
                </div>
            </div>            
        </div>
    )
}

export default Hero
