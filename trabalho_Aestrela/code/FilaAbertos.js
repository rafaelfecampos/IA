export default class FilaAbertos{
    elementos = [];

    adicionar(rastreador){
        this.elementos.push(rastreador);
        this.ordenarFila();
    }

    ordenarFila(){
        this.elementos.sort((a,b) =>{
            return a.getCusto() - b.getCusto();
        });
    }

    pegarPrimeiro(){
        //retorna o primeiro e o retira da fila de rastradores abertos
        return this.elementos.shift();
    }

    buscaRastreador(verticeProcurado){
        let rastreadorEncontrado = null;

        this.elementos.forEach( rastreador => {
            if(rastreador.vertice == verticeProcurado){
                rastreadorEncontrado = rastreador;
            }
        });

        return rastreadorEncontrado;
    }

    substituirRastreador(rastreadorAntigo, rastreadorNovo){
        let idxAntigo = this.elementos.indexOf(rastreadorAntigo);
        this.elementos[idxAntigo] = rastreadorNovo;
        this.ordenarFila();
    }
    
}