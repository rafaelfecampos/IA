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


origem.addAresta(a, 2);
a.addAresta(b, 1);
a.addAresta(d, 5);
a.addAresta(c, 1);
b.addAresta(d, 5);
c.addAresta(e, 5);
d.addAresta(f, 0.5);
d.addAresta(i, 3);
e.addAresta(f, 0.5);
e.addAresta(h, 4);
f.addAresta(g, 2);
g.addAresta(i, 0.5);
g.addAresta(h, 2);
i.addAresta(destino, 2);
h.addAresta(destino, 2);


let caminho = grafo.buscaAEstrela();

console.log("O caminho ideal encontrado pela busca A* é:");
caminho.imprimeCaminho();
console.log( "O tempo gasto por este caminho é " + caminho.getCusto() + " minutos");
