import No from "./No.js";

class Arvore{
    raiz = null;

    constructor(valor){
        this.raiz= new No(valor);
    }
}

export default Arvore;