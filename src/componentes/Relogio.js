import React from 'react';
import {connect} from 'react-redux';

function Relogio({sessao, tempo}){

    return (
        <div id='relogio'>
            <h3 id='timer-label'>{sessao ? 'Session' : 'Break'}</h3>
            <h1 id='time-left'>{tempo}</h1>
        </div>    
    );
}

const mapStateToProps= state => ({
    sessao: state.clockReducer.session,
    tempo: state.clockReducer.tempo
});
  
export default connect(mapStateToProps)(Relogio);
  