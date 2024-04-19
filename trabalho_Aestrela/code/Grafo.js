import FilaAbertos from "./FilaAbertos.js";
import Rastreador from "./Rastreador.js";

export default class Grafo{
    inicio = null;
    meta = null;

    constructor(inicio, meta){
        this.inicio = inicio;
        this.meta = meta;
    }

    buscaAEstrela(){
        let rastreadoresAbertos = new FilaAbertos();
        let atual = null;
        let rastreadoresFechados = new Map();

        rastreadoresAbertos.adicionar(new Rastreador(this.inicio, null, 0));
        atual = rastreadoresAbertos.pegarPrimeiro();

        while(atual != null){
            if(atual.vertice == this.meta){

                return atual;
            }else{
                rastreadoresFechados.set(atual.vertice.ponto, atual);

                atual.vertice.adjacentes.forEach(aresta =>{
                    let v = aresta.destino;

                    if(!rastreadoresFechados.has(v.ponto)){
                        let rastreadorAntigo = rastreadoresAbertos.buscaRastreador(v);
                        let rastreadorNovo = new Rastreador(v, atual, v.heuristica);

                        if(!rastreadorAntigo){
                            rastreadoresAbertos.adicionar(rastreadorNovo);

                        }else{
                            if(rastreadorAntigo.getCusto() > rastreadorNovo.getCusto()){
                                rastreadoresAbertos.substituirRastreador(rastreadorAntigo, rastreadorNovo);
                            }
                        }
                    }
                })
            }

            atual = rastreadoresAbertos.pegarPrimeiro();
        }

        return null;
    }
}