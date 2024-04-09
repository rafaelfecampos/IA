
let perceptron;

let points = new Array(500);

function setup(){
    createCanvas(550,550);
    perceptron = new Perceptron(2);
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1,1),random(-1,1));
    }
}

function draw(){
    background(255);
    points.forEach(point =>{
        point.show();
    });
    
    noStroke();

    points.forEach( pt =>{
        const inputs = [pt.x, pt.y];
        const target = pt.label;
        const guess = perceptron.guess(inputs);
        if (guess == target){
            fill(0, 255, 0);
        }else{
            fill(255,0,0)
        }

        ellipse(pt.getPixelX(), pt.getPixelY(), 15,15)
    });

    drawLine();
    trainSinglePoint();

}

function drawLine(){
    stroke(0,0,255)
    line(0,height,width,0);
}

let trainningIndex = 0;

function trainSinglePoint(){
    const pt = points[trainningIndex];
    const inputs = [pt.x, pt.y];
    perceptron.train(inputs, pt.label);
    trainningIndex++;
    if(trainningIndex == points.length){
        trainningIndex = 0;
    };
}