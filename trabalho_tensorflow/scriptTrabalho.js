//https://www.kaggle.com/datasets/jainaru/marvel-movies-box-office-data/data

async function getData() {
    const marvelMoviesDataResponse = await fetch('./MarvelMovies.json');
    const marvelMoviesData = await marvelMoviesDataResponse.json();
    
    const cleaned = marvelMoviesData.map(movie => ({
        wg: movie.worldwidegross,
        budget: movie.budget
    })).filter(movie => (movie.wg != null && movie.budget != null));

    return cleaned;
}

async function run(){
    const data = await getData();
    const  values = data.map(d =>({
        x: d.budget,
        y: d.wg
    }))
    tfvis.render.scatterplot(
        {name: 'Budget v Worldwide Gross'},
        {values},
        {
            xLabel: 'Budget',
            yLabel: 'Worldwide Gross',
            height: 300
        }
    )

    const tensorData = convertToTensor(data);
    const {inputs, labels} = tensorData;

    await trainModel(model, inputs, labels);
    console.log("Training complete");

    testModel(model, data, tensorData);
}

document.addEventListener("DOMContentLoaded", run);


