import {
    MUDARLENGTH
} from './actionTypes';

const mudarLength= (tipo, length, tempo) => ({
    type: MUDARLENGTH + tipo.toUpperCase(),
    payload: {
        length, 
        tempo
    }
});

export const mudarLengthAction= (tipo, mudanca) => {
    return (dispatch, getState) => {

        let length, tempo;

        switch(tipo){
            case 'break':
                length= getState().clockReducer.breakLength + mudanca;
                tempo= !getState().clockReducer.session ? length + ':00' : getState().clockReducer.tempo;
                break;
        }
        
        dispatch(mudarLength(tipo, length, tempo));
    };
};