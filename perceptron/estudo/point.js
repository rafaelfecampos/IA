function f(x){
    //y = ax+b
    return 0.3 * x + 0.2;
}
class Point {
    x = 0;
    y = 0;
    bias = 1;
    label = 0;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.label = this.getLabel();
    }

    getLabel() {
        const lineY = f(this.x);
        if(this.y > lineY){
            return 1
        }else{
            return -1
        }
    }

    getPixelX(){
        const px = map(this.x, -1, 1, 0, width)
        /*map(a, b, c, d, e)
        a = valor
        b e c = defienm o alcance original
        d e e = definem o novo alcance*/
        return px;
    }

    getPixelY(){
        const py = map(this.y, -1, 1, height, 0);
        return py;
    }

    show(){
        stroke(0); //define a cor do ponto
        if(this.label === 1){
            fill(0); //preenche o ponto
        }
        else{
            fill(255);
        }
        const px = this.getPixelX();
        const py = this.getPixelY();
        ellipse(px, py, 22, 22);
        /*ellipese(a, b, c ,d)
        a e b = definem o centro da elipse no plano cartesiano
        c e d = definem a altura e a largura*/
    }

    debug(){
        console.log(`label: ${this.label}\nx: ${this.x}\ny: ${this.y}`);
    }
}