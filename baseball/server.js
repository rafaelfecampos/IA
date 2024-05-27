require('@tensorflow/tfjs-node');

const http = require('http');
const socketio = require('socket.io');
const pitch_type = require('./pitch_type');
const { Socket } = require('dgram');

const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
const PORT = 8787;

//função para esperar por um determando ms

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    const port = PORT || PORT;
    const server = http.createServer();
    const io = socketio(server);

    server.listen(port , () =>{
        console.log(`> socket running on port ${port}`);
    });

    io.on('connection', (socket) =>{
        socket.on('predictSample', async(sample) =>{
            io.emit('predictResult', await pitch_type.predictSample(sample));
        });
    });

    let numTrainingIterations = 10;

    for(let i = 0; i< numTrainingIterations; i++){
        console.log(`Training #${i+1}/${numTrainingIterations}`);
        await pitch_type.model.fitDataset(pitch_type.trainingData, {epochs: 1});//fitDataSet treina o modelo
        await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
    }

    io.emit('trainingComplete', true);
}

run();