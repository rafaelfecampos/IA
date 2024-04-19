export default class Rastreador{
    vertice = null;
    rastreadorAnterior = null;
    custo = 0;
    heuristica = null;

    constructor(vertice, rastreadorAnterior, heuristica){
        this.vertice = vertice;
        this.rastreadorAnterior = rastreadorAnterior;
        this.heuristica = heuristica;

        if(rastreadorAnterior != null){
            this.custo = this.rastreadorAnterior.custo 
                + this.rastreadorAnterior.vertice.buscaAresta(this.vertice).peso;
        }
    }

    imprimeCaminho(){
        let caminho = this.ordenarCaminho();
        let saida = "";
        caminho.forEach(rastreador => {
            if(caminho.indexOf(rastreador) == 0 )
                saida += rastreador.vertice.ponto;
            else
                saida += " --> " + rastreador.vertice.ponto;
        });
        console.log(saida + "\n");
    }

    ordenarCaminho(){
        let arrayRastreador = [];
        let atual = this;
        arrayRastreador.push(atual);

        while(atual.rastreadorAnterior != null){
            atual = atual.rastreadorAnterior;
            arrayRastreador.push(atual);
        }

        return arrayRastreador.reverse();
    }

    getCusto(){
        return this.custo + this.heuristica; 
    }
}