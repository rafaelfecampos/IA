import Arvore from "./Arvore.js";
import No from "./No.js";

let arvore = new Arvore('A');

console.log(arvore);

let noA = arvore.raiz;
let noB = new No('B');
let noC = new No('C');
let noD = new No('D');
let noE = new No('E');
let noF = new No('F');


noA.adicionarFilhoEsquerda(noB);
noA.adicionarFilhoDireita(noC);
noB.adicionarFilhoDireita(noF);
noC.adicionarFilhoDireita(noE);
noC.adicionarFilhoEsquerda(noD);


console.log("Busca em pré ordem");
arvore.buscarPPreOrdem();

console.log("Busca em ordem");
arvore.buscarPEmOrdem();