import React from 'react';
import {connect} from 'react-redux';

function Relogio({sessao, tempo}){

    if(document.querySelector('#relogio') !== null){
        const classesRelogio= document.querySelector('#relogio').classList;
      
        if(tempo.substring(0,2) === '00')
            classesRelogio.add('minuto-final');
        else if(tempo.substring(0,2) !== '00' && classesRelogio.contains('minuto-final'))
            classesRelogio.remove('minuto-final');
    }

    return (
        <div id='relogio'>
            <h3 id='timer-label'>{sessao ? 'Session' : 'Break'}</h3>
            <h1 id='time-left'>{tempo}</h1>
            <audio id='beep' src='https://actions.google.com/sounds/v1/alarms/beep_short.ogg'/>
        </div>
    );
}

const mapStateToProps= state => ({
    sessao: state.clockReducer.session,
    tempo: state.clockReducer.tempo
});
  
export default connect(mapStateToProps)(Relogio);
  