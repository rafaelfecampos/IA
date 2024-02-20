class No{
    valor = "";
    filhoDireita = null;
    filhoEsquerda = null;
    
    constructor(valor){
        this.valor = valor;
    }

    adicionarFilhoDireita(no){
        if(no instanceof No){
            this.filhoDireita = no;
        }else{
            throw new Error ('Era esperado um nó como filho');
        }
    }
    adicionarFilhoEsquerda(no){
        if(no instanceof No){
            this.filhoEsquerda = no;
        }else{
            throw new Error ('Era esperado um nó como filho');
        }
    }
}

export default No;