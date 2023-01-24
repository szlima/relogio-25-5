import React from 'react';
import {connect} from 'react-redux';

import {
    playingAction, pauseAction
} from '../redux/actions/actionCreators';

function Player({pause, toPlay, toPause}){
      
    return (
        <div id='player'>
            <span id='start_stop' onClick={pause ? toPlay : toPause}>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-pause"></i>
            </span>
            <i className="fa-solid fa-arrows-rotate" id='reset'></i>
        </div>
    );
}

const mapStateToProps= state => ({
    pause: state.clockReducer.pause
});

const mapDispatchToProps= dispatch => ({
    toPlay: () => dispatch(playingAction()),
    toPause: () => dispatch(pauseAction())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);
  