import React from 'react';
import {connect} from 'react-redux';

import {
    playingAction, pauseAction, resetAction
} from '../redux/actions/actionCreators';

function Player({pause, toPlay, toPause, toReset}){
      
    return (
        <div id='player'>
            <span id='start_stop' onClick={pause ? toPlay : toPause}>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-pause"></i>
            </span>
            <i className="fa-solid fa-arrows-rotate" id='reset' onClick={toReset}></i>
        </div>
    );
}

const mapStateToProps= state => ({
    pause: state.clockReducer.pause
});

const mapDispatchToProps= dispatch => ({
    toPlay: () => dispatch(playingAction()),
    toPause: () => dispatch(pauseAction()),
    toReset: () => dispatch(resetAction())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);
  