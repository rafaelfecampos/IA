// // import Arvore from "./Arvore.js";
// import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
// import No from "./No.js";


// // let arvore = new Arvore('A');
// let arvoreBST = new ArvoreBuscaBinaria("A");

// // console.log(arvore);

// let noA = arvoreBST.raiz;
// let noB = new No('B');
// let noC = new No('C');
// let noD = new No('D');
// let noE = new No('E');
// let noF = new No('F');


// noA.adicionarFilhoEsquerda(noB);
// noA.adicionarFilhoDireita(noC);
// noB.adicionarFilhoDireita(noF);
// noC.adicionarFilhoDireita(noE);
// noC.adicionarFilhoEsquerda(noD);


// // console.log("Busca em pré ordem");
// // arvore.buscarPPreOrdem();

// // console.log("Busca em ordem");
// // arvore.buscarPEmOrdem();

// // console.log("Busca em pós ordem");
// // arvore.buscarPPosOrdem();

// // console.log("Busca em largura");
// // arvore.buscarL();

// console.log("Busca binaria");
// console.log(arvoreBST.buscar("E"));


import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
import BuscaBLargura from "./BuscaBLargura.js";

let arvoreBST = new ArvoreBuscaBinaria(100);

arvoreBST.inserir(50);
arvoreBST.inserir(200);
arvoreBST.inserir(30);
arvoreBST.inserir(70);
arvoreBST.inserir(140);
arvoreBST.inserir(400);
arvoreBST.inserir(65);
arvoreBST.inserir(80);
arvoreBST.inserir(105);
arvoreBST.inserir(107);
arvoreBST.inserir(350);


BuscaBLargura.buscaLargura(arvoreBST.raiz);