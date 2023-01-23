import {
    MUDARLENGTHBREAK, MUDARLENGTHSESSION,
    MUDARTEMPO, PLAY
} from '../actions/actionTypes';

const estadoInicial= {
    tempo: '25:00',
    breakLength: 5,
    sessionLength: 25,
    session: true,
    pause: true
};

export default function clockReducer(state=estadoInicial, action){
    
    switch(action.type){

        case MUDARLENGTHBREAK:
            return {
                ...state,
                breakLength: action.payload.length,
                tempo: action.payload.tempo
            };

        case MUDARLENGTHSESSION:
            return {
                ...state,
                sessionLength: action.payload.length,
                tempo: action.payload.tempo
            };

        case PLAY:
            return {
                ...state,
                pause: false
            };

        case MUDARTEMPO:
            return {
                ...state,
                tempo: action.payload.tempo
            };
                
        default:
            return state;
    }
}