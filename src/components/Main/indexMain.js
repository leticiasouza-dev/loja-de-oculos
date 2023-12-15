import React from "react";
import { SessaoBanner } from "../SessaoBanner/indexBanner";
import { SessaoProdutos } from "../SessaoProdutos/indexProdutos";
import { SessaoSobre } from "../SessaoSobre/indexSobre";
import { SessaoContato } from "../SessaoContato/indexContato";

function Main(){
    return(
        <main>
            <SessaoBanner />
            <SessaoProdutos />
            <SessaoSobre />
            <SessaoContato />
        </main>
        
    )
}

export default Main;