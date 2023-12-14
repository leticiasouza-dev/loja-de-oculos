import React from 'react';
import './styleHeader.css';

function Header(){
    return(
        <header>
            <img src="/assets/imgs/logo.png" alt='oiii'/>

            <nav>
                <ul>
                    <li>Produtos</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header