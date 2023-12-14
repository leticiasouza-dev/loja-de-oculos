import React from 'react';
import './styleSobre.css';

export function SessaoSobre(){
    return(
        <section>
            <h2>Quem somos nós?</h2>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao 
                público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
            </p>

            <div>
                <div><img src='/assets/imgs/loja.png' alt=''/></div>
                <div>
                    <h3>Nossas filiais</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div>
                    <h3>Atendimento flexível</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <div><img src='/assets/imgs/atendimento.png' alt=''/></div>
            </div>
        </section>
        
    )
}