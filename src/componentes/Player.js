import React from 'react';
import {connect} from 'react-redux';

import {
    playingAction
} from '../redux/actions/actionCreators';

function Player({toPlay}){
      
    return (
        <div id='player'>
            <span id='start_stop' onClick={toPlay}>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-pause"></i>
            </span>
            <i className="fa-solid fa-arrows-rotate" id='reset'></i>
        </div>
    );
}
  
const mapDispatchToProps= dispatch => ({
    toPlay: () => dispatch(playingAction())
});
  
export default connect(null, mapDispatchToProps)(Player);
  