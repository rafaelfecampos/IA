export default class Rastreador{
    vertice = null;
    anterior = null;
    custo = 0;
    heuristica = null;

    constructor(vertice, anterior, heuristica){
        this.vertice = vertice;
        this.anterior = anterior;
        this.heuristica = heuristica;
        if(anterior != null){
            this.custo = this.anterior.custo + this.anterior.vertice.buscaAresta(this.vertice).peso;
        }
    }

    imprimeCaminho(){
        let atual = this;
        let saida = atual.vertice.valor;

        while (atual.anterior != null){
            atual = atual.anterior;
            saida += "-->"+atual.vertice.valor;
        }
        console.log(saida+"\n");
    }
    retornaCustoTotal(){
        return this.custo + this.heuristica;
    }
}