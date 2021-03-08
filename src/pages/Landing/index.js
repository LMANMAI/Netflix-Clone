import React from 'react';
import './styles.scss';
import Hero from './auxiliars/Hero';
import Divider from './auxiliars/Divider';
import LandingSection from './auxiliars/Section';
import FAQ from './auxiliars/FAQ';
import { Footer } from '../../components';

function LandingPage() {
    return (
        <div className="LandingPage">
            <Hero />
            <Divider />
            <LandingSection 
                image="/images/home-tv.jpg"
                imageposition="rigth"
                tittle="Disfrutá en tu tele."
                subtittle={<>Mirá en smart TV, PlayStation, Xbox, <br/> Chromecast, Apple TV, reproductores de Blu-ray y más.</>}
            />
            <Divider />
            <LandingSection 
                image="/images/home-mobile.jpg"
                imageposition="left"
                tittle={<>Descargá tus series <br/>para mirarlas offline.</>}
                subtittle={<>Guardá tu contenido favorito y tené siempre <br/> algo para mirar.</>}
            />
            <Divider />
            <LandingSection 
                image="/images/home-imac.jpg"
                imageposition="rigth"
                tittle="Disfrutá donde quieras."
                subtittle={<>Películas y series ilimitadas en tu teléfono, <br/> tablet, computadora y tele sin costo extra.</>}
            />
            <Divider />
            <FAQ/>
            <Divider />
            <Footer />
        </div>
    )
}

export default LandingPage
