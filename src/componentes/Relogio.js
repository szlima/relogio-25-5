import React from 'react';

function Relogio({sessao=true, tempo='25:00'}){

    return (
        <div id='relogio'>
            <h3 id='timer-label'>{sessao ? 'Session' : 'Break'}</h3>
            <h1 id='time-left'>
                {tempo[1] === ':' ? '0'+tempo : tempo}
            </h1>
        </div>    
    );
}
  
export default Relogio;
  