import React,{ useState } from 'react';
import './styles.scss';

function Question() {
    const [open , SetOpen ] = useState(false);
    const toggleQuestion = () => {
        SetOpen(!open);
    }
    return (
        <div className="Question">
            <div  onClick={toggleQuestion} className="Question_tittle box">
                <h2 className="Question_tittle-text">
                    ¿Que es Netflix?
                </h2>
                <span className="Question_tittle-text">{open ? "X" : "+"}</span>
            </div>
        {open && 
           (<div className="Question_answer box">
                <p className="Question_answer-text">
                Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.<br/><br/>
                Todo lo que quieras mirar, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                </p>
            </div>
            )}
        </div>
    )
}

export default Question
