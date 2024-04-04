
let perceptron

let points = new Array(100);

function setup(){
    createCanvas(550,550);
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1,1),random(-1,1));
        // points[i].debug();
    }
}

function draw(){
    background(255);
    points.forEach(point =>{
        point.show();
    })

}