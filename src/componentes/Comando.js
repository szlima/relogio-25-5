import React from 'react';

function Comando({tipo, breakLength=5, sessionLength=25}){
  
    const tamanho= tipo === 'break' ? breakLength : sessionLength;
        
    return (
        <div id={`${tipo}-label`}>
            <h2>{`${tipo[0].toUpperCase()}${tipo.substring(1)} Length`}</h2>
        
            <div className='display-length'>
                <i className="fa-solid fa-arrow-up" id={`${tipo}-increment`} ></i>
                <span id={`${tipo}-length`}>{tamanho}</span>
                <i className="fa-solid fa-arrow-down" id={`${tipo}-decrement`} ></i>
            </div>      
        </div>
    );
}

export default Comando;