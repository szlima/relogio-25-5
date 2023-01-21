
const estadoInicial= {
    tempo: '25:00',
    breakLength: 5,
    sessionLength: 25,
    session: true,
    pause: true
};

export default function clockReducer(state=estadoInicial, action){
    
    switch(action.type){      
                
        default:
            return state;
    }
}