class No{
    valor = "";
    filhos = [];
    
    constructor(valor){
        this.valor = valor;
    }

    adicionarFilho(no){
        if(no instanceof No){
            this.filhos.push(no);
        }else{
            throw new Error ('Era esperado um nó como filho');
        }
    }
}

export default No;