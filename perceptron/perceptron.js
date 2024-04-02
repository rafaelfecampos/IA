export class Perceptron{
    weights = [0,0];

    constructor(){
        for(let i = 0; i < this.weights.length ; i++){
            this.weights[i] = random(-1,1);
        }
    }
    
    guess(inputs){
        let sum = 0;

        for(let i = 0; i < this.weights.length ; i++){
            sum+= inputs[i]*this.weights[i];
        }

        let output = sign(sum);

        return output;
    }
}