import No from "./No.js";
import BuscaBProfundidade from "./BuscaBPRofundidade.js"
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
}

export default Arvore;