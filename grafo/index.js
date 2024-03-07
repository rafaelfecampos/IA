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

let s = new Vertice("s");
let a = new Vertice("a");
let b = new Vertice("b");
let c = new Vertice("c");
let d = new Vertice("d");
let e = new Vertice("e");
let f = new Vertice("f");
let g = new Vertice("g");
let h = new Vertice("h");
let t = new Vertice("t");

s.adicionarAresta(a,3.1);
s.adicionarAresta(d,4.9);
a.adicionarAresta(b,2.2);
d.adicionarAresta(e,3.1);
b.adicionarAresta(c,3.5);
b.adicionarAresta(f,5.1);
c.adicionarAresta(t,4.8);
f.adicionarAresta(g,2.2);
g.adicionarAresta(t,2.5);