import React from 'react';
import './styles.scss';

function LandingSection({image, imageposition, tittle, subtittle}) {
    return (
        <div className="LandingSection">
           {imageposition === "rigth" ? null :<img className="LandingSection_image" src={image} alt={tittle}/>}    
            <div>
                <h3 className="LandingSection_tittle">{tittle}</h3>
                <p className="LandingSection_text">{subtittle}</p>
            </div>   
          {imageposition !== "left"  ?<img className="LandingSection_image" src={image} alt={tittle}/> :null }        
        </div>
    )
}

export default LandingSection
