import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let s = new Vertice("s",null);
let a = new Vertice("a",7);
let b = new Vertice("b",9);
let c = new Vertice("c",2);
let d = new Vertice("d",4);
let e = new Vertice("e",5);
let t = new Vertice("t",0);

let grafo = new Grafo(s,t);

s.adicionarAresta(a,3);
s.adicionarAresta(b,2);
a.adicionarAresta(c,5);
b.adicionarAresta(d,7);
b.adicionarAresta(e,7);
c.adicionarAresta(t,3);
d.adicionarAresta(t,4);
e.adicionarAresta(d,2);