import React from 'react';
import Question from '../Question';
import './styles.scss';

function FAQ() {
    return (
        <div className="FAQ">
           <h1 className="FAQ_tittle">Preguntas Frecuentes</h1>
          <div className="FAQ_Questions">
            <Question/>
            {/* <Question/>
            <Question/>
            <Question/>
            <Question/> */}
          </div>
        </div>
    )
}

export default FAQ
