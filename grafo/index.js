// import Grafo from "./Grafo.js";
// import Vertice from "./Vertice.js";


// // let v = new Vertice("v");
// // let u = new Vertice("u");
// // let w = new Vertice("w");
// // let x = new xertice("x");
// // let y = new xertice("y");

// // v.adicionarAresta(u,0);
// // v.adicionarAresta(w,0);
// // v.adicionarAresta(x,0);
// // u.adicionarAresta(u,0);
// // u.adicionarAresta(x,0);
// // w.adicionarAresta(x,0);
// // w.adicionarAresta(x,0);
// // x.adicionarAresta(y,0);

// let s = new Vertice("s",null);
// let a = new Vertice("a",8.1);
// let b = new Vertice("b",5.2);
// let c = new Vertice("c",4.8);
// let d = new Vertice("d",8.3);
// let e = new Vertice("e",6.4);
// let f = new Vertice("f",4.7);
// let g = new Vertice("g",2.5);
// let t = new Vertice("t",null);

// let grafo = new Grafo(s,t);

// s.adicionarAresta(d,4.9);
// s.adicionarAresta(a,3.1);
// a.adicionarAresta(b,2.2);
// d.adicionarAresta(e,3.1);
// b.adicionarAresta(c,3.5);
// b.adicionarAresta(f,5.1);
// c.adicionarAresta(t,4.8);
// f.adicionarAresta(g,2.2);
// g.adicionarAresta(t,2.5);

// let caminho = grafo.buscaAestrela();

// console.log(caminho.imprimeCaminho(), caminho.retornaCustoTotal());

import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let origem = new Vertice("casa", null);
let a = new Vertice("a", 5.28);
let b = new Vertice("b", 5.13);
let c = new Vertice("c", 5.56);
let d = new Vertice("d", 2.22);
let e = new Vertice("e", 2.22);
let f = new Vertice("f", 2.22);
let g = new Vertice("g", 1.17);
let h = new Vertice("h", 0.41);
let i = new Vertice("i", 1.05);
let destino = new Vertice("Instituto Vianna Júnior", null);

let grafo = new Grafo(origem, destino);

origem.adicionarAresta(a, 2);
a.adicionarAresta(b, 1);
a.adicionarAresta(c, 1);
a.adicionarAresta(d, 5);
b.adicionarAresta(d, 5);
c.adicionarAresta(e, 5);
d.adicionarAresta(f, 0.5);
d.adicionarAresta(i, 3);
e.adicionarAresta(f, 0.5);
e.adicionarAresta(h, 4);
f.adicionarAresta(g, 2);
g.adicionarAresta(i, 0.5);
g.adicionarAresta(h, 2);
i.adicionarAresta(destino, 2);
h.adicionarAresta(destino, 2);

let caminho = grafo.buscaAestrela();

// console.log(caminho.imprimeCaminho(), caminho.retornaCustoTotal());
