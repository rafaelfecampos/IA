import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";


// let v = new Vertice("v");
// let u = new Vertice("u");
// let w = new Vertice("w");
// let x = new xertice("x");
// let y = new xertice("y");

// v.adicionarAresta(u,0);
// v.adicionarAresta(w,0);
// v.adicionarAresta(x,0);
// u.adicionarAresta(u,0);
// u.adicionarAresta(x,0);
// w.adicionarAresta(x,0);
// w.adicionarAresta(x,0);
// x.adicionarAresta(y,0);

let s = new Vertice("s",null);
let a = new Vertice("a",8.1);
let b = new Vertice("b",5.2);
let c = new Vertice("c",4.8);
let d = new Vertice("d",8.3);
let e = new Vertice("e",6.4);
let f = new Vertice("f",4.7);
let g = new Vertice("g",2.5);
let t = new Vertice("t",null);

let grafo = new Grafo(s,t);

s.adicionarAresta(d,4.9);
s.adicionarAresta(a,3.1);
a.adicionarAresta(b,2.2);
d.adicionarAresta(e,3.1);
b.adicionarAresta(c,3.5);
b.adicionarAresta(f,5.1);
c.adicionarAresta(t,4.8);
f.adicionarAresta(g,2.2);
g.adicionarAresta(t,2.5);

let caminho = grafo.buscaAestrela();

console.log(caminho.imprimeCaminho(), caminho.retornaCustoTotal());