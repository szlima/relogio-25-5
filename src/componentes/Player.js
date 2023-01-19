import React from 'react';

function Player(){
      
    return (
        <div id='player'>
            <span id='start_stop'>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-pause"></i>
            </span>
            <i className="fa-solid fa-arrows-rotate" id='reset'></i>
        </div>
    );
}
  
export default Player;
  