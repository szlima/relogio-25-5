import React from 'react';
import {connect} from 'react-redux';

import {mudarLengthAction} from '../redux/actions/actionCreators';

function Comando({tipo, pause, breakLength, sessionLength, mudarLength}){
  
    const tamanho= tipo === 'break' ? breakLength : sessionLength;
    
    const mudar= mudanca => {
        if(pause && !(tamanho === 1 && mudanca === -1) && !(tamanho === 60 && mudanca === 1))
            mudarLength(tipo, mudanca);
    };

    return (
        <div id={`${tipo}-label`}>
            <h2>{`${tipo[0].toUpperCase()}${tipo.substring(1)} Length`}</h2>
        
            <div className='display-length'>
                <i className="fa-solid fa-arrow-up" id={`${tipo}-increment`} onClick={() => mudar(1)}></i>
                <span id={`${tipo}-length`}>{tamanho}</span>
                <i className="fa-solid fa-arrow-down" id={`${tipo}-decrement`} onClick={() => mudar(-1)}></i>
            </div>      
        </div>
    );
}

const mapStateToProps= state => ({
    pause: state.clockReducer.pause,
    breakLength: state.clockReducer.breakLength,
    sessionLength: state.clockReducer.sessionLength
});

const mapDispatchToProps= dispatch => ({
    mudarLength: (tipo, mudanca) => dispatch(mudarLengthAction(tipo, mudanca))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comando);