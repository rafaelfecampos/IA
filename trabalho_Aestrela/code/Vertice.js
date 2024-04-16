import Aresta from "./Aresta.js";

export default class Vertice{
    ponto = "";
    heuristica = null;
    adjacentes = [];

    constructor(ponto, heuristica){
        this.ponto = ponto;
        this.heuristica = heuristica;
    }

    addAresta(destino, peso){
        this.adjacentes.push(new Aresta(this, destino, peso));
    }

    buscaAresta(vertice){
        let arestaEncontrada = null;
        this.adjacentes.forEach( aresta => {
            if(aresta.destino == vertice){
                arestaEncontrada = aresta;
            }
        });
        return arestaEncontrada;
    }
}