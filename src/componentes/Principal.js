import React from 'react';

import Comando from './Comando';
import Relogio from './Relogio';
import Player from './Player';

export default function Principal(){
    
    return (
        <React.Fragment>
            <header>
                <h1>25 + 5 Clock</h1>
            </header>

            <div id='comandos'>
                <Comando tipo='break'/>
                <Comando tipo='session'/>
            </div>

            <Relogio/>
            <Player/>
                        
            <footer>
                <p>Designed and Coded by</p>
                <a href='#'>Peter Weinberg</a>
            </footer>
        </React.Fragment>
    );
}