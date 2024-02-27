import No from "./No.js";
import BuscaBProfundidade from "./BuscaBPRofundidade.js";
import BuscaBLargura from "./BuscaBLargura.js";
class Arvore{
    raiz = null;

    constructor(valor){
        this.raiz= new No(valor);
    }

    buscarPPreOrdem(){
        BuscaBProfundidade.preOrdem(this.raiz);
    }

    buscarPEmOrdem(){
        BuscaBProfundidade.emOrdem(this.raiz);
    }

    buscarPPosOrdem(){
        BuscaBProfundidade.posOrdem(this.raiz);
    }

    buscarL(){
        BuscaBLargura.buscaLargura(this.raiz);
    }
}

export default Arvore;