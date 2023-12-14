import React from "react";
import { SessaoBanner } from "../SessaoBanner/indexBanner";
import { SessaoProdutos } from "../SessaoProdutos/indexProdutos";

function Main(){
    return(
        <main>
            <SessaoBanner />
            <SessaoProdutos />
        </main>
        
    )
}

export default Main;