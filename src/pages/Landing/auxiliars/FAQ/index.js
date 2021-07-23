import React from 'react';
import Membresia from '../Membresia';
import Question from '../Question';
import './styles.scss';

function FAQ() {
    const DATA =[
        {
            tittle: "¿Que es Netflix?",
            answer: <>Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.<br/><br/>
            Todo lo que quieras mirar, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</>
        },{
            tittle: "¿Cuanto cuesta Netflix",
            answer: "Disfrutá Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 279 hasta $ 669 por mes (sin impuestos incluidos). Sin costos adicionales ni contratos."
        },{
            tittle: "¿Donde puedo mirar Netflix?",
            answer: <>Mirá donde quieras, cuando quieras y en todos los dispositivos que quieras. Iniciá sesión en tu cuenta de Netflix para mirar contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.<br/><br/>
            Además, podés descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, podés mirar donde vayas y sin conexión a internet. Llevá Netflix con vos adonde sea.</>
        },{
            tittle: "¿Como Cancelo?",
            answer: "Netflix es flexible. Sin contratos molestos ni compromisos. Cancelá la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando vos quieras."
        },{
            tittle: "¿¿Que puedo mirar en Netflix?",
            answer: "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras mirar, cuando quieras."
            
        }
    ]
    return (
        <div className="FAQ">
           <h1 className="FAQ_tittle">Preguntas Frecuentes</h1>
            <div className="FAQ_Questions">
                {/* de esta manera react automaticamente asigna un Key unico dejando el MAP mucho mas limpio */}
                {React.Children.toArray(
                    DATA.map(dato => (
                        //Paso una copia del dato porque en el componente ya lo estoy destructurando
                        <Question  {...dato} />
                    )))}           
            </div>
            <Membresia />
        </div>
    )
}

export default FAQ
