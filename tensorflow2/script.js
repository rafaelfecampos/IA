// obter os dados do carro reduzindo as variaves que nos interessam
//e limpar dados vazios
async function getData(){
    const carsDataResponse = await
    fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car=>({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower
    }))
    .filter(car=>(car.mpg != null && car.horsepower != null))

    return cleaned;
}

async function run(){
    //carrega e plota os dados de entrada originais nos quais vamos treinar
    const data = await getData();
    const  values = data.map(d =>({
        x: d.horsepower,
        y: d.mpg
    }))
    tfvis.render.scatterplot(
        {name: 'Horsepower v MPG'},
        {values},
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
        }
    )
}
document.addEventListener('DOMContentLoaded',run)

function createModel(){
    //cria um modelo sequenial
    const model = tf.sequential();

    //adiciona uma unica camada de entrada
    model.add(tf.layers.dense({inputShape: [1], units: 1, userBias: true}))

    //adiciona uma camada de saida
    
}