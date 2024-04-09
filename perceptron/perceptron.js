
class Perceptron{
    weights = [];
    lr = 0.1;

    constructor(numberWeigths){
        this.weights = new Array(numberWeigths)
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] = random(-1,1);
        }
    }

    train(input, target){
        const guess = this.guess(input);
        const error = target - guess;
        for(let i = 0;  i < this.weights.length; i++){
            this.weights[i] += error * input[i]*this.lr;
        }
    }

    guess(inputs){
        let sum = 0;

        for(let i = 0; i < this.weights.length; i++){
            sum += inputs[i] * this.weights[i];
        }
        const output = this.sign(sum);
        
        return output;
    }

    sign(num){
        return num >= 0 ? 1 : -1;
    }


}