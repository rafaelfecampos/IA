class BuscaBProfundidade{
    static preOrdem(no){
        if(!no){
            return;
        }
        console.log(no.valor);

        this.preOrdem(no.filhoEsquerda);
        this.preOrdem(no.filhoDireita);
    }
    static emOrdem(no){
        if(!no){
            return;
        }

        this.emOrdem(no.filhoEsquerda);
        console.log(no.valor);
        this.emOrdem(no.filhoDireita);
    }

    static posOrdem(no){
        if(!no){
            return;
        }

        this.posOrdem(no.filhoEsquerda);
        this.posOrdem(no.filhoDireita);
        console.log(no.valor);

    }

    
}

export default BuscaBProfundidade;