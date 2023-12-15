import React from 'react';
import './styleContato.css';

export function SessaoContato(){
    return(
        <section className='sessaoContato'>
            <h2>Fale conosco</h2>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        
        <div className='containerContato'>
            <div className='contato'>
                <h4>Contato</h4>

                <ul>
                    <li>Nova Iguaçu, RJ</li>
                    <li>(21) 9999-9999</li>
                    <li>contato@oticavida.com</li>
                </ul>
            </div>

            <div className='redesSociais'>
                <h4>Nossas Redes Sociais</h4>

                <ul>
                    <li>/OticaVida</li>
                    <li>@oticavidarj</li>
                    <li>@oticavidarj</li>
                </ul>
            </div>
        </div>
            
            
        </section>
    )
}