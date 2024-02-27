class BuscaBLargura{
    static buscaLargura(raiz){
        let atual = null;
        let lista = [];
        if(!raiz){
            return;
        }

        lista.push(raiz);
        while (lista.length > 0){
            atual = lista.shift();
            console.log(atual.valor);

            if(atual.filhoEsquerda){
                lista.push(atual.filhoEsquerda);
            }
            if(atual.filhoDireita){
                lista.push(atual.filhoDireita);
            }
        }
    }
}

export default BuscaBLargura;