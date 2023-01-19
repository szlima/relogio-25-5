import React from 'react';

import Comando from './Comando';

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
                        
            <footer>
                <p>Designed and Coded by</p>
                <a href='#'>Peter Weinberg</a>
            </footer>
        </React.Fragment>
    );
}