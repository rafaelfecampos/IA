export default class FilaAbertos{
    elementos = [];

    adicionar(rastreador){
        this.elementos.push(rastreador);
        this.elementos.sort((a,b)=>{
            if(a.retornaCustoTotal() < b.retornaCustoTotal()){
                return -1;
            }else if (a.retornaCustoTotal() > b.retornaCustoTotal()){
                return 1;
            }
            return 0
        })
    }

    retirarPrimeiro(){
        return this.elementos.shift();
    }
    
    buscaRastreador(vertice){
        let rastreadorEncontrado = null;

        this.elementos.forEach( rastreador =>{
            if( rastreador.vertice == vertice){
                rastreadorEncontrado = rastreador;
            }
        })

        return rastreadorEncontrado;
    }



    substituiRastrador(rastreadorAntigo, rastreadorNovo){
        let indiceAntigo = this.elementos.indexOf(rastreadorAntigo);
        this.elementos[indiceAntigo] = rastreadorNovo;
        this.ordenaFila();
    }
}