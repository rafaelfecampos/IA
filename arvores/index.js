import Arvore from "./Arvore.js";
import No from "./No.js";

let arvore = new Arvore('A');

console.log(arvore);

let noB = new No('C');
let noC = new No('C');
let noD = new No('D');
let noE = new No('E');
let noF = new No('F');


arvore.raiz.adicionarFilho(noB);
arvore.raiz.adicionarFilho(noC);
noC.adicionarFilho(noD);
noC.adicionarFilho(noE);
noB.adicionarFilho(noF);



console.log(arvore);