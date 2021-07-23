import React,{ useState } from 'react';
import './styles.scss';

function Question({tittle, answer}) {
    const [open , SetOpen ] = useState(false);
    const toggleQuestion = () => {
        SetOpen(!open);
    }
    return (
        <div className="Question">
            <div  onClick={toggleQuestion} className="Question_tittle box">
                <h2 className="Question_tittle-text">
                    {tittle}
                </h2>
                <span className="Question_tittle-text">{open ? "X" : "+"}</span>
            </div>
        {open && 
           (<div className="Question_answer box">
                <p className="Question_answer-text">{answer}</p>
            </div>
            )}
        </div>
    )
}

export default Question
