import React from 'react';
import './styleProdutos.css';

export function SessaoProdutos(){
    return (
        <section>
            <h2>Nossos produtos</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            
            <div>
                <h4>Óculos de grau</h4>
                <img src='/assets/imgs/oculos01.png' alt=''/>
                <p>R$ 500,00</p>
            </div>

            <div>
                <h4>Óculos transition</h4>
                <img src='/assets/imgs/oculos02.png' alt=''/>
                <p>R$750,00</p>
            </div>

            <div>
                <h4>Óculos de sol</h4>
                <img src='/assets/imgs/oculos03.png' alt=''/>
                <p>R$700,00</p>
            </div>

            <div>
                <h4>Óculos infantil</h4>
                <img src='/assets/imgs/oculos04.png' alt=''/>
                <p>R$500,00</p>
            </div>

            <p>Todos os nossos produtos incluem:</p>

            <ul>
                <li>Garantia de 1ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    )
}