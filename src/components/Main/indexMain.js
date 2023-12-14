import React from "react";
import { SessaoBanner } from "../SessaoBanner/indexBanner";
import { SessaoProdutos } from "../SessaoProdutos/indexProdutos";
import { SessaoSobre } from "../SessaoSobre/indexSobre";

function Main(){
    return(
        <main>
            <SessaoBanner />
            <SessaoProdutos />
            <SessaoSobre />
        </main>
        
    )
}

export default Main;