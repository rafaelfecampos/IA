import Aresta from "./Aresta.js";

export default class Vertice{
    valor="";
    adjacentes=[];

    constructor(valor){
        this.valor = valor;
    }

    adicionarAresta(destino, peso){
        this.adjacentes.push(new Aresta(this, destino, peso));
    }
}