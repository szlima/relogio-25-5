import {
    MUDARLENGTH, PLAY, MUDARTEMPO
} from './actionTypes';

let contador;

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
            case 'session':
                length= getState().clockReducer.sessionLength + mudanca;
                tempo= getState().clockReducer.session ? length + ':00' : getState().clockReducer.tempo;
                break;
        }

        if(tempo[1] === ':')
            tempo= '0'+tempo;
        
        dispatch(mudarLength(tipo, length, tempo));
    };
};

const play= () => ({
    type: PLAY
});

const mudarTempo= tempoNovo => ({
    type: MUDARTEMPO,
    payload: {
        tempo: tempoNovo
    }
});

export const playingAction= () => {
    return (dispatch, getState) => {
      
        dispatch(play());
        
        contador= setInterval(() => {
            const tempo= getState().clockReducer.tempo;
        
            if(tempo !== '00:00'){
          
                let minutosNovo='', segundosNovo='', tempoNovo='',
                    minutos= parseInt(tempo.substring(0,2)),
                    segundos= parseInt(tempo.substring(3));
  
                if(segundos-1 === -1){
                    segundosNovo= 59;
                    minutosNovo= minutos-1;
                }else{
                    segundosNovo= segundos-1;
                    minutosNovo= minutos;
                }
  
                if(minutosNovo < 10)
                    minutosNovo= '0' + minutosNovo;
                if(segundosNovo < 10)
                    segundosNovo= '0' + segundosNovo;
  
                tempoNovo= minutosNovo + ':' + segundosNovo;
                dispatch(mudarTempo(tempoNovo));          
            }else
                console.log('00:00');
        
        }, 1000);
    };
};